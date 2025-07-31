import Industries from '@/components/Industries/Industries'
import React from 'react'
import './page.scss'
import { AlertTriangle, Boxes, ClipboardList, FileBarChart2, LayoutDashboard, Wrench, PackageCheck, Palette, Truck, UserRound, Workflow } from 'lucide-react';

const page = () => {
    const mainTitle = "Jewellery Wholesale";
    const mainDescription = `<strong>Jewellery wholesale software</strong> streamlines operations by automating order processing, invoicing, and support—freeing teams to focus on growth. Real-time insights into sales, inventory, and finances enable smarter pricing and stock decisions while minimizing errors and stockouts. The system improves compliance, data security, and scalability. With enhanced control and visibility across departments, wholesalers can deliver faster service and scale confidently.`;

    const mainButtonContent = "Explore more"

    const section7Title = "Key features of Jewellery Wholesale";

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
            title: "Dashboard",
            icon: <LayoutDashboard color="#2980b9" size={32} />,
            points: [
                "Get a real-time overview of your jewellery business on a single screen.",
                "The dashboard displays key metrics like stock value, orders in progress, sales, purchases, customer balances, and vendor activity.",
                "Quickly access pending deliveries, due payments, or low-stock alerts.",
                "Helps business owners and managers make faster, data-driven decisions.",
                "Designed to keep your team focused on daily priorities.",
                "Customization based on roles — from admin to sales or production.",
            ]
        },
        {
            id: 5,
            title: "Repair",
            icon: <Wrench color="#3B82F6" size={24} />,
            points: [
                "Easily manage jewellery repair jobs for your customers with full tracking.",
                "Record item details, reason for repair, estimated delivery dates, and charges (if any).",
                "Update job status as it moves through repair stages like polish, stone fixing, or resizing.",
                "Notify customers when the item is ready for pickup.",
                "Track pending or completed repairs in one place.",
                "Ensures transparency and better service for repeat customers.",
                "Especially useful for retail showrooms and service desks.",
            ]
        },
        {
            id: 6,
            title: "Loss Management",
            icon: <AlertTriangle color="#c0392b" size={32} />,
            points: [
                "Monitor gold, diamond, or gemstone loss during manufacturing or vendor job work.",
                "Record expected vs actual material returns and identify discrepancies in real time.",
                "Track losses by process, vendor, or job ID to ensure better accountability.",
                "Helps in cost control and settlement calculations.",
                "Strengthens trust with clients and karigars by reducing unexplained material differences.",
                "Essential for maintaining material accuracy and business profitability.",
            ]
        },
        {
            id: 7,
            title: "Production Management",
            icon: <Workflow color="#f39c12" size={32} />,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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
            id: 11,
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
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/jewel-wholesale.jpg"} mainButtonContent={mainButtonContent}
            />

            <section
                className="wholesale-benefits-bullets"
                style={{
                    backgroundImage: "url(/bg.webp)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="wholesale-benefits-bullets__container">
                    <div className="wholesale-benefits-bullets__header">
                        <h2 className="wholesale-benefits-bullets__title">
                            {section7Title}
                        </h2>
                    </div>

                    <div className="wholesale-benefits-bullets__grid">
                        {section7Data.map((item) => (
                            <div key={item.id} className="wholesale-bullet-card">
                                <div className="wholesale-bullet-card__icon">{item.icon}</div>
                                <div className="wholesale-bullet-card__content">
                                    <h3 className="wholesale-bullet-card__title">{item.title}</h3>
                                    <ul className="wholesale-bullet-card__list">
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
