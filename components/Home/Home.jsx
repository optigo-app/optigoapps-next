import React from 'react'
import './Home.scss'
import Features from '../Features/Features'
import BrandLogo from '../BrandLogo/BrandLogo'
import Features1 from '../Features1/Features1'
import BlogCards from '../BlogCards/BlogCards'
import TabView1 from '../Tabview/Tabview1'
import HeroBannerCarousel from '../HeroBanner/HeroBannerCarousel'
import FaqsSection from '../FaqsSection/FaqsSection'
import Contact from '../Contact/Contact'

const Home = () => {
    return (
        <>
            {/* <HeroSlider /> */}
            <HeroBannerCarousel />
            {/* <HeroBanner /> */}
            <BrandLogo />
            <Features />
            <Features1 />
            {/* <Tabview /> */}
            <TabView1 />
            <BlogCards />
            <FaqsSection />
            <div id="contact-section">
                <Contact />
            </div>
        </>
    )
}

export default Home
