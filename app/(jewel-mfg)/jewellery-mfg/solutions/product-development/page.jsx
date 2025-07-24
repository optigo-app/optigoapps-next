import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'

const page = () => {

    const mainTitle = "Product Development (PD) – The Heart of Jewellery Manufacturing";
    const mainDescription = `At <strong>OptigoApps</strong>, we understand that Product Development is the core of every successful jewellery manufacturing process. From concept creation to design approval and production readiness, the PD cycle defines the creativity, quality, and profitability of your brand.That’s why we’ve built a dedicated, jewellery-specific Product Development Module — to help manufacturers streamline design workflows, reduce human error, and drive innovation with efficiency.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Built for the Jewellery Industry — Not Generic Software`;
    const section2Description = `Unlike other ERP systems, OptigoApps is designed specifically for jewellery. That means:`;

    const section2Data = [
        {
            content: "Purity and metal type considerations built into every step"
        },
        {
            content: "Easy transition from design approval to production planning"
        },
        {
            content: "Integration with BOM, costing, and order systems"
        },
        {
            content: "Role-based access and team visibility for design, CAD, QC, and production heads"
        },
    ]


    const section7Title = "Transform Your Product Development with Optigo"

    const section7Data = [
        {
            id: 1,
            title: "Concept to Creation – All in One System",
            icon: "🎨",
            points: [
                "Capture ideas, trends, or customer inspirations and convert them into CAD-ready design requests.",
                "Centralized dashboard to manage the entire design lifecycle."
            ]
        },
        {
            id: 2,
            title: "Designer Task Management",
            icon: "🧑‍💻",
            points: [
                "Assign tasks to internal or freelance designers with timelines.",
                "Track progress and receive notifications for approvals — no manual follow-ups needed."
            ]
        },
        {
            id: 3,
            title: "Design Finalization & QC",
            icon: "✅",
            points: [
                "Upload, review, and finalize CAD or image files.",
                "Enable visual approvals with version control and revision history."
            ]
        },
        {
            id: 4,
            title: "Workflow & Communication",
            icon: "🔗",
            points: [
                "Eliminate the need for WhatsApp chats, Excel files, or disconnected emails.",
                "Every stakeholder — from design head to production planner — stays aligned with real-time updates."
            ]
        },
        {
            id: 5,
            title: "Design Analysis & Reports",
            icon: "📈",
            points: [
                "Measure design-wise cost, approval timelines, and designer performance.",
                " Use analytics to identify delays, rework patterns, and pricing inefficiencies — helping you improve faster."
            ]
        }
    ];

    const section3Data = [
        {
            content: "Launch more designs in less time"
        },
        {
            content: "Reduce rework and sample costs"
        },
        {
            content: "Improve designer accountability"
        },
        {
            content: "Win faster approvals from customers and buying teams"
        }
    ]

    const section4Data = [
        {
            content: "Interested in seeing how the PD module works?"
        },
        {
            content: "Request a free demo and discover how OptigoApps can revolutionize your jewellery product development process."
        },
        {
            content: "Book a Free Demo"
        },
        {
            content: "Call: +91-XXXXXXXXXX"
        },
        {
            content: "Email: info@optigoapps.com"
        },
    ]


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/pd-image.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Description={section2Description} section2Data={section2Data} />

            <div className="pd-wrapper right-content">
                <div className="pd-image">
                    <img src="/why.jpeg" alt="Distributors Need pd" />
                </div>
                <div className="pd-text">
                    <h2>Why Jewellery Manufacturers Choose Optigo’s PD Module</h2>
                    <ul>
                        <li>Reduces Manual Errors: Avoid mistakes due to miscommunication or missing files</li>
                        <li>Accelerates Time-to-Market: Bring new designs to production faster</li>
                        <li>Improves Team Productivity: Manage internal teams, freelancers, and client feedback from a single system</li>
                        <li>Lowers Costing: Cut unnecessary revisions, reduce wastage, and save time</li>
                        <li>Enables Smart Decisions: Access analytics that help you identify which designs or designers deliver the best ROI</li>
                    </ul>
                </div>
            </div>

            <section className="ecom_pd_ind_mission_3">
                <div className="text">
                    <h2>Digital PD is the Future – Get There with Optigo</h2>
                    <p>Manufacturers who move to digital product development:</p>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                    <p>Is your team still using WhatsApp, email, and Excel for product development?
                        👉 Switch to OptigoApps and streamline the entire lifecycle — from idea to production-ready design.</p>
                </div>
                <div className="text">
                    <h2>Let’s Talk</h2>
                    <ul className="bullet-list">
                        {section4Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
