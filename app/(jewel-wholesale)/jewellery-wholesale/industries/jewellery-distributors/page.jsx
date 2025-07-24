import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'

const page = () => {

    const mainTitle = "Complete Software Solution for Jewellery Distributors";
    const mainDescription = `<strong>Optigo</strong> Software is a powerful ERP solution built specifically for the jewellery distribution industry. It covers every stage of the business cycle — from design and order booking to vendor management, raw material tracking, inventory control, billing, catalogue sharing, and much more — all in one integrated platform.`;
    const mainButtonContent = "Explore more";

    const section = ["section7", "section6"];

    const section7Title = "Key Features Tailored for Jewellery Distributors:"

    const section7Data = [
        {
            id: 1,
            title: "Order Management",
            icon: "📝",
            points: [
                "Take bulk or custom orders from clients",
                "Control order status, specs & delivery timelines",
                "Track order-based costing accurately",
                "Auto-alerts for delayed or pending orders"
            ]
        },
        {
            id: 2,
            title: "Vendor Purchase & Coordination",
            icon: "📦",
            points: [
                "Create and send purchase orders to vendors",
                "Monitor delivery dates and pending POs",
                "Maintain rate agreements & purchase logs",
                "Enable partial or staged purchase receipts"
            ]
        },
        {
            id: 3,
            title: "Raw Material Procurement & Issue",
            icon: "🔗",
            points: [
                "Manage raw material purchases per order or in bulk",
                "Issue materials with weight and purity tracking",
                "Track material flow to vendors or karigars",
                "Set reorder levels and vendor-wise stock triggers"
            ]
        },
        {
            id: 4,
            title: "Raw Material & Inventory Tracking",
            icon: "📊",
            points: [
                "Track every gram of gold, silver, diamond, or CZ",
                "Maintain real-time stock reports for all locations",
                "Separate raw vs finished material stock data",
                "Enable mobile-based stock entry and audits"
            ]
        },
        {
            id: 5,
            title: "Product Tagging & Barcode System",
            icon: "🏷️",
            points: [
                "Tag finished products with unique barcodes/RFID",
                "Enable fast audits and approval tracking",
                "Map each tag to job card and customer order",
                "Support barcode printing in multiple formats"
            ]
        },
        {
            id: 6,
            title: "Stock & Inventory Management",
            icon: "📦",
            points: [
                "Live inventory across branches or godowns",
                "Group stock by category, purity & type",
                "Get valuation-based stock reporting",
                "Auto-segregate damaged or returned stock"
            ]
        },
        {
            id: 7,
            title: "Billing, Accounting & E-Invoicing",
            icon: "💰",
            points: [
                "Generate tax-compliant GST e-invoices",
                "Integrated accounting for ledgers & payments",
                "Track receivables, payables & credit limits",
                "Attach order/job references to each invoice"
            ]
        },
        {
            id: 8,
            title: "Digital Catalogue Sharing",
            icon: "📤",
            points: [
                "Create online catalogues of ready/custom stock",
                "Share via WhatsApp, email or direct links",
                "Include tags, filters, and pricing details",
                "Track clicks and views from shared links"
            ]
        },
        {
            id: 9,
            title: "Exhibition Order Handling",
            icon: "🎯",
            points: [
                "Track orders taken at exhibitions",
                "Status updates with delivery batch-wise",
                "Separate reporting for exhibition orders",
                "Auto-assign unique IDs to each event order"
            ]
        },
        {
            id: 10,
            title: "Sales on Memo/Approval Management",
            icon: "🧾",
            points: [
                "Manage memo/approval items given or received",
                "Track due dates, item status & approvals",
                "Convert approved items into invoices",
                "Auto-reminders before memo expiry"
            ]
        },
        {
            id: 11,
            title: "Stock Reconciliation",
            icon: "📋",
            points: [
                "Reconcile physical vs system stock easily",
                "Identify shortages, excesses & variances instantly",
                "Generate variance reports with item-wise details",
                "Enable barcode-based stock count and mismatch alerts"
            ]
        }
    ];

    const section6Title = "All-in-One Jewellery ERP for Smarter Business Operations";
    const section6Description = `<strong style="color: #FFDE21">Streamline your jewellery business with Optigo</strong> – a powerful cloud-based solution built to automate operations, cut losses, and boost efficiency across domestic, international, and multi-branch distribution.`


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/jewel-dist.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section6Title={section6Title} section6Description={section6Description} />
        </>
    )
}

export default page
