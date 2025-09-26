import React from 'react'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/apps-&-ecommerce/E-commerce']);

const page = () => {
    return (
        <div>
            E-commerce
        </div>
    )
}

export default page
