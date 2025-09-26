'use client';

import React, { useEffect, useState } from 'react';
import './PromotionalBanner.scss';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const PromotionalBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setVisible(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <Dialog open={visible} onOpenChange={setVisible}>
            <DialogContent className="promo-modal-overlay hide-close-button">
                <VisuallyHidden>
                    <DialogTitle>Promotional Offer</DialogTitle>
                </VisuallyHidden>

                <div className="promo-modal">
                    <button className="close-btn" onClick={() => setVisible(false)}>×</button>
                    <img src="/promo.webp" alt="Offer Jewellery" className="promo-image" />
                    <h2 className="promo-title">15% Off</h2>
                    <p className="promo-text">
                        Nisi ultricies dictum augue faucibus. Mi tempor at augue adipiscing quis velit.
                        In non, ultrices adipiscing risus nibh turpis pellentesque.
                    </p>
                    <button className="promo-cta">DISCOVER NOW</button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PromotionalBanner;
