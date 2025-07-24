'use client';

import React from 'react';
import './page.scss';
import { useRouter } from 'next/navigation';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Image from 'next/image';

const page = () => {

    const navigate = useRouter();

    const section2Title = "Why Go Cloud?";

    const section2Data = [
        {
            content: "Jewellery businesses are evolving—customers expect speed, transparency, and digital experiences. Traditional systems can’t keep up with the demands of modern sales, inventory, and customer service. That’s where Cloud ERP steps in."
        },
        {
            content: "With OptigoApps Cloud ERP, you get a centralized, secure platform to manage your entire business—across retail stores, wholesale operations, exhibitions, and even remote teams. Whether it’s order booking, inventory sync, accounting, or CRM—everything is updated live."
        },
        {
            content: "Cloud ERP reduces manual work, eliminates duplication, and ensures you’re always connected to your business. There’s no need for on-premise servers, IT maintenance, or worrying about data loss. Just log in from any device and take control."
        },
        {
            content: "Go cloud to stay fast, flexible, and future-ready—while focusing more on jewellery, less on operations."
        },
    ]

    const section7Title = "Key Features for using Cloud ERP for Jewellery"

    const section7Data = [
        {
            id: 1,
            title: "Anytime, Anywhere Access",
            icon: "🌐",
            points: [
                `No more dependency on office desktops or local systems. Access your full ERP system from a browser, tablet, or mobile app—wherever you are.`,
                `Whether you're traveling for business, managing exhibitions like IIJS, or working from home, your data is always available and up to date.`,
                `This freedom allows you to manage orders, check inventory, or even monitor staff activity on the go.`,
                `It eliminates delays in communication and ensures quick decision-making.`,
                `Cloud ERP is perfect for team collaboration—sales, billing, and management can operate from different locations without disruptions.`,
                `You can work during power cuts or internet downtime at one location by simply switching devices or using mobile data.`,
                `No need for remote desktop software or VPNs—our ERP runs directly on the cloud.`,
                `It’s ideal for business owners who are always on the move.`,
                `Get real-time notifications, approvals, and reports from anywhere.`,
                `Cloud ERP empowers you to run your business, even if you’re not physically present.`
            ]
        },
        {
            id: 2,
            title: "Real-Time Inventory & Orders",
            icon: "📦",
            points: [
                `Inventory across branches, stores, and sales reps updates automatically in real-time. No manual syncing required.`,
                `Whether a customer buys in-store, online, or at an exhibition, the stock count adjusts instantly.`,
                `You’ll never accidentally sell out-of-stock items again or face order duplication.`,
                `Sales reps can check product availability and pricing live before confirming any order.`,
                `Online orders from your B2B/B2C portal are auto-logged into the ERP—saving time and reducing errors.`,
                `Gold rate changes reflect live across billing, quotations, and product listings.`,
                `Automated low-stock alerts help you replenish inventory in advance.`,
                `Purchase orders can be auto-suggested based on real consumption.`,
                `You can track which item sells fast and which one stays on shelf—boosting better purchasing decisions.`,
                `All this makes stock management smart, precise, and reliable.`
            ]
        },
        {
            id: 3,
            title: "No Servers, No IT Headaches",
            icon: "🖥️",
            points: [
                `With cloud ERP, you don’t need to invest in heavy IT infrastructure or hire in-house technical teams.`,
                `All the servers, backups, and technical updates are managed securely by OptigoApps.`,
                `This reduces setup and maintenance costs significantly compared to traditional ERP software.`,
                `There are no licensing complications, no need for on-site installations, and no waiting for upgrades.`,
                `Your system is always running on the latest version with the latest features.`,
                `If your laptop crashes or showroom system fails, you don’t lose data—just log in from another device.`,
                `System performance is consistent, even during peak sales periods or exhibitions.`,
                `You also save physical space in your store or office by avoiding bulky server hardware.`,
                `Support is quick, remote, and expert—our team handles everything behind the scenes.`,
                `Spend less time fixing technical issues and more time growing your jewellery business.`
            ]
        },
        {
            id: 4,
            title: "Is It Secure?",
            icon: "🔒",
            points: [
                `We understand jewellery businesses deal with highly sensitive data—prices, designs, customers, and ledgers.`,
                `That’s why our cloud ERP uses bank-level security and enterprise-grade encryption for all data.`,
                `Every login is protected with user roles, so staff can only access the data relevant to their job.`,
                `There’s no risk of local data theft or accidental deletion due to virus, power cut, or hardware crash.`,
                `We do daily cloud backups to ensure your business data is never lost—even in emergencies.`,
                `Every action is tracked with an audit log, giving you visibility over who did what and when.`,
                `If a device is stolen or lost, you can deactivate its access remotely—keeping your system secure.`,
                `Your login is protected with a secure password system and optionally with OTP-based login.`,
                `Our data centers are certified, monitored, and compliant with international security standards.`,
                `With Optigo Cloud ERP, your business is safer on the cloud than it is on paper or local drives.`
            ]
        },
        {
            id: 5,
            title: "Real Case: From Confusion to Clarity",
            icon: "📈",
            points: [
                `Client: Mumbai-based Jewellery Wholesaler with 2 stores and 5 sales reps`,
                `Before: Inventory was managed on Excel. Price lists were sent daily on WhatsApp. Orders during exhibitions were missed or delayed.`,
                `Sales reps gave wrong prices or sold unavailable products due to poor coordination.`,
                `Customer complaints increased and valuable leads were lost.`,
                `After switching to OptigoApps Cloud ERP:`,
                `Sales team accessed live prices, product photos, and availability on mobile at IIJS.`,
                `Orders were booked instantly and synced to head office, where invoicing and dispatch began in real-time.`,
                `Owners monitored team performance and sales reports live—even while traveling.`,
                `No confusion, no miscommunication, and order conversions increased by 30% during the exhibition.`,
                `This business now operates smoother across all branches, and customer satisfaction has doubled.`
            ]
        },
        {
            id: 6,
            title: "Who Is It For?",
            icon: "🎯",
            points: [
                `Retail Jewellers: Handle billing, customer history, inventory, gold rate updates, and deliveries—all from one screen`,
                `Wholesalers: Share secure product catalogs with live stock & prices, and let clients or reps place direct orders`,
                `Manufacturers: Track job work, production flow, worker output, and daily material usage from any location`,
                `Exhibitors: Use the Express App offline, sync all bookings automatically once connected—perfect for IIJS or outstation shows`,
                `Multi-Branch Owners: Monitor sales and staff activity across stores with real-time dashboards and branch-wise reports`,
                `Sales Teams: Use mobile apps for lead management, quotations, stock check, and instant order booking`,
                `Accountants: Automate ledgers, day books, cash books, and tax filings with zero errors and full compliance`,
                `Business Owners: Stay in control of your business 24x7 from your phone—even while on holiday`
            ]
        },
        {
            id: 7,
            title: "Scalable & Future-Ready",
            icon: "🚀",
            points: [
                `Start with the modules you need—like billing and inventory—and scale up later with CRM, design, or production tools.`,
                `Our cloud ERP is flexible and modular—add features as your business expands.`,
                `Whether you grow from 1 store to 10 branches, or from domestic to international, OptigoApps grows with you.`,
                `Choose full cloud, hybrid (cloud + offline), or app-based usage as per your workflow.`,
                `We support full B2B and B2C e-commerce integration with live inventory sync.`,
                `Connect your website, catalogs, and app with your ERP—automatically.`,
                `We ensure you always have the tools you need without starting over from scratch.`,
                `Every feature is updated regularly based on user feedback and jewellery market trends.`,
                `You also get priority support, onboarding, and training for your team.`,
                `OptigoApps isn’t just ERP—it’s your business partner in the cloud.`
            ]
        }
    ];

    const section3Data = [
        {
            content: "With OptigoApps Cloud ERP, you gain full control, zero chaos, and real-time insight."
        },
        {
            content: "Say goodbye to miscommunication, lost orders, and technical hassles."
        },
        {
            content: "And say hello to growth, speed, and peace of mind."
        },
        {
            content: "👉 Contact Us Now: https://optigoapps.com/contact"
        },
        {
            content: "💻 Book a Free Demo: https://optigoapps.com/demo"
        },
    ]


    return (
        <>
            <HeroBanner career="" heading="Cloud ERP for Jewellers - Work Smarter, Not Harder" subheading="" buttonData="" src='/cloud.jpg' />

            <div className='platform-mission_main'>
                <section className="mission">
                    <div className="text">
                        <h2 style={{ marginBottom: '1rem' }}>{section2Title}</h2>
                        <ul className="bullet-list">
                            {section2Data?.map((item, index) => (
                                <li key={index}>{item?.content}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mission-image">
                        <Image src="/cloud-1.jpg" height={400} width={500} alt="Jewelry Workshop" unoptimized />
                    </div>
                </section>
            </div>

            <section
                className="platform-benefits-bullets"
                style={{
                    backgroundImage: "url(/bg.webp)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="platform-benefits-bullets__container">

                    <div className="platform-benefits-bullets__header">
                        <h2 className="platform-benefits-bullets__title">
                            {section7Title}
                        </h2>
                    </div>

                    <div className="platform-benefits-bullets__grid">
                        {section7Data.map((item) => (
                            <div key={item.id} className="bullet-card">
                                <div className="bullet-card__icon">{item.icon}</div>
                                <div className="bullet-card__content">
                                    <h3 className="bullet-card__title">{item.title}</h3>
                                    <ul className="bullet-card__list">
                                        {item.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                    {item.link && (
                                        <a href={item.linkUrl} className="bullet-card__link">
                                            {item.link} <ArrowRight className="bullet-card__link-arrow" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="platform_mission_3">
                <div className="text">
                    <h2>Ready to Take Your Jewellery Business to the Cloud?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>

        </>
    );
};

export default page;
