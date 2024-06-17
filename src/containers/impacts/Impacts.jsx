import React from 'react';
import Feature from '../../components/feature/Feature';
import './impacts.css';

const featuresData = [
  {
    title: 'Globalization',
    text: 'Improved transportation and communication infrastructure has facilitated international trade and cultural exchange, but also resulted in economic and cultural homogenization.',
  },
  {
    title: 'Urbanization',
    text: 'Increased mobility and accessibility through transportation has led to rapid urbanization and suburbanization, but also contributed to environmental and social problems such as traffic congestion and urban sprawl.',
  },
  {
    title: 'Societal Connectivity',
    text: 'Advancements in communication technology have facilitated the development of new forms of social interaction and community building, but also led to the spread of misinformation and the erosion of privacy.',
  },
  {
    title: 'Environmental Impact',
    text: 'Transportation infrastructure has contributed to air and water pollution, climate change, and the depletion of natural resources, leading to environmental degradation and public health concerns.',
  },
];

const Impacts = () => (
  <div className="gpt3__features section__padding" id="impacts">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Let's Explore the Impacts Transportation and Communication technologies have had on society from 1900-present.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Impacts;
