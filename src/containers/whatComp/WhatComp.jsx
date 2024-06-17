import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatComp.css';

const WhatComp = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wcomp">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Silent Safety?" text="The app serves to fight all types of crime, but it can primarily be utilized in domestic abuse cases. It works just like the namesake: providing safety, silently. Essentially the app enables individuals under duress to communicate with 911 without having to talk." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><a href="src/components/navbar#blog">Explore our blogs</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="With the Press of a Button" text="When activated with a simple press of a button, the app uses a callbot to get in touch with a dispatcher and communicate a user's profile." />
      <Feature title="Information Provided" text="The app communicates basic personal information about themselves, live location, and any additional messages the user may type." />
      <Feature title="Communication to Dispatchers" text="It allows for two-way communication between the user and dispatcher without any actual speaking from the user side, making it extremely flexible for anyone in need." />
    </div>
  </div>
);

export default WhatComp;
