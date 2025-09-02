"use client"

import React, { useEffect, useState } from 'react'
import './Contact.scss';
import Data from './Data.json';
import { countryCodes } from '@/public/CountryCodes';
import { ContactForm } from '@/api/ContactForm/ContactForm';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { EmailSending } from '@/api/EmailApi/EmailSending';
import LoadingModal from '../LoadingModal';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        mobileNoCode: "",
        mobile: "",
        country: "",
        industry: "",
    })

    const [errors, setErrors] = useState({})
    const [maxPhoneLength, setMaxPhoneLength] = useState("") // default fallback
    const [minLen, setMinLen] = useState(1);
    const [isLocal, setIsLocal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLocal(["localhost", "nzen"]?.includes(window.location.hostname));
    }, []);

    // useEffect(() => {
    //     if (typeof window !== 'undefined' && window.location.hash === '#contact-section') {
    //         const el = document.getElementById('contact-section');
    //         if (el) {
    //             el.scrollIntoView({ behavior: 'smooth' });
    //         }
    //     }
    // }, []);

    const ensureArray = (val) => Array.isArray(val) ? val : [val];

    const buildEmailData = (type, formData) => {
        if (type === "support") {
            return {
                fromEmail: "noreply@optigoapps.com",
                toEmail: ensureArray("support@orail.in"), // support email
                subject: `New Inquiry Request Received – ${formData.firstName} ${formData.lastName}`,
                message: `Hi Team, \n A new lead has submitted the contact form. Below are the details: \n Name: ${formData.firstName} ${formData.lastName} \n Company Name: ${formData.companyName} \n Business Email: ${formData.email} \n Phone Number: ${formData.mobile} \n Country / Region: ${formData.country} \n Industry: ${formData.industry} \n Please reach out to the lead within 24 business hours. \n Regards, \n https://optigoapps.com`,
                mode: "contact",
                ufcc: isLocal ? "orail25" : "test74",
                templateNo: "1"
            };
        }

        throw new Error("Invalid email type");
    };

    // ✅ when country changes, update phone maxLength
    useEffect(() => {
        const selected = countryCodes.find(c => c.code === formData.country);
        if (selected) {
            if (Array.isArray(selected.phoneLength)) {
                setMaxPhoneLength(Math.max(...selected.phoneLength));
            } else if (selected.min && selected.max) {
                setMaxPhoneLength(selected.max);
            } else if (selected.phoneLength) {
                setMaxPhoneLength(selected.phoneLength);
            } else {
                setMaxPhoneLength(15); // fallback
            }
        }
    }, [formData.country]);

    const validate = () => {
        const newErrors = {};
        const { firstName, lastName, email, companyName, mobile, country, industry } = formData;
        if (!firstName?.trim()) newErrors.firstName = "First Name is required";
        if (!lastName?.trim()) newErrors.lastName = "Last Name is required";
        if (!email?.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }
        if (!companyName?.trim()) newErrors.companyName = "Company Name is required";

        if (!mobile) {
            newErrors.mobile = "Please enter your mobile number";
        } else if (mobile.length < minLen || mobile.length > maxPhoneLength) {
            if (minLen === maxPhoneLength) {
                newErrors.mobile = `Mobile number must be ${maxPhoneLength} digits`;
            } else {
                newErrors.mobile = `Mobile number must be between ${minLen} and ${maxPhoneLength} digits`;
            }
        }

        if (!country?.trim()) newErrors.country = "Country is required";
        if (!industry?.trim()) newErrors.industry = "Industry is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))

        if (name === "country") {
            const country = countryCodes.find((c) => c.label === value);
            let phoneCode = '';
            let min = 1;
            let max = 15; // Default max length

            if (country) {
                phoneCode = country.phone;
                if (Array.isArray(country.phoneLength)) {
                    min = Math.min(...country.phoneLength);
                    max = Math.max(...country.phoneLength);
                } else if (country.phoneLength) {
                    min = country.phoneLength;
                    max = country.phoneLength;
                } else if (country.min && country.max) {
                    min = country.min;
                    max = country.max;
                }
            }

            setMinLen(min);
            setMaxPhoneLength(max);

            setFormData((prev) => ({
                ...prev,
                mobileNoCode: phoneCode,
            }));
        }

        setErrors(prev => ({ ...prev, [name]: '' }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        if (validate()) {
            setIsLoading(true);
            try {
                const response = await ContactForm(formData);
                if (response?.Data?.rd?.[0]?.stat === 1) {
                    toast.success(response?.Data?.rd?.[0]?.stat_msg);
                    const emailData = buildEmailData("support", formData);
                    const emailResponse = await EmailSending({ emailData });

                    if (emailResponse?.status === 200) {
                        toast.success(emailResponse?.message);
                        setFormData({
                            firstName: '',
                            lastName: '',
                            email: '',
                            companyName: '',
                            mobileNoCode: '',
                            mobile: '',
                            country: '',
                            industry: '',
                        });
                        setErrors({});
                    } else {
                        toast.error(emailResponse?.message || "Error while sending email");
                    }
                } else {
                    toast.error(response?.Data?.rd?.[0]?.stat_msg || "Error while submitting form");
                }
            } catch (error) {
                console.error("Error during form submission:", error);
                toast.error("An unexpected error occurred");
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <section className="contact-section" id="contact-section">
            <LoadingModal isOpen={isLoading} />
            <h2>Let's Connect</h2>
            <p>Contact us and we'll have a Business Development Representative contact you within 24 business hours.</p>

            <form className="form-grid" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label>First Name <span>*</span></label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? 'error-input' : ''}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                    <label>Last Name <span>*</span></label>
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? 'error-input' : ''}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
                <div className="form-group">
                    <label>Business Email Address <span>*</span></label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error-input' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label>Company Name <span>*</span></label>
                    <input
                        type='text'
                        name='companyName'
                        placeholder='Company Name'
                        value={formData.companyName}
                        onChange={handleChange}
                        className={errors.companyName ? 'error-input' : ''}
                    />
                    {errors.companyName && <span className="error-message">{errors.companyName}</span>}
                </div>
                <div className="form-group">
                    <label>Country <span>*</span></label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={(e) => {
                            handleChange(e);
                            if (errors.country) {
                                setErrors(prev => ({ ...prev, country: "" }));
                            }
                        }}
                        onBlur={() => {
                            if (!formData.country) {
                                setErrors(prev => ({ ...prev, country: "Please select your country" }));
                            }
                        }}
                        className={errors.country ? "error" : ""}
                    >
                        <option value="">Select Country</option>
                        {countryCodes.map(c => (
                            <option key={c.code} value={c.label}>
                                {c.label} (+{c.phone})
                            </option>
                        ))}
                    </select>
                    {errors.country && <span className="error-message">{errors.country}</span>}
                </div>

                <div className="form-group">
                    <label>Phone <span>*</span></label>
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Phone Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        maxLength={maxPhoneLength}
                        className={errors.mobile ? 'error-input' : ''}
                    />
                    {errors.mobile && <span className="error-message">{errors.mobile}</span>}
                    {maxPhoneLength !== "" && (
                        <small style={{ color: "#555" }}>
                            Max length is {maxPhoneLength} digits
                        </small>
                    )}
                </div>
                <div className="form-group full-width">
                    <label>Industry <span>*</span></label>
                    <select
                        name="industry"
                        value={formData.industry || ""}
                        onChange={handleChange}
                        className={errors.industry ? "error-input" : ""}
                        required
                    >
                        <option value="" disabled>
                            Select your Industry
                        </option>
                        {Data?.industries?.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    {errors.industry && <span className="error-message">{errors.industry}</span>}
                </div>

                <div className="form-group full-width">
                    <button type="submit" className="submit-btn" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>

            <p className="disclaimer">
                By clicking “Submit” you agree that we may process your personal data provided in the above form for communicating with you as our potential or actual customer as described in our <Link href="#">Privacy Policy</Link>.
            </p>
        </section >
    )
}

export default Contact;
