// components/ShowContact.jsx
'use client';

import { usePathname } from 'next/navigation';
import Contact from '../Contact/Contact';

export default function ShowContact() {
    const pathname = usePathname();

    if (pathname.startsWith('/') || pathname.startsWith('/career/') || pathname.startsWith('/career-form/')) {
        return null;
    }

    return <Contact />;
}
