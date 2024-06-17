import React from 'react';
import {Footer, Blog, WhatComp, Header, Team} from './containers';
import { Navbar } from './components';
import './App.css';
import { Marquee } from './components';


import "react-vertical-timeline-component/style.min.css";

const App = () => (
  <div className="App">
    <Navbar />
    <div className="gradient__bg">
      <Header />
    </div>
    <WhatComp />
      <Marquee />
      <Team />
    <Blog />
    <Footer />
  </div>
);

export default App;
