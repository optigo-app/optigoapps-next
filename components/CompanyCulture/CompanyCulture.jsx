import React from 'react';
import './CompanyCulture.scss';

const CompanyCulture = () => {
    return (
        <section className="team-story">
            <div className="team-story__left">
                <div className="image-container">
                    <img src='/company-culture-1.png' alt="Team at work" className="main-img" />
                </div>
            </div>

            <div className="team-story__right">
                <h2>Innovate. Transform. Lead – Be Part of Our Journey at OptigoApps</h2>
                <p>
                    At <strong>OptigoApps</strong>, we're not just building software — we're redefining how the jewellery industry runs. We value diversity, encourage innovation, and foster a culture where every voice matters.
                </p>
                <p>
                    Our team is a close-knit community of thinkers, builders, and doers who believe in growth through collaboration. Whether it’s product innovation, client success, or internal excellence — we thrive together.
                </p>
                <p>
                    Here, you'll work on cutting-edge ERP solutions that empower jewellers across the globe — from boutique retailers to international wholesalers. You’ll contribute to real-world impact while growing your skills in a dynamic, supportive environment.
                </p>
                <p>
                    Join a workplace that invests in your future. At OptigoApps, mentorship, skill-building, and leadership opportunities aren’t just promises — they’re part of our DNA.
                </p>
                <p>
                    Bring your expertise, curiosity, and drive — and let’s build the future of jewellery technology together.
                    <br />
                    <strong>Apply now and become a part of the OptigoApps family!</strong>
                </p>
            </div>
        </section>
    );
};

export default CompanyCulture;
