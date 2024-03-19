import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import PurpleCube from "/assets/PurpleCube.svg";
import "./PurpleCube.css";

const PurpleCubeComponent = () => {
  useEffect(() => {
    anime({
      targets: ".purpleCubeContainer",
      translateY: [
        { value: -10, duration: 300, easing: "easeOutSine" },
        { value: 0, duration: 300, easing: "easeInSine" }
      ],
      loop: true
    });
  }, []);

  return (
    <div className="purpleCubeContainer">
      <img src="/src/assets/PurpleCube.svg" alt="Purple Cube" className="purpleCube" />
    </div>
  );
};

export default PurpleCubeComponent