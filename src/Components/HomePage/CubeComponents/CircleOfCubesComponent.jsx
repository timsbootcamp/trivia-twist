import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const CircleOfCubesComponent = () => {
  useEffect(() => {
 {
      anime({
        targets: `.CircleOfCubes`,
        translateX: 50,
        duration: 1000,
        loop: true,
        easing: "easeInOutSine",
        direction: "alternate",
      });
    }
  }, 
  );

  return (
    <div>
      <img src="/assets/Main-Page-Elements/seperate-cubes/CircleOfCubes.png" alt="CircleOfCubes" className="CircleOfCubes" />
    </div>
  );
};

export default CircleOfCubesComponent