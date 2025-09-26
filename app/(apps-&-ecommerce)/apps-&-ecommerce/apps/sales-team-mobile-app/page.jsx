import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/apps-&-ecommerce/apps/sales-team-mobile-app']);

const page = () => {

    const mainTitle = "Optigo Express App – Revolutionizing Jewellery Sales on the Move";
    const mainDescription = `<strong>Seamless Selling, Anytime. Anywhere.</strong>
    </br>
    <strong>Optigo Express</strong> is a powerful mobile application specially crafted for the <strong>jewellery industry</strong>, designed to empower <strong>sales teams who travel with stock or sample lines</strong>. Whether you're on the road, at exhibitions, or meeting clients directly, this app ensures your sales process remains smooth, efficient, and fully connected.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section6", "section7"];

    const section2Title = `Designed for the Modern Jewellery Business`;

    const section2Data = [
        {
            content: "Optigo Express is more than just an app—it’s your mobile sales companion."
        },
        {
            content: "Enable your team to sell smart, work faster, and deliver exceptional customer service with a tool that’s designed specifically for the jewellery industry."
        },
        {
            content: "Empower your sales team to operate independently, even on the move."
        },
        {
            content: "Gain real-time visibility into performance, customer behavior, and sales trends."
        },
    ]

    const section7Title = "Why Optigo Express?"

    const section7Data = [
        {
            id: 1,
            title: "Offline + Online Functionality",
            icon: "✅",
            points: [
                "Optigo Express is built to work even without internet access.",
                "Once your product data and stock information are updated, the app runs seamlessly offline—letting your sales team sell confidently from any location, without interruption.",
            ]
        },
        {
            id: 2,
            title: "Scan, Sell, & Sync Instantly",
            icon: "✅",
            points: [
                "Easily scan the jewellery tags using the mobile device, showcase items, and complete sales on the spot.",
                "Whether it's a direct sale or through memo/approvals, the app allows for fast and error-free transactions."
            ]
        },
        {
            id: 3,
            title: "No Manual Pricing Hassles",
            icon: "✅",
            points: [
                "With fixed pricing embedded in the system, there’s no confusion or negotiation on the go.",
                "This ensures pricing consistency and transparency across all channels."
            ]
        },
        {
            id: 4,
            title: "ERP Integrated Billing",
            icon: "✅",
            points: [
                "All bills are generated directly from the ERP software, ensuring they align with your company’s billing policies.",
                "Customers receive invoices instantly via WhatsApp or email, enhancing convenience and trust."
            ]
        },
        {
            id: 5,
            title: "Real-Time Order Placement",
            icon: "✅",
            points: [
                "Sales teams can place confirmed orders directly from the app, whether they’re selling from actual stock or sample lines.",
                "All transactions are automatically synced with the central ERP system, eliminating delays and duplicate entries."
            ]
        },
        {
            id: 6,
            title: "Paperless, Professional, and Powerful",
            icon: "✅",
            points: [
                "Forget about carrying bulky product books or messy spreadsheets.",
                "With Optigo Express, everything is digitized—delivering a sleek, professional experience for both your employees and your customers."
            ]
        }
    ];

    const section6Title = "Revolutionize Jewellery Sales with Optigo Express"
    const section6Description = `Experience the future of mobile jewellery sales with <strong style='color: #FFDE21'>Optigo Express</strong>. Streamline. Simplify. Sell smart.`

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/express.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section6Title={section6Title} section6Description={section6Description} section2Title={section2Title} section2Data={section2Data} />
        </>
    )
}

export default page
