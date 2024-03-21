import React from 'react'; // Importing React library for JSX usage
import TriviaTwistLogoWithLights from '/assets/TriviaTwistLogoWithLights.svg'; // Importing the logo image file

const LogoComponent = () => {
  return (
    <div>
      <img src={TriviaTwistLogoWithLights} alt="TriviaTwist Logo With Lights" className= "logo" />
    </div>
  );
};
// Exporting the LogoComponent for use in other parts of the application
  export default LogoComponent;