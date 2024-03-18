import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import GreyCube from "../../../assets/GreyCube.svg";
import "./GreyCube.css";
const GreyCubeComponent = ({ position }) => {
  useEffect(() => {
    if (position) {
      anime({
        targets: `.greyCubeContainer`,
        translateX: 50,
        duration: 1000,
        loop: true,
        easing: "easeInOutSine",
        direction: "alternate",
      });
    }
  }, [position]);

  return (
    <div className="greyCubeContainer">
      <img src="/src/assets/GreyCube.svg" alt="GreyCube" className="greyCube" />
    </div>
  );
};

export default GreyCubeComponent