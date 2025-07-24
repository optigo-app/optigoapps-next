import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'

const page = () => {

    const mainTitle = "Optigo eCommerce – The Future of B2B Jewelry Commerce";
    const mainDescription = `<strong>Optigo</strong> eCommerce is a fully integrated digital commerce platform built exclusively for the B2B jewelry industry. Powered by Optigo ERP, it enables manufacturers and wholesalers to showcase their jewelry designs online while maintaining complete control over pricing, visibility, and customization. With real-time synchronization and smart automation, this platform transforms how jewelry businesses engage with their customers.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features and Functionalities"

    const section7Data = [
        {
            id: 1,
            title: "Customer-Specific Design Visibility",
            icon: "🛡️",
            points: [
                "Control the visibility of your product designs by customer type or specific clients.",
                "You decide which customers can view which designs, providing tailored experiences and protecting your proprietary collections."
            ]
        },
        {
            id: 2,
            title: "Personalized Product Pricing",
            icon: "💰",
            points: [
                "Display product prices specific to each customer based on their unique pricing agreement or business tier.",
                "This helps in maintaining confidential pricing and improving customer satisfaction."
            ]
        },
        {
            id: 3,
            title: "Advanced Product Customization",
            icon: "⚙️",
            points: [
                "Customers can customize products based on metal type, diamond quality, and sizes.",
                "Product weight and pricing adjust automatically according to the size selected, offering precise, real-time information and reducing manual intervention."
            ]
        },
        {
            id: 4,
            title: "Customer Portal for Transparency",
            icon: "👤",
            points: [
                "Customers receive access to a personalized portal where they can:",
                "- View ledgers and transaction reports",
                "- Track the real-time production status of orders (e.g., setting, filling)",
                "- Download historical purchase data",
                "This transparency reduces dependency on the sales team and enhances customer trust."
            ]
        },
        {
            id: 5,
            title: "Real-Time Stock Display",
            icon: "📦",
            points: [
                "Showcase your live inventory on the website.",
                "If a product is sold offline, it is automatically removed from the eCommerce store, avoiding duplication and stock conflicts."
            ]
        },
        {
            id: 6,
            title: "Integrated Payments & Shipments",
            icon: "🚚",
            points: [
                "Seamlessly collect payments via integrated payment gateways and provide shipment tracking for end-to-end customer convenience."
            ]
        },
        {
            id: 7,
            title: "Search by Diamond Stock Availability",
            icon: "💎",
            points: [
                "An exclusive feature that enables customers to search for products based on their own diamond stock availability.",
                "This ensures efficient production planning and smarter ordering."
            ]
        },
        {
            id: 8,
            title: "Rich Media Product Display",
            icon: "🖼️",
            points: [
                "Support for multiple product images, videos, and color-wise image changes delivers an immersive product experience to customers."
            ]
        },
        {
            id: 9,
            title: "Auto Bestseller & Trending Products",
            icon: "🔥",
            points: [
                "The system automatically tags products as 'Bestseller' if sold more than five times and 'Trending' if clicked over five times, making it easier for customers to find popular products."
            ]
        },
        {
            id: 10,
            title: "High-End SEO Optimization",
            icon: "🔍",
            points: [
                "Built-in search engine optimization tools to enhance your visibility online and drive more B2B traffic to your portal."
            ]
        },
        {
            id: 11,
            title: "Clean, Modern UI",
            icon: "🖥️",
            points: [
                "User-friendly, responsive design for effortless browsing on mobile, tablet, and desktop devices."
            ]
        }
    ];


    const section3Data = [
        {
            content: "Optigo eCommerce is more than just an online store – it’s a complete digital transformation of your B2B jewelry business."
        },
        {
            content: "With ERP integration, real-time updates, and deep customization, Optigo empowers you to serve customers better, sell smarter, and grow faster in today’s competitive market."
        },
        {
            content: "Visit our website or contact us today to schedule a demo."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/ecom-1.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ecom_ind_mission_3">
                <div className="text">
                    <h2>Why Optigo for Ecommerce?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
