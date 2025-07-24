'use client';

import React from 'react'
import './CareerReq.scss';
import Image from 'next/image';
import jobData from '@/public/jobsOpenings';
import { useRouter } from 'next/navigation';

const CareerReq = ({ jobSlug, jobTitle }) => {

    const navigate = useRouter();

    const getJobsData = jobData?.find((job) => job.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === jobSlug);

    return (
        <div className='career-req-mainDiv'>
            <div className="career-req-hero-banner" style={{
                backgroundImage: 'url(/bg.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="hero-banner-content">
                    <p className="breadcrumb">CAREER &gt; {jobTitle}</p>
                    <h1 className="heading">The power to change is one click away.</h1>
                </div>

                <div className="hero-banner-image">
                    <Image
                        src="/career-req.jpg"
                        alt="career requirements"
                        height={380}
                        width={380}
                        unoptimized
                    />
                </div>
            </div>

            <div className="career-req-contentDiv">
                <div className="career-req-content">
                    <h2 className="heading">Requirement for the {jobTitle}</h2>
                </div>
                <div className="career-req-responsobilities-content">
                    <h2 className="heading">Roles & Responsibilities</h2>
                    <div
                        className="description"
                        dangerouslySetInnerHTML={{
                            __html: getJobsData?.requirements
                        }}
                    />
                </div>
                <div className="career-req-skills-content">
                    <h2 className="heading">Preferred Skills</h2>
                    <div className="description" dangerouslySetInnerHTML={{ __html: getJobsData?.skills }} />
                </div>
                <div className="career-req-applyBtnDiv">
                    <button onClick={() => navigate.push('/career-form')}>Apply Now</button>
                </div>
            </div>

        </div>
    )
}

export default CareerReq
