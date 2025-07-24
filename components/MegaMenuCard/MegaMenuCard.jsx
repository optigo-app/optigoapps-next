'use client';

import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Section = ({ title, items, linkText, navigate, setActiveMenu }) => {

    const handleNavigation = useHandleUrlNavigation();

    return (
        <div>
            <h4 className='text-md font-semibold text-red-600 uppercase mb-2 tracking-[3px] cursor-pointer'>
                {title}
            </h4>

            <ul className='space-y-3 text-gray-700 text-[15px]'>
                {items.map((item, idx) => (
                    <li key={idx} className='w-fit hover:text-red-600'>
                        <Link
                            href={item.url}
                            onClick={(e) => { handleNavigation(e, item.url); setActiveMenu(null) }}
                            className='hover:underline cursor-pointer'
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}

                {linkText && (
                    <li className='text-red-600 mt-2 font-medium text-lg'>
                        <Link
                            href={linkText.url}
                            onClick={(e) => { handleNavigation(e, linkText.url); setActiveMenu(null) }}
                            className='cursor-pointer'
                        >
                            {linkText.label}
                        </Link>
                    </li>
                )}
            </ul>
        </div >
    )
};

const PromoCard = ({ title, description, buttonText }) => (
    <div className='bg-purple-200 p-6 h-full rounded-lg w-96 text-lg'>
        <h4 className='text-xl font-semibold mb-2'>{title}</h4>
        <p className='mb-4'>{description}</p>
        <button className='bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 cursor-pointer'>
            {buttonText}
        </button>
    </div>
);

const contentMap = {
    'Jewellery MFG': {
        industries: [
            { name: 'Diamond Jewellery Manufacturing', url: '/jewellery-mfg/industries/diamond-jewellery-manufacturing' },
            { name: 'Gold Jewellery Manufacturing', url: '/jewellery-mfg/industries/gold-jewellery-manufacturing' },
            { name: 'Handmade Jewellery', url: '/jewellery-mfg/industries/handmade-jewellery' },
            { name: 'CZ Manufacturing', url: '/jewellery-mfg/industries/cz-manufacturing' },
            { name: 'Kundan/Jadau Manufacturing', url: '/jewellery-mfg/industries/kundan-jadau-manufacturing' },
            { name: 'Bangles Manufacturing', url: '/jewellery-mfg/industries/bangles-manufacturing' },
        ],
        solutions: [
            { name: 'Product Development ', url: '/jewellery-mfg/solutions/product-development' },
            { name: 'Automate Entry Process', url: '/jewellery-mfg/solutions/automate-entry-process' },
            { name: 'Real-Time Loss & Recovery Control', url: '/jewellery-mfg/solutions/real-time-loss-recovery-control' },
            { name: 'Inventory Tracking', url: '/jewellery-mfg/solutions/inventory-tracking' },
            { name: 'Product Making Guide for workers', url: '/jewellery-mfg/solutions/product-making-guide-for-workers' },
            { name: 'AI Based Stock Search', url: '/jewellery-mfg/solutions/ai-based-stock-search' },
        ],
        features: [
            { name: 'Inventory Management', url: '/jewellery-mfg/features/prod-mfg' },
            { name: 'Production process & Loss Management', url: '/feature/loss' },
            { name: 'Orders & Repair Management', url: '/feature/crm' },
            { name: 'Accounts & Payments', url: '/feature/vrm' },
            { name: 'Sales & billing', url: '/feature/accounting' },
            { name: 'Analytics & Dashboards', url: '/feature/ppc' },
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
            industries: { label: 'All industries →', url: '/jewellery-mfg/industries/all-industries' },
            solutions: { label: 'All solutions →', url: '/solutions' },
            features: { label: 'All features →', url: '/features' },
        }
    },

    'Jewellery Wholesale': {
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
            { name: 'Inventory Management', url: '/feature/vrm' },
            { name: 'Sales & Billing with scanning', url: '/feature/crm' },
            { name: 'Approval Memo & Reconciliation', url: '/feature/dashboard' },
            { name: 'Digital Catalog & analysis', url: '/feature/accounts' },
            { name: 'Accounts & Payments', url: '/feature/repair' },
            { name: 'Customer Relationship Management (CRM)', url: '/feature/repair' },
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
            industries: { label: 'All industries →', url: '/jewellery-wholesale/industries/all-industries' },
            solutions: { label: 'All solutions →', url: '/solutions' },
            features: { label: 'All features →', url: '/features' },
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
            { name: 'Inventory Management', url: '/feature/crm' },
            { name: 'Customer Relationship Management (CRM)', url: '/feature/vrm' },
            { name: 'Accounts & Payments', url: '/feature/inventory' },
            { name: 'Sales & Billing with Scanning', url: '/feature/accounts' },
            { name: 'Approval Memo & Reconciliation', url: '/feature/dashboard' },
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
            industries: { label: 'All industries →', url: '/jewellery-retail/industries/all-industries' },
            solutions: { label: 'All solutions →', url: '/solutions' },
            features: { label: 'All features →', url: '/features' },
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
};

const MegaMenuCard = ({ title, setActiveMenu }) => {

    const data = contentMap[title];
    if (!data) return null;

    const router = useRouter();

    return (
        <div className="absolute w-[110rem] left-[-5%] bg-[#f7f7f8] shadow-2xl p-12 flex justify-between rounded-md animate-in">
            <Section title="Industries" items={data.industries || []} linkText={data.links?.industries} navigate={router} setActiveMenu={setActiveMenu} />
            {data.solutions?.length > 0 && (
                <Section
                    title={title === 'Apps & Ecommerce' ? 'E-Commerce' : 'Solutions'}
                    items={data.solutions}
                    linkText={data.links?.solutions}
                    navigate={router}
                    setActiveMenu={setActiveMenu}
                />
            )}
            {data.features?.length > 0 && (
                <Section
                    title={title === 'Apps & Ecommerce' ? 'Apps' : 'Feature'}
                    items={data.features}
                    linkText={data.links?.features}
                    navigate={router}
                    setActiveMenu={setActiveMenu}
                />
            )}

            {data.promos?.length > 0 ? (
                <div className='flex flex-col gap-5'>
                    {data.promos.map((promo, idx) => (
                        <PromoCard key={idx} {...promo} />
                    ))}
                </div>
            ) : (
                <div className='bg-purple-200 p-6 h-full rounded-lg w-96 text-lg invisible' />
            )}
        </div>
    );
};

export default MegaMenuCard;
