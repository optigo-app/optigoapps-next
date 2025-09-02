import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/apps-&-ecommerce/apps/exhibition-&-sales-team-tablet-app']);

const page = () => {

    const mainTitle = "iCatalog – Tablet-Based App for Smarter Jewelry Selling";
    const mainDescription = `<strong>iCatalog</strong> by <strong>OptigoApps</strong> is a powerful <strong>tablet-based sales app</strong> designed specifically for the jewelry industry. It empowers your sales team to showcase designs, customize products, take orders, and generate quotations – even without internet access.
Whether it’s at an <strong>exhibition</strong>, during a <strong>customer visit</strong>, or for your <strong>travelling sales team</strong>, iCatalog provides a smart, paperless, and professional selling experience right from a tablet.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Designed for Tablets – Built for Performance`;

    const section2Data = [
        {
            content: "A larger display for high-quality images & videos"
        },
        {
            content: "Multi-product comparison on a single screen"
        },
        {
            content: "Easy navigation and better user experience during customer demos"
        },
    ]

    const section7Title = "Key Features of iCatalog:"

    const section7Data = [
        {
            id: 1,
            title: "Offline Functionality",
            icon: "📴",
            points: [
                "Works without internet during exhibitions or remote visits.",
            ]
        },
        {
            id: 2,
            title: "High-Resolution Images & Videos",
            icon: "🖼️",
            points: [
                "Display jewellery products beautifully with HD visuals."
            ]
        },
        {
            id: 3,
            title: "Product Customization",
            icon: "⚙️",
            points: [
                "Choose metal, diamond, size, and other specifications."
            ]
        },
        {
            id: 4,
            title: "Personalised Customer Pricing",
            icon: "💰",
            points: [
                "Show different prices for different clients with precision."
            ]
        },
        {
            id: 5,
            title: "Real-Time ERP Connectivity",
            icon: "🔗",
            points: [
                "Syncs with Optigo ERP for live stock and pricing updates."
            ]
        },
        {
            id: 6,
            title: "Multi-Product Selection",
            icon: "🛍️",
            points: [
                "Easily prepare bulk estimates and large orders."
            ]
        },
        {
            id: 7,
            title: "Barcode/Tag Scanning",
            icon: "📷",
            points: [
                "Quick product lookup using tablet or phone camera."
            ]
        },
        {
            id: 8,
            title: "Instant Quotation Generation",
            icon: "📩",
            points: [
                "Share quotes on the spot via email or WhatsApp."
            ]
        }
    ];

    const section3Data = [
        {
            content: "Traditional methods involve carrying multiple sample boxes, writing codes on paper, and sending quotes days later."
        },
        {
            content: "With iCatalog on a tablet, you eliminate delays, reduce risk, and increase professionalism."
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
            content: "Impress customers with modern, interactive presentations"
        },
        {
            content: "Help customers take faster buying decisions"
        },
        {
            content: "Reduce dependency on printed catalogs and physical samples"
        },
        {
            content: "Take both stock orders and make-to-order requests"
        },
        { content: "Show out-of-stock designs and still take orders" },
        { content: "Improve employee productivity and reduce double entry" },
    ];

    const section6Title = "iCatalog = Offline Power + Tablet Convenience + Sales Acceleration";
    const section6Description = `Upgrade your sales game with <strong style='color: #FFDE21'>OptigoApps’ iCatalog</strong> – the tablet-based app made for jewelry businesses.`;


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/express.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <section className="ecom_ilog_ind_mission_3">
                <div className="text">
                    <h2>Why iCatalog is a Game Changer</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2> Business Benefits</h2>
                    <ul className="bullet-list">
                        {section4Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="ilog-demo-cta">
                <div className="cta-content">
                    <h2>{section6Title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: section6Description }} />
                    <button>Start Free Demo</button>
                </div>
            </section>
        </>
    )
}

export default page
