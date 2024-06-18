import React from 'react';
import './marquee.css';

// Import the images
import img1 from '../../assets/frisco-police.png';
import img2 from '../../assets/lewis-police.png';
import img3 from '../../assets/batt-found-2.png';

const Marquee = () => {
    return (
        <div>
            <h1 className="marquee-heading" id="partners">Partners</h1>
            <hr className="red-line" />
            <div className="marquee-container">
                <div className="marquee-content">
                    <img src={img1} alt="Image 1" className="marquee-image" />
                    <img src={img2} alt="Image 2" className="marquee-image" />
                    <img src={img3} alt="Image 3" className="marquee-image" />
                    <img src={img1} alt="Image 1" className="marquee-image" />
                    <img src={img2} alt="Image 2" className="marquee-image" />
                    <img src={img3} alt="Image 3" className="marquee-image" />
                    <img src={img1} alt="Image 1" className="marquee-image" />
                    <img src={img2} alt="Image 2" className="marquee-image" />
                    <img src={img3} alt="Image 3" className="marquee-image" />
                    <img src={img1} alt="Image 1" className="marquee-image" />
                    <img src={img2} alt="Image 2" className="marquee-image" />
                    <img src={img3} alt="Image 3" className="marquee-image" />
                    <img src={img1} alt="Image 1" className="marquee-image" />
                    <img src={img2} alt="Image 2" className="marquee-image" />
                    <img src={img3} alt="Image 3" className="marquee-image" />
                </div>
            </div>
            <hr className="red-line" />
        </div>
    );
};

export default Marquee;
