import React from "react";
import Marquee from "react-fast-marquee";
import "./BrandLogo.scss";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useHandleUrlNavigation } from "@/utils/useHandleUrlNavigation";

const BrandLogo = () => {
    const optigo = [
        "logo1.jpg",
        "logo2.jpg",
        "logo3.jpg",
        "logo4.jpg",
        "logo5.jpg",
        "logo6.jpg",
        "logo7.jpg",
        "logo8.jpg",
        "logo9.jpg",
        "logo10.jpg",
        "logo11.jpg",
        "logo12.jpg",
    ];

    const handleNavigation = useHandleUrlNavigation();

    const OptigologoElements = optigo.map((logo, index) => (
        <Image
            key={index}
            className="smr_affilitionImg"
            loading="lazy"
            src={`./logo/${logo}`}
            height={300}
            alt="logos"
            width={300}
            style={{ width: "130px", objectFit: "cover", marginRight: "90px" }}
            unoptimized
        />
    ));

    return (
        <div id="brandsComponentID" className="smr_brandsComponentsDiv">
            <div className="brand_content_div">
                <div className="brand_title">
                    <h3 className="brand_section_tag">Meet Optigo</h3>
                    <h2 className="brand_section_title">Crafting Timeless Jewelry for Every Occasion</h2>
                </div>
                <div className="brand_see_customers">
                    <Link href={"/partners"} onClick={(e) => handleNavigation(e, "/partners")} className="brand_btn">
                        See more Customers stories
                        <ArrowRight />
                    </Link>
                </div>
            </div>
            <div className="brand-contents">
                <p>Optigo is a trusted name in the world of fine jewelry, known for designing and crafting exceptional pieces that blend artistry with craftsmanship. Whether you are a retailer looking for premium products or an individual in search of the perfect piece, our extensive range offers something for every taste and occasion. From intricate rings to statement necklaces, we specialize in creating high-quality jewelry that stands the test of time.</p>
            </div>
            <h3 className="brand_title_1">Our trusted Clients</h3>
            <Marquee
                className="smr_brandsComponentClass"
                gradient={false}
                speed={40}
                pauseOnHover={true}
            >
                {OptigologoElements}
            </Marquee>
        </div>
    );
};

export default BrandLogo;
