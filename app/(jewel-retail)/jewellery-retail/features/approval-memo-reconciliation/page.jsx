import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { BadgeCheck, Banknote, ClipboardList, DatabaseZap, FileCheck, FileText, Repeat, ScanBarcode, ScanLine, ShieldCheck } from "lucide-react";

const page = () => {

    const mainTitle = "Approval Memo & Reconciliation";
    const mainDescription = `<strong>Effortless Jewellery Approvals. Accurate Reconciliation.</strong>
    <br />
    In the jewellery business, tracking items sent on approval can be complex and risky without the right tools. <strong>Optigo’s</strong> Approval Memo & Reconciliation module simplifies and secures this process with complete digital control, real-time tracking, and detailed reporting. Say goodbye to manual records, missing items, and reconciliation errors.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", 'section7'];

    const section2Title = `Easy & Accurate Stock Reconciliation by Scanning`;

    const section2Data = [
        {
            content: "Scan & Match in Seconds: Just scan your items and the system will auto-match them with approval memos and master inventory."
        },
        {
            content: "Eliminate Human Errors: Avoid mismatches, duplicate entries, and missing stock with automated reconciliation."
        },
        {
            content: "Real-Time Stock Status: Instantly know what’s returned, what’s pending, and what’s lost or damaged — no paperwork required."
        },
        {
            content: "Batch-Wise & Location-Wise Scanning: Reconcile stock by party, branch, sales executive, or showcase with location-specific accuracy."
        },
        {
            content: "✅ Stock reconciliation has never been this easy — just scan and let Optigo handle the rest!"
        },
    ]

    const section7Title = "Key Features of Approval Memo & Reconciliation";

    const section7Data = [
        {
            id: 1,
            title: "Create & Manage Approval Memos with Ease",
            icon: "🧾", // Document-focused icon
            points: [
                "Multi-format memo creation (Print / WhatsApp / Email / PDF)",
                "Barcode-integrated item selection",
                "Category, karat, and stone-wise product tagging",
            ],
        },
        {
            id: 2,
            title: "Track Every Movement & Return",
            icon: "📦", // For stock/approval tracking
            points: [
                "Live tracking of outward/inward approval stock",
                "Branch/party-wise approval stock view",
                "Alerts for overdue approvals",
            ],
        },
        {
            id: 3,
            title: "Auto Reconciliation & Variance Report",
            icon: "♻️", // Reflects adjustment, reconciliation
            points: [
                "Item-wise and memo-wise reconciliation",
                "Loss & damage record tracking",
                "Auto-adjustments in stock & inventory",
            ],
        },
        {
            id: 4,
            title: "GST-Compliant Approval Documentation",
            icon: "📑", // Legal/tax document
            points: [
                "HSN/SAC-wise tax mapping",
                "Tax invoice conversion from memo",
                "Seamless GST data sync with accounts",
            ],
        },
        {
            id: 5,
            title: "Sales Team Approvals & Travelling Stock",
            icon: "🚗", // Indicates mobility/travel
            points: [
                "iCatalog & Mobile App integration",
                "Real-time stock status across salespersons",
                "Geo-tagged approvals & return tracking",
            ],
        },
        {
            id: 6,
            title: "Secure, Role-Based Controls",
            icon: "🔐", // Security-focused
            points: [
                "Role-wise access control",
                "Action logs & approval history",
                "OTP-based confirmation (optional)",
            ],
        },
        {
            id: 7,
            title: "Comprehensive Approval Dashboard",
            icon: "📊", // Dashboard/analytics
            points: [
                "Memo ageing report",
                "Customer feedback capture",
                "Product-wise approval performance",
            ],
        },
    ];

    const section3Data = [
        {
            content: "100% traceability of approved jewellery"
        },
        {
            content: "Centralized approval stock view across branches"
        },
        {
            content: "Faster reconciliation, lower losses"
        },
        {
            content: "Zero manual paperwork"
        },
        {
            content: "Increased customer satisfaction"
        },
    ]

    const section4Data = [
        {
            content: "Take full control of your jewellery approval process."
        },
        {
            content: "Contact us today for a demo and see how Optigo can help you eliminate approval chaos."
        },
        {
            content: "📲 +91 9510213581"
        },
        {
            content: "🌐 www.optigoapps.com"
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/approval.jpg"} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section7Title={section7Title} section7Data={section7Data} />

            <div className="module-wrapper left-content">
                <div className="module-text">
                    <h2>Seamlessly Integrated With Other Modules</h2>
                    <ul>
                        <li><ClipboardList size={22} /> Approval Memo & Reconciliation works in sync with:</li>
                        <li style={{ marginLeft: '1.5rem' }}>• Inventory Management</li>
                        <li style={{ marginLeft: '1.5rem' }}>• Sales & module</li>
                        <li style={{ marginLeft: '1.5rem' }}>• Accounts & Payments</li>
                        <li style={{ marginLeft: '1.5rem' }}>• CRM & iCatalog</li>
                        <li><FileText size={25} /> Create a smooth workflow from product selection to module and return, with no data duplication or manual entry.</li>
                    </ul>
                </div>
                <div className="module-image">
                    <img src="/modules.jpg" alt="module Process" />
                </div>
            </div>

            <section className="ecom_module_ind_mission_3">
                <div className="text">
                    <h2>Why Jewellery Businesses Trust Optigo for Approvals</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Get Started Today</h2>
                    <ul className="bullet-list">
                        {section4Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default page;
