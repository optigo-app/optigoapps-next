import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-mfg/industries/kundan-jadau-manufacturing']);

const page = () => {

    const mainTitle = "Kundan/Jadau jewellery manufacturing – Powered by Optigoapps";
    const mainDescription = `<strong>Kundan/Jadau jewellery</strong> is intricate, time-consuming, and requires skilled artisans, gemstone fitting, and careful metal management. Managing such a traditional process manually leads to delays, wastage, and lack of visibility. With <strong>OptigoApps ERP</strong>, you get full control over every stage of Jadau production — from design to delivery — while preserving your handmade heritage.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Built for customized, luxury, artisanal Jewellery`;

    const section2Data = [
        {
            content: "Handle multi-stone and Kundan Meena workflows"
        },
        {
            content: "Track real gold, semi-precious stones, and labor cost separately"
        },
        {
            content: "Monitor each stage – from ghadi to setting, enameling, and polishing"
        },
        {
            content: "Get real-time status of every piece or set in production"
        },
    ]

    const section7Title = "Key features – Optimized for jadau Manufacturing"

    const section7Data = [
        {
            "id": 1,
            "title": "Design & Order Flow Management",
            "icon": "📝",
            "points": [
                "Capture sketch/CAD with gemstone and karigar instructions",
                "Link gold, silver foil, enamel, and stone data to the job card",
                "Assign karigars for each step and monitor progress"
            ]
        },
        {
            "id": 2,
            "title": "Custom Process Creation",
            "icon": "⚙️",
            "points": [
                "Create your own workflow: ghadi → minakari → jadau setting → polishing",
                "Set timelines and checkpoints for each stage",
                "Barcode job cards for accountability and movement tracking"
            ]
        },
        {
            "id": 3,
            "title": "Stone & Gold Tracking",
            "icon": "💎",
            "points": [
                "Manage real-time inventory of uncut stones, polki, kundan, emerald, ruby, and pearls",
                "Track stone-wise usage and balance by job",
                "Monitor gold used in frame, setting, and borders"
            ]
        },
        {
            "id": 4,
            "title": "Loss Control & Recovery",
            "icon": "📉",
            "points": [
                "Track loss in ghadi, setting, filing, and final finish",
                "Metal balance reports and alerts for abnormal loss",
                "Dust, foil, and extra recovery reports available anytime"
            ]
        },
        {
            "id": 5,
            "title": "Karigar-wise Performance & Billing",
            "icon": "🧑‍🏭",
            "points": [
                "Worker card tracking and daily update system",
                "Track time, loss, and return for each karigar",
                "Auto karigar payment slip generation based on work done"
            ]
        },
        {
            "id": 6,
            "title": "Repair & Rework Flow",
            "icon": "🛠️",
            "points": [
                "Assign and track repair or modification jobs",
                "Capture before/after weight and costing",
                "Keep record of material used during repair"
            ]
        },
        {
            "id": 7,
            "title": "QC & Final Delivery Prep",
            "icon": "📦",
            "points": [
                "Multi-level quality check (stone setting, polish, enamel, strength)",
                "Add final weight, photos, and finish report",
                "Attach everything with delivery and invoice"
            ]
        }
    ]

    const section3Data = [
        {
            content: "Tailored for traditional handmade workflows"
        },
        {
            content: "Real-time tracking for gold, stone, labor & design"
        },
        {
            content: "Barcode job cards, I-Card login & weigh scale integrated"
        },
        {
            content: "Repair, remake, and rework flow covered"
        },
        {
            content: "Designed for premium jewellery houses & legacy workshops"
        }
    ]

    const section4Data = [
        {
            content: "Bring structure to your artistry with smart technology."
        },
        {
            content: "OptigoApps empowers Jadau manufacturers with real-time visibility, loss control, and production precision — while preserving the essence of handcrafted luxury."
        },
        {
            content: "Book a Free Demo"
        },
        {
            content: "Call: +91-XXXXXXXXXX"
        },
        {
            content: "Email: info@optigoapps.com"
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/jadav.jpg'} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section7Title={section7Title} section7Data={section7Data} />

            <section className="mission4">
                <div className="text">
                    <h2>Why Optigoapps for Kundan/Jadau Manufacturing ?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>GET STARTED</h2>
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
