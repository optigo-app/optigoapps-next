import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-&-ecommerce/apps/b2b-&-b2c-catalog-sharing']);

const page = () => {

    const mainTitle = "ProCatalog – Smart Catalog System Powered by Optigo ERP";
    const mainDescription = `<strong>Take your jewellery business online in minutes – with real-time stock, design sync, and zero manual effort.</strong>
    </br>
    <strong>ProCatalog</strong> is a revolutionary mini-website and advanced cataloging tool developed by OptigoApps, fully integrated with the Optigo ERP system. It allows jewellery businesses to showcase their products online, offer personalized customer experiences, and take orders directly – all while ensuring live sync with your ERP inventory and design database.`;

    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features of Procatalog:"

    const section7Data = [
        {
            id: 1,
            title: "Real-Time Catalog Connected to ERP",
            icon: "🔗",
            points: [
                "Seamless integration with Optigo ERP means your product designs, stock availability, pricing, and order details are updated in real-time.",
                "When a customer places an online order, the product gets auto-reserved for that customer in your ERP system, eliminating any risk of overselling."
            ]
        },
        {
            id: 2,
            title: "Two Powerful Catalog Modes",
            icon: "📚",
            points: [
                "1. Personalized Catalogs – Create custom catalogs based on individual customer needs — for example, a collection of light-weight rings or trendy bracelets. Share a private catalog link tailored to their preferences and drive higher engagement and conversions.",
                `2. Master Catalog – Publish your entire selected product range online using a single master link. Showcase: 
                - Multiple product images & videos
                - Product details (metal, stone, size, weight, pricing)
                - Customizations (metal type, diamond, size)
                - Direct “Order Now” functionality
                `
            ]
        },
        {
            id: 4,
            title: "Customer Account & Self-Service Features",
            icon: "👤",
            points: [
                "Customers get a My Account portal to view order history, track status, access invoices, and download ledgers.",
                "Reduces sales team load and boosts satisfaction."
            ]
        },
        {
            id: 5,
            title: "Integrated Online Payments",
            icon: "💳",
            points: [
                "ProCatalog supports secure online payment integration, allowing your customers to complete their purchase within the catalog itself",
                "helping you speed up the sales cycle and reduce follow-ups for payments."
            ]
        }
    ];

    const section3Data = [
        {
            content: "Sell without meetings – accept orders anytime, anywhere"
        },
        {
            content: "Reduce manual tasks – orders sync directly into ERP"
        },
        {
            content: "Faster sales – share links on WhatsApp, Email or SMS"
        },
        {
            content: "Grow online – without building a full e-commerce website"
        },
        {
            content: "Instant launch – go live in minutes, no coding required"
        },
    ];

    const section4Data = [
        {
            content: "ProCatalog by OptigoApps is built to help you sell smarter, faster, and more efficiently. "
        },
        {
            content: "Whether you're targeting B2B clients or individual customers, take your jewellery business online with minimal effort and maximum results."
        },
        { content: "Ready to transform your catalog into a 24/7 order machine? ProCatalog is your solution." },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/procatalog.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ecom_pro_ind_mission_3">
                <div className="text">
                    <h2>Why Choose ProCatalog?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>GET started</h2>
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
