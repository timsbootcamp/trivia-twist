import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import PinkCube from '/assets/PinkCube.svg';
import "./PinkCube.css";

const PinkCubeComponent = () => {
  useEffect(() => {
    anime({
      targets: ".pinkCubeContainer",
      rotateY: 180,
      duration: 1000,
      loop: true,
      easing: "linear",
    });
  }, []);

  return (
    <div className="pinkCubeContainer">
      <img src="/src/assets/PinkCube.svg" alt="Pink Cube" className="pinkCube" />
    </div>
  );
};

export default PinkCubeComponent