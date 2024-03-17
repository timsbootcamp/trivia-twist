import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import GreyCube from "../../assets/GreyCube.svg";
import "./GreyCubeComponent.css";
const GreyCubeComponent = ({ position }) => {
  useEffect(() => {
    if (position) {
      anime({
        targets: `.greyCubeContainer`,
        translateX: [-50, 50],
        translateY: [0, 50],
        duration: 2000,
        loop: true,
        easing: "easeInOutSine",
        direction: "alternate",
      });
    }
  }, [position]);

  return (
    <div className="greyCubeContainer">
      <img src={GreyCube} alt="GreyCube" className="greyCube" />
    </div>
  );
};

export default GreyCubeComponent;