import Industries from '@/components/Industries/Industries'
import React from 'react'
import './page.scss'
import { Boxes, FileBarChart2, LayoutDashboard, Truck, UserRound } from 'lucide-react';

const page = () => {
    const mainTitle = "Jewellery Retail";
    const mainDescription = `<strong>Retail jewellery software</strong> provides real-time stock visibility, accurate inventory tracking, and variation management—reducing losses from overstocking or stock-outs. Integrated POS, instant billing, and secure payments enable quick, error-free transactions and enhance customer experience. The result: smoother operations, better service, and increased conversions.`;

    const mainButtonContent = "Explore more"

    const section7Title = "Key features of Jewellery Retail";

    const section7Data = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
            title: "Accounts",
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
            id: 5,
            title: "Dashboard",
            icon: <LayoutDashboard color="#4E2A84" size={32} />,
            points: [
                "Get a real-time overview of your jewellery business on a single screen.",
                "The dashboard displays key metrics like stock value, orders in progress, sales, purchases, customer balances, and vendor activity.",
                "Quickly access pending deliveries, due payments, or low-stock alerts.",
                "Helps business owners and managers make faster, data-driven decisions.",
                "Designed to keep your team focused on daily priorities.",
                "Customization based on roles — from admin to sales or production.",
            ]
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/jewel-retail.jpg"} mainButtonContent={mainButtonContent}
            />

            <section
                className="retail-benefits-bullets"
                style={{
                    backgroundImage: "url(/bg.webp)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="retail-benefits-bullets__container">
                    <div className="retail-benefits-bullets__header">
                        <h2 className="retail-benefits-bullets__title">
                            {section7Title}
                        </h2>
                    </div>

                    <div className="retail-benefits-bullets__grid">
                        {section7Data.map((item) => (
                            <div key={item.id} className="retail-bullet-card">
                                <div className="retail-bullet-card__icon">{item.icon}</div>
                                <div className="retail-bullet-card__content">
                                    <h3 className="retail-bullet-card__title">{item.title}</h3>
                                    <ul className="retail-bullet-card__list">
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
