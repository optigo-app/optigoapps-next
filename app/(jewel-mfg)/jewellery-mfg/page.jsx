import Industries from '@/components/Industries/Industries'
import React from 'react'
import './page.scss'
import { AlertTriangle, Boxes, ClipboardList, FileBarChart2, IndianRupee, PackageCheck, Palette, Truck, UserRound, Workflow } from 'lucide-react';

const page = () => {
    const mainTitle = "Jewellery MFG";
    const mainDescription = `An all-in-one solution that streamlines your entire production process — from raw material tracking and job order management to costing, quality checks, and vendor coordination. It ensures accurate inventory, precise costing, and smooth workflows. Built-in CRM and accounting modules manage orders, approvals, and finances efficiently, while real-time dashboards provide actionable insights to boost productivity and support growth.`;

    const mainButtonContent = "Explore more"

    const section7Title = "Key features of Jewellery MFG";

    const section7Data = [
        {
            id: 1,
            title: "Design",
            icon: <Palette color="#8e44ad" size={32} />,
            points: [
                "Easily manage style-wise jewellery designs without the need for CAD/CAM integration.",
                "Create design masters with reference images, product details, and customer-specific canonizations like metal, purity, size, and stone quality.",
                "Link designs directly to orders for smooth production flow.",
                "Maintain records of most-used or fast-moving styles.",
                "Ideal for managing custom and bulk designs across teams.",
                "Ensures better coordination between sales, design, and production teams.",
            ]
        },
        {
            id: 2,
            title: "Customer Relationship Management (CRM)",
            icon: <UserRound color="#2c3e50" size={32} />,
            points: [
                "Track every customer, lead, and inquiry with detailed purchase history and interaction records.",
                "Record walk-ins, enquire, and preferences to help your team offer a more personalized service.",
                "Maintain data for both retail and B2B clients, including past orders, preferred designs, and buying patterns.",
                "Useful for building customer loyalty and understanding what sells.",
                "Helps your sales team stay informed and better prepared during client interactions.",
                "A simple, centralized system to manage all customer information.",
            ]
        },
        {
            id: 3,
            title: "Vendor Relationship Management (VRM)",
            icon: <Truck color="#e67e22" size={32} />,
            points: [
                "Streamline and monitor job work issued to vendors and karigars.",
                "Track raw material issues, labour charges, expected delivery dates, and actual returns.",
                "Record wastage or losses and calculate accurate settlements.",
                "Maintain vendor-wise performance history, work quality, and efficiency.",
                "Helps identify reliable vendors and eliminate loss due to mismanagement.",
                "Supports gold, diamond, and stone job tracking.",
                "Crucial for manufacturers and wholesalers working with multiple vendors.",
            ]
        },
        {
            id: 4,
            title: "Production Flow",
            icon: <Workflow color="#2980b9" size={32} />,
            points: [
                "Track each production stage from order placement to final QC.",
                "Assign jobs internally or to vendors, and monitor progress across steps like casting, setting, polishing, and finishing.",
                "View WIP (Work-in-Progress) status in real time.",
                "Allocate resources efficiently and control production time-lines.",
                "Ensure timely delivery and coordination between departments.",
                "Reduces delays, duplication, and human error in manufacturing.",
                "Integrated with design, inventory, and delivery modules.",
            ]
        },
        {
            id: 5,
            title: "Loss Management",
            icon: <AlertTriangle color="#c0392b" size={32} />,
            points: [
                "Identify and control invisible losses in gold, diamonds, and other materials during production or vendor jobs.",
                "Track actual returns vs expected outputs to detect variances.",
                "Record loss by job, vendor, or process type to improve material control.",
                "Supports better costing and settlement decisions.",
                "Helps improve accountability among karigars and production teams.",
                "Essential for transparent job work operations.",
                "Boosts profitability by reducing leakages and wastage.",
            ]
        },
        {
            id: 6,
            title: "Inventory Management",
            icon: <Boxes color="#16a085" size={32} />,
            points: [
                "Get complete control over your jewellery inventory across locations and categories.",
                "Manage raw materials (gold, diamonds, gemstones), semi-finished, and finished products with item-wise tracking.",
                "Update stock automatically based on purchases, sales, and production.",
                "Use bar-codes or tags to identify items and reduce manual errors.",
                "View real-time stock availability branch-wise or by item type.",
                "Track dead stock, fast-moving designs, and balance stock after every transaction.",
                "Helps reduce overstocking, shortages, and mismatches.",
            ]
        },
        {
            id: 7,
            title: "Order Management",
            icon: <ClipboardList color="#f39c12" size={32} />,
            points: [
                "Simplify order processing from inquiry to fulfillment.",
                "Create and manage retail, wholesale, or custom orders with full design and item specifications.",
                "Update each order with its current status – under process, ready, or delivered.",
                "Link orders to customers, vendors, and production for smooth tracking.",
                "Manage partial orders, rejections, and returns easily.",
                "Keep order history organized by client, item, or date.",
                "Ensures timely order handling and transparency across teams.",
            ]
        },
        {
            id: 8,
            title: "Accounting",
            icon: <FileBarChart2 color="#34495e" size={32} />,
            points: [
                "Manage your entire jewellery business’s financial with smart, built-in accounting tools.",
                "Automatically generate ledgers for customers, vendors, agents, and employees.",
                "Track payments received and pending, apply GST, manage discounts, and handle credit sales — all from a single dashboard.",
                "Integrate seamlessly with your sales, purchase, and inventory modules to reflect accurate balances.",
                "Export reports to Tally or Excel for your accountant.",
                "Reduces manual work and ensures error-free bookkeeping.",
                "Fully GUST-compliant and ready for audits.",
            ]
        },
        {
            id: 9,
            title: "PPC (Purchase, Payment, Commission)",
            icon: <IndianRupee color="#27ae60" size={32} />,
            points: [
                "Track every rupee flowing in and out of your business — from supplier purchases to customer payments and agent commissions.",
                "Manage and record purchase orders, payment schedules, partial payments, and outstanding dues.",
                "Assign broker/agent commissions order-wise and auto-calculate based on defined percentages.",
                "Helps jewellery businesses stay on top of supplier costs and sales payouts.",
                "Brings complete visibility and control over financial transactions linked to daily operations. ",
                "Ideal for retail, wholesale, and manufacturing setups with dynamic purchase and sales flows.",
            ]
        },
        {
            id: 10,
            title: "Delivery",
            icon: <PackageCheck color="#9b59b6" size={32} />,
            points: [
                "Manage jewellery deliveries with accuracy and professionalism.",
                "Generate delivery challans with item details, customer info, and dispatch notes.",
                "Track dispatched, pending, and partially delivered orders.",
                "Record handovers for showroom pickups, courier dispatches, or agent deliveries.",
                "Maintain records of what was delivered, when, and to whom.",
                "Integrated with order and inventory modules for real-time status updates.",
                "Ensures better tracking, fewer disputes, and smooth delivery operations.",
            ]
        }
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/jewel-mfg.jpg"} mainButtonContent={mainButtonContent}
            />

            <section
                className="mfg-benefits-bullets"
                style={{
                    backgroundImage: "url(/bg.webp)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="mfg-benefits-bullets__container">
                    <div className="mfg-benefits-bullets__header">
                        <h2 className="mfg-benefits-bullets__title">
                            {section7Title}
                        </h2>
                    </div>

                    <div className="mfg-benefits-bullets__grid">
                        {section7Data.map((item) => (
                            <div key={item.id} className="mfg-bullet-card">
                                <div className="mfg-bullet-card__icon">{item.icon}</div>
                                <div className="mfg-bullet-card__content">
                                    <h3 className="mfg-bullet-card__title">{item.title}</h3>
                                    <ul className="mfg-bullet-card__list">
                                        {item.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default page
