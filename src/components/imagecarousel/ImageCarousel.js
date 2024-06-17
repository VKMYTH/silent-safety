import React from 'react';
import Slider from 'react-slick';
import './imagecarousel.css';

// Import the images
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="carousel-slide">
                    <img src={img1} alt="Image 1" className="carousel-image" />
                </div>
                <div className="carousel-slide">
                    <img src={img2} alt="Image 2" className="carousel-image" />
                </div>
                <div className="carousel-slide">
                    <img src={img3} alt="Image 3" className="carousel-image" />
                </div>
                <div className="carousel-slide">
                    <img src={img4} alt="Image 4" className="carousel-image" />
                </div>
                <div className="carousel-slide">
                    <img src={img5} alt="Image 5" className="carousel-image" />
                </div>
            </Slider>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
};

export default ImageCarousel;