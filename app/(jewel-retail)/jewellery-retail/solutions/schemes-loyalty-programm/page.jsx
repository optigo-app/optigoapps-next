import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import Image from 'next/image';

const page = () => {

    const mainTitle = "Retail Solutions – Scheme & Loyalty Program by Optigo ERP";
    const mainDescription = `<strong>Optigo</strong> ERP empowers jewellery retailers with powerful tools to build customer loyalty and boost sales through customizable schemes and loyalty programs. With these features, your store can offer attractive customer benefits, manage collections, and track redemptions – all digitally, transparently, and efficiently.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section4"];

    const section2Title = "🎁 Scheme Management in Optigo ERP";
    const section2Title1 = "⭐ Loyalty Program Management in Optigo ERP";

    const section2Data = [
        {
            content: "Create and manage retail schemes effortlessly in Optigo."
        },
        {
            content: "Whether it’s a gold-saving plan, monthly installment scheme, or a promotional offer – Optigo gives you complete control to design, run, and monitor schemes that attract customers and build trust."
        },
        {
            content: "With Optigo’s scheme management, your team stays organized, and your customers stay engaged throughout the scheme duration. It increases customer retention and ensures predictable sales flow."
        },
    ]

    const section2Data1 = [
        {
            content: "Reward your customers and keep them coming back! With Optigo’s loyalty program, you can assign loyalty points based on purchase value, encouraging repeat sales and long-term customer relationships."
        },
        {
            content: "This program not only increases customer satisfaction but also boosts overall sales. "
        },
        {
            content: "Loyal customers become brand ambassadors and contribute to long-term growth."
        },
    ]

    const section4Title = "Key Features of Scheme Management:"
    const section4Title1 = "Key Features of Loyalty Program:"

    const section4Data = [
        {
            icon: "📐",
            title: "Custom Scheme Design",
            description: "Design custom schemes for gold weight or fixed amount goals."
        },
        {
            icon: "🧾",
            title: "Customer Enrollment",
            description: "Enroll customers and start collecting monthly or one-time payments."
        },
        {
            icon: "🧾",
            title: "Instant Payment Receipts",
            description: "Provide payment receipts instantly with proper tracking."
        },
        {
            icon: "🎯",
            title: "Maturity Conditions",
            description: "Set maturity conditions – whether redemption is in gold or amount."
        },
        {
            icon: "⏳",
            title: "Auto Scheme Tracking",
            description: "Auto-calculate scheme status based on installment or duration."
        },
        {
            icon: "📊",
            title: "Access real-time reports",
            description: "Access reports for pending payments, maturity schedules, and customer-wise summaries."
        },
        {
            icon: "📤",
            title: "Receipt & Summary Sharing",
            description: "Print or send scheme summaries and receipts via WhatsApp or Email."
        }
    ];


    const section4Data1 = [
        {
            icon: "⚙️",
            title: "Loyalty Rule Setup",
            description: "Define loyalty rules in the system using master settings."
        },
        {
            icon: "💳",
            title: "Point Earning Configuration",
            description: "Set how many points to award per ₹ amount spent."
        },
        {
            icon: "➕",
            title: "Automatic Point Accumulation",
            description: "Automatically accumulate loyalty points for each customer purchase."
        },
        {
            icon: "🎁",
            title: "Point Redemption",
            description: "Allow customers to redeem points during future purchases."
        },
        {
            icon: "💱",
            title: "Redemption Value Control",
            description: "Customize redemption value (e.g., 1 point = ₹1 or as per your policy)."
        },
        {
            icon: "📊",
            title: "Live Balance & History",
            description: "Monitor point balances and redemption history in real time."
        },
        {
            icon: "🌟",
            title: "Loyalty Tiers & Rewards",
            description: "Offer special loyalty tiers or rewards to high-value customers."
        }
    ];


    const section3Data = [
        {
            content: "✅ Increased customer retention and satisfaction."
        },
        {
            content: "✅ Higher repeat purchases through rewards and scheme engagement."
        },
        {
            content: "✅ Easy tracking of payments, redemptions, and balances."
        },
        {
            content: "✅ Automated reporting and customer-wise records."
        },
        {
            content: "✅ Paperless and error-free scheme management."
        },
        {
            content: "✅ Real-time visibility into scheme performance."
        },
        {
            content: "✅ Ready to boost your customer loyalty and run powerful schemes?"
        },
        {
            content: "Choose Optigo ERP to streamline your retail engagement and drive long-term success."
        },
        {
            content: "Contact us today to schedule a demo!"
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/loyalty.jpg'} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section4Title={section4Title} sectiion4Data={section4Data} />

            <div className='scheme_mission_main'>
                <section className="mission">
                    <div className="text">
                        <h2 style={{ marginBottom: '1rem' }}>{section2Title1}</h2>
                        <ul className="bullet-list">
                            {section2Data1?.map((item, index) => (
                                <li key={index}>{item?.content}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mission-image">
                        <Image src="/mission.jpg" height={300} width={300} style={{ width: "350px" }} alt="Jewelry Workshop" unoptimized />
                    </div>
                </section>
            </div>

            <section className="scheme-core-services">
                <h2>{section4Title1}</h2>
                <div className="service-columns">
                    {(() => {
                        const mid = Math.ceil(section4Data1.length / 2);
                        const leftServices = section4Data1.slice(0, mid);
                        const rightServices = section4Data1.slice(mid);
                        return (
                            <>
                                <div className="left-column">
                                    {leftServices.map((service, idx) => (
                                        <div className="service-item" key={idx}>
                                            <div className="icon">{service.icon}</div>
                                            <div>
                                                <h4>{service.title}</h4>
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="right-column">
                                    {rightServices.map((service, idx) => (
                                        <div className="service-item" key={idx + mid}>
                                            <div className="icon">{service.icon}</div>
                                            <div>
                                                <h4>{service.title}</h4>
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        );
                    })()}
                </div>
            </section>

            <section className="sol_retail_scheme_mission1">
                <div className="text">
                    <h2>🚀 Benefits of Scheme & Loyalty Programs with Optigo:</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
