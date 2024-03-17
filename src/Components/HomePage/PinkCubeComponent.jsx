import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import PinkCube from '../../assets/PinkCube.svg';

const PinkCubeComponent = () => {
  useEffect(() => {
    anime({
      targets: ".pinkCubeContainer",
      rotate: "1turn",
      duration: 3000,
      loop: true,
      easing: "linear",
    });
  }, []);

  return (
    <div className="pinkCubeContainer">
      <img src={PinkCube} alt="Pink Cube" />
    </div>
 );
 
};

export default PinkCubeComponent