import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className="about-body">
            <div className="pt-5 pb-3">
                <h1>About Us</h1>
                <hr className="w-25 mx-auto" />
                <div className='d-flex justify-content-around mt-5 mb-4'>
                    <div className="w-25 h-50">
                        <img className="w-25 mb-4" src="https://s.vipkidstatic.com/fe-static/teacher/mkt-pc/img/f4a0d77.png" alt="" />
                        <h4>Learn When You Want</h4>
                        <p>Set your own schedule on your own time. No minimum hour requirement. You can learn from arewhere</p>
                    </div>
                    <div className="w-25 h-50">
                        <img className="w-25 mb-3" src="https://s.vipkidstatic.com/fe-static/teacher/mkt-pc/img/2c6d90f.png" alt="" />
                        <h4>No Lesson Planning</h4>
                        <p>We provide the lesson plan with our best-in-class curriculum, you just focus on teaching.</p>
                    </div>
                    <div className="w-25 h-50">
                        <img className="w-25 " src="https://s.vipkidstatic.com/fe-static/teacher/mkt-pc/img/22c58dc.png" alt="" />
                        <h4>Competitive Pay</h4>
                        <p>Our top-notch teachers are what set us apart, so we make sure they're fairly compensated.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;