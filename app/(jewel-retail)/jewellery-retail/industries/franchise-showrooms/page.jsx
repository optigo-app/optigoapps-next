import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'

const page = () => {

    const mainTitle = "Franchise Management with Optigo ERP";
    const mainDescription = `<strong>Expand Your Brand. Maintain Control. Ensure Consistency.</strong> 
    </br>
    Are you ready to scale your business through franchises? With <strong>Optigo</strong> ERP’s Franchise Management Module, you can establish and manage multiple franchise locations seamlessly, while keeping your brand and operations consistent across the globe.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features for Franchise Management:"

    const section7Data = [
        {
            id: 1,
            title: "Centralized Control – Unified Brand Experience",
            icon: "🏢",
            points: [
                "Franchise outlets are fully integrated with your Head Office (HO) through Optigo ERP, ensuring compliance and consistency.",
                "HO defines products, pricing, and branding rules for all franchises",
                "Franchises scan tags for automatic inward entries — no manual input",
                "Ensures compliance and consistency across every location"
            ]
        },
        {
            id: 2,
            title: "Real-Time Tracking & Transparency",
            icon: "📡",
            points: [
                "HO monitors stock, sales, and performance of all franchises in real time",
                "Live visibility into inventory levels and product movements",
                "Franchise owners access personalized dashboards and reports"
            ]
        },
        {
            id: 3,
            title: "Simplified Order & Supply Chain",
            icon: "🚚",
            points: [
                "Franchises place product requests with a single click",
                "HO instantly approves and dispatches — zero paperwork",
                "Smooth, error-free order fulfillment process"
            ]
        }
    ];

    const section3Data = [
        {
            content: "Consistent Branding – Maintain product, pricing, and service standards across all outlets."
        },
        {
            content: "Centralized Inventory & Sales Control – Full visibility of your franchise network."
        },
        {
            content: "Fast & Error-Free Operations – Automated processes reduce manual work and mistakes."
        },
        {
            content: "Scalable Solution – Expand your brand globally with ease."
        },
    ]

    const section4Data = [
        {
            content: "Grow your franchise network confidently with Optigo ERP’s Franchise Management Module."
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
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/retail-3.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ind_mission_2">
                <div className="text">
                    <h2>Why Choose Optigo ERP for Franchise Business?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>GET STARTED</h2>
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
