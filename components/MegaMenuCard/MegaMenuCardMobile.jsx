"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useHandleUrlNavigation } from "@/utils/useHandleUrlNavigation";
import Link from "next/link";

const PromoCard = ({ title, description, buttonText, link, setActiveMenu, setDrawerOpen }) => {
    const handleNavigation = useHandleUrlNavigation();
    const paths = ["Platform", "Blog", "Career"];
    const isInclude = paths.includes(title);

    return (
        <div className='bg-[#f3e9ff] p-4 rounded-lg mb-4'>
            <h4 className='text-lg font-semibold mb-2'>{title}</h4>
            <p className='text-sm mb-3'>{description}</p>
            <button
                className={`text-white px-4 py-1 rounded-lg cursor-pointer hover:opacity-90 ${isInclude ? 'mt-3' : ''}`}
                style={{ background: 'var(--primary-background)' }}
                onClick={(e) => {
                    handleNavigation(e, link);
                    setActiveMenu(null);
                    setDrawerOpen(false);
                }}
            >
                {buttonText}
            </button>
        </div>
    );
};

const SectionLink = ({ item, setActiveMenu, setDrawerOpen, isPromo = false }) => {
    const handleNavigation = useHandleUrlNavigation();

    if (isPromo) {
        return (
            <PromoCard 
                title={item.title} 
                description={item.description} 
                buttonText={`Explore ${item.title}`} 
                link={item.url} 
                setActiveMenu={setActiveMenu}
                setDrawerOpen={setDrawerOpen}
            />
        );
    }

    return (
        <li className="hover:text-[var(--primary-color)] text-sm py-[1px]">
            <Link
                href={item.url}
                onClick={(e) => {
                    handleNavigation(e, item.url);
                    setActiveMenu(null);
                    setDrawerOpen(false);
                }}
                className="hover:underline"
            >
                {item.name}
            </Link>
        </li>
    );
};

const contentMap = {
    'Manufacture': {
        industries: [
            { name: 'Diamond Jewellery Manufacturing', url: '/jewellery-manufacture/industries/diamond-jewellery-manufacturing' },
            { name: 'Gold Jewellery Manufacturing', url: '/jewellery-manufacture/industries/gold-jewellery-manufacturing' },
            { name: 'Handmade Jewellery', url: '/jewellery-manufacture/industries/handmade-jewellery' },
            { name: 'CZ Manufacturing', url: '/jewellery-manufacture/industries/cz-manufacturing' },
            { name: 'Kundan/Jadau Manufacturing', url: '/jewellery-manufacture/industries/kundan-jadau-manufacturing' },
            { name: 'Bangles Manufacturing', url: '/jewellery-manufacture/industries/bangles-manufacturing' },
        ],
        solutions: [
            { name: 'Product Development ', url: '/jewellery-manufacture/solutions/product-development' },
            { name: 'Automate Entry Process', url: '/jewellery-manufacture/solutions/automate-entry-process' },
            { name: 'Real-Time Loss & Recovery Control', url: '/jewellery-manufacture/solutions/real-time-loss-recovery-control' },
            { name: 'Inventory Tracking', url: '/jewellery-manufacture/solutions/inventory-tracking' },
            { name: 'Product Making Guide for workers', url: '/jewellery-manufacture/solutions/product-making-guide-for-workers' },
            { name: 'AI Based Stock Search', url: '/jewellery-manufacture/solutions/ai-based-stock-search' },
        ],
        features: [
            { name: 'Inventory Management', url: '/jewellery-manufacture/features/inventory-management' },
            { name: 'Production process & Loss Management', url: '/jewellery-manufacture/features/production-process-loss-management' },
            { name: 'Orders & Repair Management', url: '/jewellery-manufacture/features/orders-repair-management' },
            { name: 'Accounts & Payments', url: '/jewellery-manufacture/features/accounts-payments' },
            { name: 'Sales & billing', url: '/jewellery-manufacture/features/sales-billing' },
            { name: 'Analytics & Dashboards', url: '/jewellery-manufacture/features/analytics-dashboards' },
        ],
        promos: [
            {
                title: 'B2B E-Commerce',
                description: 'Empower your business with seamless digital commerce.',
                buttonText: 'Explore B2B Solutions →'
            },
            {
                title: 'SCAVU Data Exchange',
                description: 'Seamlessly connect and exchange data across systems.',
                buttonText: 'Discover SCAVU Exchange →'
            }
        ],
        links: {
            // industries: { label: 'All industries →', url: '/jewellery-manufacture/industries/all-industries' },
            // solutions: { label: 'All solutions →', url: '/solutions' },
            features: { label: 'All features →', url: '/jewellery-manufacture/features/all-features' },
        }
    },

    'Wholesale': {
        industries: [
            { name: 'Jewellery Distributors', url: '/jewellery-wholesale/industries/jewellery-distributors' },
            { name: 'Domestic/International Wholesalers', url: '/jewellery-wholesale/industries/domestic-international-wholesalers' },
            { name: 'Multi-Branch Wholesalers', url: '/jewellery-wholesale/industries/multi-branch-wholesalers' },
        ],
        solutions: [
            { name: 'Vendor Management', url: '/jewellery-wholesale/solutions/vendor-management' },
            { name: 'Order & Re-Order Management', url: '/jewellery-wholesale/solutions/order-reorder-management' },
            { name: 'Real-Time Pricing Control', url: '/jewellery-wholesale/solutions/real-time-pricing-control' },
            { name: 'Multi-Branch & Cloud Sync', url: '/jewellery-wholesale/solutions/multi-branch-cloud-sync' },
            { name: 'Repair Management', url: '/jewellery-wholesale/solutions/repair-management' },
            { name: 'Advance Analytical Reports', url: '/jewellery-wholesale/solutions/advance-analytical-reports' },
        ],
        features: [
            { name: 'Inventory Management', url: '/jewellery-wholesale/features/inventory-management' },
            { name: 'Sales & Billing with scanning', url: '/jewellery-wholesale/features/sales-billing-scanning' },
            { name: 'Approval Memo & Reconciliation', url: '/jewellery-wholesale/features/approval-memo-reconciliation' },
            { name: 'Accounts & Payments', url: '/jewellery-wholesale/features/accounts-payments' },
            { name: 'Customer Relationship Management (CRM)', url: '/jewellery-wholesale/features/customer-relationship-management-crm' },
        ],
        promos: [
            {
                title: 'B2B E-Commerce',
                description: 'Empower your wholesale business with seamless digital commerce.',
                buttonText: 'Explore B2B Solutions →'
            },
            {
                title: 'SCAVU Data Exchange',
                description: 'Seamlessly connect and exchange data across systems.',
                buttonText: 'Discover SCAVU Exchange →'
            }
        ],
        links: {
            // industries: { label: 'All industries →', url: '/jewellery-wholesale/industries/all-industries' },
            // solutions: { label: 'All solutions →', url: '/solutions' },
            features: { label: 'All features →', url: '/jewellery-wholesale/features/all-features' },
        }
    },

    'Jewellery Retail': {
        industries: [
            { name: 'Jewellery Retail Stores', url: '/jewellery-retail/industries/jewellery-retail-stores' },
            { name: 'Multi-Location Chains', url: '/jewellery-retail/industries/multi-location-chains' },
            { name: 'Franchise Showrooms', url: '/jewellery-retail/industries/franchise-showrooms' },
            { name: 'Boutique Jewellery Brands', url: '/jewellery-retail/industries/boutique-jewellery-brands' },
        ],
        solutions: [
            { name: 'POS Billing & Barcode Scanning', url: '/jewellery-retail/solutions/pos-billing-barcode-scanning' },
            { name: 'Orders & Vendor Management', url: '/jewellery-retail/solutions/orders-vendor-management' },
            { name: 'Repair & Old Gold Management', url: '/jewellery-retail/solutions/repair-old-gold-management' },
            { name: 'Business Analytics', url: '/jewellery-retail/solutions/business-analytics' },
            { name: 'Schemes & Loyalty Programm', url: '/jewellery-retail/solutions/schemes-loyalty-programm' },
        ],
        features: [
            { name: 'Inventory Management', url: '/jewellery-retail/features/inventory-management' },
            { name: 'Customer Relationship Management (CRM)', url: '/jewellery-retail/features/customer-relationship-management-crm' },
            { name: 'Accounts & Payments', url: '/jewellery-retail/features/accounts-payments' },
            { name: 'Sales & Billing with Scanning', url: '/jewellery-retail/features/sales-billing-scanning' },
            { name: 'Approval Memo & Reconciliation', url: '/jewellery-retail/features/approval-memo-reconciliation' },
        ],
        promos: [
            {
                title: 'Smart POS & Billing',
                description: 'Speed up your retail operations with barcode-enabled POS, approval memos, and seamless billing.',
                buttonText: 'Explore POS Features →'
            },
            {
                title: 'Retail ERP with CRM & Analytics',
                description: 'Manage inventory, customer relationships, and branches with real-time insights and cloud sync.',
                buttonText: 'Discover Retail ERP →'
            }
        ],

        links: {
            // industries: { label: 'All industries →', url: '/jewellery-retail/industries/all-industries' },
            // solutions: { label: 'All solutions →', url: '/solutions' },
            features: { label: 'All features →', url: '/jewellery-retail/features/all-features' },
        }
    },

    'Apps & Ecommerce': {
        industries: [
            { name: 'Jewellery Manufacturing', url: '/apps-&-ecommerce/industries/jewellery-manufacturing' },
            { name: 'Jewellery Wholesalers', url: '/apps-&-ecommerce/industries/jewellery-wholesalers' },
            { name: 'Jewellery Retailers', url: '/apps-&-ecommerce/industries/jewellery-retailers' },
        ],
        solutions: [
            { name: 'Real time Connected B2B Ecommerce', url: '/apps-&-ecommerce/E-commerce/real-time-connected-b2b-ecommerce' },
            { name: 'Real time Connected B2C Ecommerce', url: '/apps-&-ecommerce/E-commerce/real-time-connected-b2c-ecommerce' },
            { name: 'Omnichannel Ecommerce', url: '/apps-&-ecommerce/E-commerce/omnichannel-ecommerce' },
        ],
        features: [
            { name: 'Sales Team Mobile App (Optigo Express)', url: '/apps-&-ecommerce/apps/sales-team-mobile-app' },
            { name: 'Exhibition & Sales team tablet App (Icatalog)', url: '/apps-&-ecommerce/apps/exhibition-&-sales-team-tablet-app' },
            { name: 'B2B & B2C Catalog Sharing (ProCatalog)', url: '/apps-&-ecommerce/apps/b2b-&-b2c-catalog-sharing' },
            { name: 'Show Room App (EVO)', url: '/apps-&-ecommerce/apps/show-room-app' },
            { name: 'Showroom Advertising App (Sinage App)', url: '/apps-&-ecommerce/apps/showroom-advertising-app' },
            { name: 'Vendor Customer integrations (SCAVU)', url: '/apps-&-ecommerce/apps/vendor-customer-integrations' },
            { name: 'Management App', url: '/apps-&-ecommerce/apps/management-app' },
            { name: 'Sales Representative App', url: '/apps-&-ecommerce/apps/sales-representative-app' },
            { name: 'B2b Customer APP', url: '/apps-&-ecommerce/apps/b2b-customer-app' },
            { name: 'B2c Customer APP', url: '/apps-&-ecommerce/apps/b2c-customer-app' },
        ],
        promos: [
            {
                title: 'Omnichannel Jewellery Commerce',
                description: 'Unify your B2B, B2C, and showroom experiences with real-time connected apps and eCommerce solutions.',
                buttonText: 'See Omnichannel in Action →'
            },
            {
                title: 'Sales & Showroom Apps',
                description: 'Equip your teams with powerful tools like Optigo Express, Icatalog, EVO, and more.',
                buttonText: 'Explore Sales Solutions →'
            }
        ],
        links: {}
    },
    
    'About Us': {
        industries: [
            {
                title: 'Platform',
                description: 'Discover our platform that powers innovation and seamless digital experiences.',
                url: '/platform'
            },
        ],
        solutions: [
            {
                title: 'Blog',
                description: 'Read insights, updates, and stories from our team and industry experts.',
                url: '/blog'
            },
        ],
        features: [
            {
                title: 'Career',
                description: 'Join our team and grow your career with exciting opportunities.',
                url: '/career'
            },
        ],
    }
};

const AccordionSection = ({ title, items, linkText, setActiveMenu, setDrawerOpen, isAboutUs = false }) => {
    const handleNavigation = useHandleUrlNavigation();
    
    if (isAboutUs) {
        return (
            <div className="space-y-4 p-4">
                {items.map((item, idx) => (
                    <SectionLink 
                        key={idx} 
                        item={item} 
                        setActiveMenu={setActiveMenu} 
                        setDrawerOpen={setDrawerOpen} 
                        isPromo={true}
                    />
                ))}
            </div>
        );
    }

    return (
        <AccordionItem value={title}>
            <AccordionTrigger className="text-[var(--primary-color)] text-base font-semibold uppercase">
                {title}
            </AccordionTrigger>
            <AccordionContent>
                <ul className="space-y-2 pl-4">
                    {items.map((item, idx) => (
                        <SectionLink 
                            key={idx} 
                            item={item} 
                            setActiveMenu={setActiveMenu} 
                            setDrawerOpen={setDrawerOpen} 
                        />
                    ))}
                    {linkText && (
                        <li className="mt-2 font-medium text-[var(--primary-color)] py-[5px]">
                            <Link
                                href={linkText.url}
                                onClick={(e) => {
                                    handleNavigation(e, linkText.url);
                                    e.preventDefault();
                                    setActiveMenu(null);
                                    setDrawerOpen(false);
                                }}
                            >
                                {linkText.label}
                            </Link>
                        </li>
                    )}
                </ul>
            </AccordionContent>
        </AccordionItem>
    );
};

const MegaMenuAccordion = ({ title, setActiveMenu, setDrawerOpen }) => {
    const data = contentMap[title];
    if (!data) return null;

    if (title === 'About Us') {
        const allItems = [
            ...(data.industries || []),
            ...(data.solutions || []),
            ...(data.features || [])
        ];

        return (
            <div className="absolute w-full left-0 bg-[#f7f7f8] shadow-2xl rounded-md p-6 overflow-y-auto max-h-[90vh] animate-in">
                <h3 className="text-lg font-semibold mb-4">Know More</h3>
                <div className="space-y-4">
                    {allItems.map((item, idx) => (
                        <SectionLink 
                            key={idx} 
                            item={item} 
                            setActiveMenu={setActiveMenu} 
                            setDrawerOpen={setDrawerOpen} 
                            isPromo={true}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="absolute w-full left-0 bg-[#f7f7f8] shadow-2xl rounded-md p-6 overflow-y-auto max-h-[90vh] animate-in">
            <Accordion type="multiple" className="space-y-4">
                <AccordionSection
                    title="Industries"
                    items={data.industries || []}
                    linkText={data.links?.industries}
                    setActiveMenu={setActiveMenu}
                    setDrawerOpen={setDrawerOpen}
                />
                {data.solutions?.length > 0 && (
                    <AccordionSection
                        title={title === "Apps & Ecommerce" ? "E-Commerce" : "Solutions"}
                        items={data.solutions}
                        linkText={data.links?.solutions}
                        setActiveMenu={setActiveMenu}
                        setDrawerOpen={setDrawerOpen}
                    />
                )}
                {data.features?.length > 0 && (
                    <AccordionSection
                        title={title === "Apps & Ecommerce" ? "Apps" : "Feature"}
                        items={data.features}
                        linkText={data.links?.features}
                        setActiveMenu={setActiveMenu}
                        setDrawerOpen={setDrawerOpen}
                    />
                )}
            </Accordion>

            {data.promos?.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-4">
                    {data.promos.map((promo, idx) => (
                        <div
                            key={idx}
                            className="bg-[#f3e9ff] p-4 sm:p-6 rounded-lg text-sm shadow-md w-full"
                        >
                            <h4 className="text-lg font-semibold mb-2">{promo.title}</h4>
                            <p className="mb-4">{promo.description}</p>
                            <button
                                className="text-white px-4 py-2 rounded-lg"
                                style={{ background: "var(--primary-background)" }}
                            >
                                {promo.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MegaMenuAccordion;
