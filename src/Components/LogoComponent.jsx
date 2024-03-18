import React from 'react';
import TriviaTwistLogoWithLights from '../assets/TriviaTwistLogoWithLights.svg';

const LogoComponent = () => {
  return (
    <div>
      <img src={TriviaTwistLogoWithLights} alt="TriviaTwist Logo With Lights" className= "logo" />
    </div>
  );
};
  export default LogoComponent;