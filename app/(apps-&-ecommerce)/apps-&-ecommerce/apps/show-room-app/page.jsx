import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-&-ecommerce/apps/show-room-app']);

const page = () => {

    const mainTitle = "EVO – Next-Gen Retail Experience App by OptigoApps";
    const mainDescription = `Take your retail store operations and customer experience to the next level with <strong>EVO</strong>, a mobile-based app designed specially for your sales team and built to enhance every touchpoint of in-store shopping. Whether you’re managing a jewellery store, fashion outlet, or luxury boutique – EVO transforms how your team interacts with customers, streamlines the buying process, and boosts conversion with intelligent tools.`;

    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features of EVO:"

    const section7Data = [
        {
            id: 1,
            title: "Smart Product Scanning & Instant Pricing",
            icon: "📷",
            points: [
                "Your sales team can simply scan the product tag using their mobile device to instantly fetch product details and real-time pricing from Optigo’s backend ERP.",
                "No more manual lookups or delays – everything your team needs is at their fingertips.",
            ]
        },
        {
            id: 2,
            title: "Quick Customer Registration",
            icon: "📝",
            points: [
                "Register walk-in customers on the spot.",
                "Build CRM database in a few taps.",
                "Capture personal info, preferences, and visit history."
            ]
        },
        {
            id: 3,
            title: "Wishlist & Special Remarks",
            icon: "💡",
            points: [
                "Not all customers buy on the first visit – and that’s okay! EVO lets your team save products to the customer’s wishlist, note down preferences or custom requirements.",
                "keep track of what matters most to your buyers.",
            ]
        },
        {
            id: 4,
            title: "Instant Estimates & Dynamic Discounting",
            icon: "💸",
            points: [
                "Generate product-wise estimates on the spot, and even apply personalised discounts to close the deal faster.",
                "Make shopping interactive and transparent for your customers.",
            ]
        },
        {
            id: 5,
            title: "Move to Billing in One Click",
            icon: "🛒",
            points: [
                "Once the customer is ready, EVO sends the selected products to the billing counter.",
                "At the counter, simply scan items on Optigo POS (Tablet-based), and proceed to payment and delivery.",
            ]
        },
        {
            id: 6,
            title: "Automated Customer Follow-ups",
            icon: "📲",
            points: [
                "If a customer doesn't complete the purchase, EVO’s smart integration with Optigo ERP automatically sends follow-up messages for their abandoned cart",
                "Smart ERP integration boosts conversion chances.",
                "Minimize lost sales from incomplete purchases."
            ]
        },
        {
            id: 7,
            title: "Analytics & Feedback Integration",
            icon: "📊",
            points: [
                "Get in-store customer feedback right after the sale, and access detailed performance analytics in Optigo ERP.",
                "Track salesperson performance, customer interests, conversion ratio, and more."
            ]
        }
    ];

    const section3Data = [
        {
            content: "Faster Sales Conversions"
        },
        {
            content: "Personalised Shopping Experience"
        },
        {
            content: "Real-time Sync with ERP & POS"
        },
        {
            content: "Works on Any Android/iOS Device"
        },
        {
            content: "Boosts Customer Retention & Engagement"
        },
    ];

    const section4Data = [
        {
            content: "EVO empowers your sales team to become smart retail consultants, turning casual walk-ins into loyal buyers – all while enhancing operational efficiency."
        },
        {
            content: "Contact us today to schedule a live demo."
        },
        { content: "www.optigoapps.com" },
        { content: "sales@optigoapps.com" },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/evo.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ecom_evo_ind_mission_3">
                <div className="text">
                    <h2>Why Choose EVO?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Ready to Revolutionize In-Store Shopping?</h2>
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
