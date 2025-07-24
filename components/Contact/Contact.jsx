import React, { useEffect, useState } from 'react'
import './Contact.scss';
import Link from 'next/link';

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        phone: "",
        country: "",
        industry: "",
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash === '#contact-section') {
            const el = document.getElementById('contact-section');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const validate = () => {
        const newErrors = {};
        const { firstName, lastName, email, companyName, phone, country, industry } = formData;
        if (!firstName?.trim()) {
            newErrors.firstName = "First Name is required";
        }
        if (!lastName?.trim()) {
            newErrors.lastName = "Last Name is required";
        }
        if (!email?.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }
        if (!companyName?.trim()) {
            newErrors.companyName = "Company Name is required";
        }
        if (!phone.trim()) {
            newErrors.phone = 'Phone Number is required';
        } else {
            // Validate phone number: only digits, length 7-15 (adjust as needed)
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phone)) {
                newErrors.phone = 'Phone Number is invalid (only digits, 10 characters)';
            }
        }
        if (!country?.trim()) {
            newErrors.country = "Country is required";
        }
        if (!industry?.trim()) {
            newErrors.industry = "Industry is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
        setErrors(prev => ({ ...prev, [name]: '' })); // Clear error on change
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Submit form logic here (e.g., API call)
            alert('Form submitted successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                companyName: '',
                phone: '',
                country: '',
                industry: '',
            });
            setErrors({});
        }
    };

    return (
        <section className="contact-section" id="contact-section">
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
                    <label>Phone Number <span>*</span></label>
                    <input
                        type='text'
                        name='phone'
                        placeholder='Phone Number'
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'error-input' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                <div className="form-group">
                    <label>Country / Region <span>*</span></label>
                    <select
                        name='country'
                        placeholder='Country / Region'
                        value={formData.country}
                        onChange={handleChange}
                        className={errors.country ? 'error-input' : ''}
                    >
                        <option value="">Select...</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>
                    {errors.country && <span className="error-message">{errors.country}</span>}
                </div>
                <div className="form-group full-width">
                    <label>Industry <span>*</span></label>
                    <select
                        name='industry'
                        placeholder='Industry'
                        value={formData.industry}
                        onChange={handleChange}
                        className={errors.industry ? 'error-input' : ''}
                    >
                        <option value="">Select...</option>
                        <option value="jewelry">Jewelry</option>
                        <option value="fashion">Fashion</option>
                        <option value="manufacturing">Manufacturing</option>
                    </select>
                    {errors.industry && <span className="error-message">{errors.industry}</span>}
                </div>

                <div className="form-group full-width">
                    <button type="submit">Submit →</button>
                </div>
            </form>

            <p className="disclaimer">
                By clicking “Submit” you agree that we may process your personal data provided in the above form for communicating with you as our potential or actual customer as described in our <Link href="#">Privacy Policy</Link>.
            </p>
        </section >
    )
}

export default Contact
