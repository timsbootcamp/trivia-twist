import React from "react";
import GreyCube from "../../assets/GreyCube.svg";

export const GreyCubeComponent = () => {
  return (
    <div className="greyCubeContainer">
      <img src={GreyCube} alt="GreyCube" />
    </div>
  );
};

export default GreyCubeComponent;