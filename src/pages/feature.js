import React from 'react';
import { FeatureContainer, FeatureButton } from './featureelements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Education</h1>
        <p className='first'>  • Espiritu Santo Parochial School of Manila, Inc. </p>
        <p className='second'> Bachelor of Science - BS, Information Technology </p>
        <p className='third'> Aug 2018 - Jun 2022 </p>
        <p className='first'>  • University of Santo Tomas </p>
        <p className='second'> Science, Technology, Engineering, and Mathematics </p>
        <p className='third'> Jun 2016 - May 2018 </p>
    </FeatureContainer>
  );
};

export default Feature;