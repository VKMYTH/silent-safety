import React from 'react';
import './header.css';
import ImageCarousel from '../../components/imagecarousel/ImageCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Header = (props: any) => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to Silent Safety</h1>
      <p>It is becoming more apparent that the US is facing a domestic abuse crisis. The CDC finds that around 1 in 3 women report having experienced severe physical violence from an intimate partner in their lifetime.

          That number has only risen in recent years as the Council on Criminal Justice finds that reports of domestic violence have increased 8%.

          Thus, we came up with Silent Safety, a mobile iOS app that speaks to 911 on your behalf when you can’t make noise.
      </p>

      <div className="gpt3__header-content__input">
          <button onClick={() => handleScroll('info')}>Get Started Below</button>
      </div>
    </div>

      <ImageCarousel />
  </div>
);

export const getStaticProps = async () => {
    return {
        props: {
            name: "Silent Safety",
        },
    };
};

export default Header;
