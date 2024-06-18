import React from 'react';
import './footer.css';


const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Footer = () => (
  <div className="gpt3__footer section__padding">

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>Silent Safety <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
          <a onClick={() => handleScroll('blog')}>Links</a>
      </div>
      <div className="gpt3__footer-links_div">
          <a onClick={() => handleScroll('team')}>Team Info</a>
      </div>
      <div className="gpt3__footer-links_div">
          <a href="mailto:silentsafetyofficial@gmail.com">silentsafetyofficial@gmail.com</a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 Silent Safety. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
