import BlogsData from '@/public/BlogsData';
import BlogDetail from '@/components/BlogDetails/BlogDetails';
import React from 'react';

export async function generateStaticParams() {
    return BlogsData.map((blog) => ({
        'blog-details': blog.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    }));
}

export default async function BlogDetailsPage({ params }) {
    const { 'blog-details': blogSlug } = await params;

    return <BlogDetail blogSlug={blogSlug} />;
}
