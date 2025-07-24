import React from 'react';
import {
    ArrowRight,
} from 'lucide-react';
import './Features1.scss';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';

const Features1 = () => {

    const handleNavigation = useHandleUrlNavigation();

    const enterprises = [
        {
            id: 1,
            title: "Jewelry ERP System",
            description:
                "Centralize your entire business operations with a cloud-based ERP tailored for jewelry. Manage karigar work, gold rates, inventory, billing, and accounting in one place.",
            link: "Jewelry ERP",
            linkUrl: "#"
        },
        {
            id: 2,
            title: "Jewelry E-commerce Platform",
            description:
                "Sell jewelry online with a modern e-commerce platform built for the industry. Sync inventory, showcase HD catalogs, and offer customizations with real-time order tracking.",
            link: "Jewelry E-commerce",
            linkUrl: "/apps-&-ecommerce/industries/jewellery-manufacturing/"
        },
        {
            id: 3,
            title: "SCAVU – Smart Camera AI for Valuation & Utility",
            description:
                "Use SCAVU to automatically identify jewelry items, estimate value, and detect patterns using smart AI vision tools — ideal for appraisals, insurance, and showroom automation.",
            link: "SCAVU Integration",
            linkUrl: "#"
        },
        {
            id: 4,
            title: "Jewelry Mobile App",
            description:
                "Offer a personalized jewelry app for your customers and staff. Enable catalog browsing, try-on AR, customer login, karigar tracking, and real-time pricing on mobile.",
            link: "Jewelry App",
            linkUrl: "#"
        },
        {
            id: 5,
            title: "Jewelry POS System",
            description:
                "Boost your retail experience with a jewelry-focused POS system. Handle barcode-based billing, weight-wise pricing, return/exchange, and dynamic gold rate updates.",
            link: "Jewelry POS",
            linkUrl: "/jewellery-retail/solutions/pos-billing-barcode-scanning/"
        }
    ];

    return (
        <section className='enterprise_main_div'>
            <div className="enterprise-grid"
            // style={{ backgroundImage: 'url(/bg1.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}
            >
                <div className="enterprise-grid__container">
                    <div className="enterprise-grid__header">
                        <div className="brand_title">
                            <h3 className="brand_section_tag">Enterprise Applications</h3>
                        </div>
                        <h2 className="enterprise-grid__title">
                            Jewellery-specific software built for better business
                        </h2>
                        <p>Explore our cloud solutions for ERP, SCM, HCM, financial management, and sustainability and ESG. All Infor enterprise software runs on our powerful cloud innovation platform and integrates seamlessly.</p>
                    </div>

                    <div className="enterprise-grid__grid">
                        {enterprises.map((enterprise) => (
                            <div key={enterprise.id} className="enterprise-card">
                                <div className="enterprise-card__content">
                                    <h3 className="enterprise-card__title">{enterprise.title}</h3>
                                    <p className="enterprise-card__description">{enterprise.description}</p>

                                    <Link href={enterprise.linkUrl} onClick={(e) => handleNavigation(e, enterprise.linkUrl)} className="enterprise-card__link">
                                        {enterprise.link}
                                        <ArrowRight className="enterprise-card__link-arrow" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features1;