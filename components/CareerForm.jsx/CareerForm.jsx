'use client';

import React, { useRef, useState } from 'react';
import './CareerForm.scss';
import { useRouter } from 'next/navigation';
import { countryCodes } from '@/public/CountryCodes';
import jobData from '@/public/jobsOpenings';

const CareerForm = () => {
    const navigate = useRouter();
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    const ALLOWED_TYPES = [
        'application/msword',                 // .doc
        'application/pdf',                   // .pdf
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
        'application/rtf',                   // .rtf
        'application/vnd.oasis.opendocument.text', // .odt
        'image/jpg',
        'image/png'
    ];

    const fileInputRef = useRef(null);
    const [resumeFile, setResumeFile] = useState(null);
    const [resumeError, setResumeError] = useState('');

    const [errors, setErrors] = useState([]);

    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email: '',
        mobileCode: '',
        mobile: '',
        years: '',
        joinDays: '',
        currentLocation: '',
        department: '',
        consent: false,
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        validateFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        validateFile(file);
    };

    const validateFile = (file) => {
        if (!file) return;

        if (!ALLOWED_TYPES.includes(file.type)) {
            setResumeError('Invalid file type. Allowed: .doc, .pdf, .docx, .rtf, .odt, .jpg, .png');
            setResumeFile(null);
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setResumeError('File size exceeds 10MB limit.');
            setResumeFile(null);
            return;
        }

        setResumeFile(file);
        setResumeError('');
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        const {
            firstName,
            middleName,
            lastName,
            gender,
            email,
            mobileCode,
            mobile,
            years,
            joinDays,
            currentLocation,
            department,
            consent
        } = formData;

        // Validate individual fields
        if (!firstName?.trim()) newErrors.firstName = "Please enter your first name";
        if (!middleName?.trim()) newErrors.middleName = "Please enter your middle name";
        if (!lastName?.trim()) newErrors.lastName = "Please enter your last name";
        if (!gender) newErrors.gender = "Please select your gender";

        if (!email) {
            newErrors.email = "Please enter your email";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!mobileCode) {
            newErrors.mobileCode = "Please select your mobile code";
        }

        if (!mobile) {
            newErrors.mobile = "Please enter your mobile number";
        } else if (!/^\d{10}$/.test(mobile)) {
            newErrors.mobile = "Mobile number must be 10 digits";
        }

        if (!years?.trim()) {
            newErrors.years = "Please enter your experience in years";
        }

        if (!joinDays || parseInt(joinDays) <= 0) {
            newErrors.joinDays = "Please enter the number of days to join";
        }

        if (!currentLocation?.trim()) {
            newErrors.currentLocation = "Please enter your current location";
        }

        if (!department?.trim()) {
            newErrors.department = "Please select your department";
        }

        if ((consent !== true)) {
            newErrors.consent = "Please accept the terms and conditions";
        }

        // Handle file validation
        if (!resumeFile) {
            setResumeError("Please upload your resume.");
        } else {
            setResumeError(""); // clear if valid
        }

        // If any errors exist
        if (Object.keys(newErrors).length > 0 || !resumeFile) {
            setErrors(newErrors);
            return;
        }

        // All validations passed
        setErrors({});
        setResumeError("");
        // console.log("Form submitted successfully", formData);
    };



    return (
        <div className="apply-form">
            {/* <h1 className="apply-form-heading">Apply for: {jobSlug.replace(/-/g, ' ')}</h1> */}
            {/* <span onClick={() => navigate.push('/careers')} className="back-link">← Back to all job openings</span> */}

            <div
                className="upload-box"
                onClick={() => fileInputRef.current.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    id="resumeUpload"
                    name="resume"
                    accept=".doc,.docx,.pdf,.rtf,.odt,.jpg,.png"
                    onChange={handleResumeUpload}
                    style={{ display: 'none' }}
                />
                <label htmlFor="resumeUpload" className="upload-link">
                    Upload resume
                </label>
                <p>
                    This will auto-fill the fields below. 10MB max file size (Allowed file types are
                    <strong> .doc, .pdf, .docx, .rtf, .odt, .jpg, .png</strong>).
                </p>
                {resumeFile && (
                    <p className="success-text">Uploaded: {resumeFile.name}</p>
                )}
                {resumeError && <p className="error-text">{resumeError}</p>}
            </div>

            <form>
                <div className="form-grid">
                    <div className="form-field">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="middleName">Middle Name *</label>
                        <input
                            type="text"
                            name="middleName"
                            id="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                        />
                        {errors.middleName && <p className="error-text">{errors.middleName}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="gender">Gender *</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        {errors.gender && <p className="error-text">{errors.gender}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>

                    <div className="form-field mobile-field">
                        <label>Mobile Phone *</label>
                        <div className="mobile-inputs">
                            <select
                                id="mobileCode"
                                name="mobileCode"
                                value={formData.mobileCode}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={`+${country.phone}`}>
                                        {country.label} (+{country.phone})
                                    </option>
                                ))}
                            </select>

                            <input
                                type="tel"
                                name="mobile"
                                id="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Phone number"
                            />
                        </div>
                        {errors.mobile && <p className="error-text">{errors.mobile}</p>}
                    </div>

                    <div className="form-field experience-field">
                        <label>Experience</label>
                        <div className="experience-inputs">
                            <input
                                type="text"
                                placeholder="Years"
                                name='years'
                                id="years"
                                value={formData.years}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.years && <p className="error-text">{errors.years}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="joinDays">Available To Join (in days) *</label>
                        <input
                            type="number"
                            name="joinDays"
                            id="joinDays"
                            value={formData.joinDays}
                            onChange={handleChange}
                        />
                        {errors.joinDays && <p className="error-text">{errors.joinDays}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="currentLocation">Current Location *</label>
                        <input
                            type="text"
                            name="currentLocation"
                            id="currentLocation"
                            value={formData.currentLocation}
                            onChange={handleChange}
                        />
                        {errors.currentLocation && <p className="error-text">{errors.currentLocation}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="department">Select Field/Department *</label>
                        <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={(e) => {
                                handleChange(e);
                                if (errors.department) {
                                    setErrors((prev) => ({ ...prev, department: "" }));
                                }
                            }}
                            onBlur={() => {
                                if (!formData.department) {
                                    setErrors((prev) => ({ ...prev, department: "Please select a department." }));
                                }
                            }}
                            className={errors.department ? "error" : ""}
                        >
                            <option value="">Select</option>
                            {jobData.map((job) => (
                                <option key={job.id} value={job.title}>
                                    {job.title}
                                </option>
                            ))}
                        </select>

                        {errors.department && (
                            <span className="error-text">{errors.department}</span>
                        )}
                    </div>
                </div>

                <label className="consent-checkbox">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent === true}
                        onChange={handleChange}
                    />
                    <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
                        By applying, you hereby accept the data processing terms under the and give consent to processing of the data as part of this job application.
                        {errors.consent && <p className="error-text">{errors.consent}</p>}
                    </div>
                </label>

                <div className='submit-div'>
                    <button type="submit" className="submit-btn" onClick={handleSubmit}>Apply Now</button>
                </div>
            </form>
        </div>
    );
};

export default CareerForm;
