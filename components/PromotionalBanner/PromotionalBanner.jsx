'use client'

import React, { useEffect, useState } from 'react';
import './PromotionalBanner.scss';

const PromotionalBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="promo-modal-overlay">
            <div className="promo-modal">
                <button className="close-btn" onClick={() => setVisible(false)}>×</button>
                <img
                    src="/promo.webp"
                    alt="Offer Jewellery"
                    className="promo-image"
                />
                <h2 className="promo-title">15% Off</h2>
                <p className="promo-text">
                    Nisi ultricies dictum augue faucibus. Mi tempor at augue adipiscing quis velit. In non, ultrices adipiscing risus nibh turpis pellentesque.
                </p>
                <button className="promo-cta">DISCOVER NOW</button>
            </div>
        </div>
    );
};

export default PromotionalBanner;
