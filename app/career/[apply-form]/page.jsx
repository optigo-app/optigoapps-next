// app/careers/[apply-form]/page.jsx

import jobData from "@/public/jobsOpenings";
import './page.scss';
import CareerForm from "@/components/CareerForm.jsx/CareerForm";
import CareerReq from "@/components/CareerReq/CareerReq";

// 👇 This function generates all valid paths at build time
export async function generateStaticParams() {
    return jobData.map((job) => ({
        'apply-form': job.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    }));
}

export default async function ApplyFormPage({ params }) {
    const jobSlug = params['apply-form'];
    const jobTitle = jobData?.find((job) => job.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === jobSlug)?.title;

    return (
        <div>
            <CareerReq jobSlug={jobSlug} jobTitle={jobTitle} />
        </div>
    );
}
