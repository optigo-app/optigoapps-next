import BlogLandingPage from '@/components/BlogLandingPage/BlogLandingPage';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';
import React from 'react';

export const metadata = generatePageMetadata(pages['/blog']);

const page = () => {
    return (
        <>
            <BlogLandingPage />
        </>
    );
};

export default page
