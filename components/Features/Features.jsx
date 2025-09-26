import React from 'react';
import {
    Truck,
    ArrowRight,
    Gem,
    CircleDollarSign,
    Brush,
    Home,
    Sparkles,
    CreditCard,
    Globe
} from 'lucide-react';
import './Features.scss';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';

const Features = () => {

    const handleNavigation = useHandleUrlNavigation();

    const industries = [
        {
            id: 1,
            icon: <Gem className="industry-card__icon" />,
            title: "Cubic Zirconia (CZ) Jewelry",
            description: "Offer dazzling brilliance at affordable prices with our solutions for CZ jewelry design, production, and catalog management.",
            link: "CZ Jewelry Solutions",
            linkUrl: "/jewellery-manufacture/industries/cz-manufacturing/"
        },
        {
            id: 2,
            icon: <CircleDollarSign className="industry-card__icon" />,
            title: "Bangles & Traditional Ornaments",
            description: "Manage bangle sizing, karat configuration, and regional styling variations across your traditional collections with our intuitive platform.",
            link: "Bangle Management",
            linkUrl: "/jewellery-manufacture/industries/bangles-manufacturing/"
        },
        {
            id: 3,
            icon: <Brush className="industry-card__icon" />,
            title: "Jadau & Polki Jewelry",
            description: "Support intricate craftsmanship with modules for design tracking, artisan payout, and gemstone mapping tailored for Jadau & Polki.",
            link: "Jadau Jewelry Workflow",
            linkUrl: "/jewellery-manufacture/industries/kundan-jadau-manufacturing/"
        },
        {
            id: 4,
            icon: <Home className="industry-card__icon" />,
            title: "Homemade & Artisan Jewelry",
            description: "Enable small-scale jewelers to digitize operations, from handmade inventory control to online selling and workshop management.",
            link: "Homemade Jewelry ERP",
            linkUrl: "/jewellery-manufacture/industries/handmade-jewellery/"
        },
        {
            id: 5,
            icon: <Sparkles className="industry-card__icon" />,
            title: "Contemporary & CNE Collections",
            description: "Elevate your modern jewelry lines with design planning tools, seasonal trend integration, and influencer-ready campaign support.",
            link: "Contemporary Jewelry",
            linkUrl: "/jewellery-manufacture/industries/gold-jewellery-manufacturing/"
        },
        {
            id: 6,
            icon: <Truck className="industry-card__icon" />,
            title: "Jewelry Supply Chain",
            description: "Coordinate raw material sourcing, vendor workflows, and stone certification within a unified jewelry supply chain platform.",
            link: "Supply Chain Integration",
            linkUrl: "/jewellery-wholesale/solutions/vendor-management/"
        },
        {
            id: 7,
            icon: <CreditCard className="industry-card__icon" />,
            title: "Jewelry Retail & POS",
            description: "Optimize billing, inventory sync, loyalty points, and gold rate fluctuations with a dedicated POS for single or multi-location jewelry stores.",
            link: "Retail POS System",
            linkUrl: "/jewellery-retail/solutions/pos-billing-barcode-scanning/"
        },
        {
            id: 8,
            icon: <Globe className="industry-card__icon" />,
            title: "Global Exports & Exhibitions",
            description: "Simplify export documentation, exhibition item tracking, and region-specific compliance with our global trade-ready modules.",
            link: "Jewelry Export Suite",
            linkUrl: "/jewellery-wholesale/solutions/order-reorder-management/"
        }
    ];

    return (
        <section className="industry-grid" style={{ backgroundImage: 'url(/bg.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
            <div className="industry-grid__container">
                <div className="industry-grid__header">
                    <h2 className="industry-grid__title">
                        Jewellery-specific software built for better business
                    </h2>
                    <a href='/jewellery-manufacture/industries/all-industries/' onClick={(e) => handleNavigation(e, '/jewellery-manufacture/industries/all-industries/')} className="industry-grid__view-all">
                        View all industries
                        <ArrowRight className="industry-grid__arrow" />
                    </a>
                </div>

                <div className="industry-grid__grid">
                    {industries.map((industry) => (
                        <div key={industry.id} className="industry-card">
                            <div className="industry-card__icon-wrapper">
                                {industry.icon}
                            </div>

                            <div className="industry-card__content">
                                <h3 className="industry-card__title">{industry.title}</h3>
                                <p className="industry-card__description">{industry.description}</p>

                                <Link href={industry.linkUrl} onClick={(e) => handleNavigation(e, industry.linkUrl)} className="industry-card__link">
                                    {industry.link}
                                    <ArrowRight className="industry-card__link-arrow" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;