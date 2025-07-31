"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import './page.scss'
import MegaMenuCard from '../MegaMenuCard/MegaMenuCard';
import { Search } from 'lucide-react';
import SearchModel from '../Search/SearchModel';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';

const page = () => {

    const [activeMenu, setActiveMenu] = useState(null);
    const [showMenu, setShowMenu] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);

    const handleNavigation = useHandleUrlNavigation();
    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        "Jewellery MFG",
        "Jewellery Wholesale",
        "Jewellery Retail",
        "Apps & Ecommerce",
        // "Service and Support",
        "Partners",
        "About Us",
    ];

    const handleContactClick = () => {
        if (pathname === '/') {
            const contactEl = document.getElementById('contact-section');
            if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to homepage with hash
            router.push('/#contact-section');
        }
    };

    useEffect(() => {
        if (activeMenu) {
            const timeout = setTimeout(() => {
                setShowMenu(activeMenu);
            }, 200);
            return () => clearTimeout(timeout); // cleanup
        } else {
            setShowMenu(null);
        }
    }, [activeMenu]);

    return (
        <header className='landing-header'>
            <div className='header-container'>
                <div className="top-links-wrapper">
                    <div className="top-links-container">
                        <div className="top-links">
                            <Link href={'/platform'} onClick={(e) => handleNavigation(e, '/platform')} className="top-link">
                                <Image src="/resources.svg" height={16} width={16} alt='resources' unoptimized />
                                Platform
                            </Link>
                            <Link href={'/blog'} onClick={(e) => handleNavigation(e, '/blog')} className="top-link">
                                <Image src="/book.svg" height={20} width={20} alt='blog' unoptimized />
                                Blog
                            </Link>
                            <Link href={'/career'} onClick={(e) => handleNavigation(e, '/career')} className="top-link">
                                <Image src="/career.svg" height={22} width={22} alt='careers' unoptimized />
                                Career
                            </Link>
                            {/* <div onClick={(e) => handleRedirect(e, 'customer')} className="top-link">
                                <Image src="/person.svg" height={20} width={20} alt='customer-center' unoptimized />
                                Customer Center
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="main-header">
                    <a href='/' onClick={(e) => handleNavigation(e, '/')} className="logo-container" >
                        <Image
                            src="/logo.png"
                            alt="optigo-apps"
                            width={300}
                            height={30}
                            unoptimized
                        />
                    </a>
                    <nav
                        className="navigation"
                        onMouseEnter={() => setActiveMenu(activeMenu)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        {/* MENU ROW */}
                        <div className="menu-row">
                            {menuItems.map((item, idx) => {
                                const links = {
                                    "Jewellery MFG": "/jewellery-mfg",
                                    "Jewellery Wholesale": "/jewellery-wholesale",
                                    "Jewellery Retail": "/jewellery-retail",
                                    "Apps & Ecommerce": "/apps-ecommerce",
                                    "Partners": "/partners",
                                    "About Us": "/about-us",
                                };

                                const href = links[item] || "#";

                                return (
                                    <Link
                                        href={href}
                                        key={idx}
                                        className={`menu-item ${activeMenu === item ? "active" : ""}`}
                                        onClick={(e) => {
                                            handleNavigation(e, href);
                                            setActiveMenu(null);
                                            if (!links[item]) {
                                                e.preventDefault(); // prevent click if no link
                                            }
                                        }}
                                        onMouseEnter={() => setActiveMenu(item)}
                                    >
                                        {item}
                                        <span className="menu-underline"></span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* MEGA MENU OUTSIDE LOOP */}
                        {showMenu && (
                            <div className="mega-menu">
                                <MegaMenuCard title={activeMenu} setActiveMenu={setActiveMenu} />
                            </div>
                        )}

                    </nav>
                    <div className="header-actions">
                        {/* <button className="search-btn" onClick={() => setShowModal(true)}>
                            <Search className="search-icon" />
                        </button> */}
                        {/* <button className="globe-btn">
                            <Globe className="globe-icon" />
                        </button> */}
                        <button className="contact-btn" onClick={handleContactClick}>
                            Contact Us
                        </button>
                        <button className='demo-btn' onClick={() => setShowModal1(true)}>Watch Demo</button>
                        {showModal1 && (
                            <div
                                className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-75 bg-gray-900/50"
                                onClick={() => setShowModal1(false)}
                            >
                                <div
                                    className="relative py-10 px-5 bg-white rounded-2xl shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Close X icon */}
                                    <button
                                        onClick={() => setShowModal1(false)}
                                        className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-800"
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M6 6L18 18M6 18L18 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>

                                    {/* Video */}
                                    <div className="w-full">
                                        <iframe
                                            width="1000"
                                            height="500"
                                            className="rounded-2xl"
                                            src="https://www.youtube.com/embed/0UAGpuOXBDA?si=7QEUDQhcPIr0dtIA"
                                            title="YouTube Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {showModal && <SearchModel
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                    />}
                </div>
            </div>
        </header>
    )
}

export default page;