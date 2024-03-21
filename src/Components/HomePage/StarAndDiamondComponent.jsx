import React, { useEffect } from 'react';
import anime from "animejs/lib/anime.es.js";
import StarAndDiamond from '../../assets/StarAndDiamond.svg';


export const StarAndDiamondComponent = () => {
  useEffect(() => {
    anime({
      targets: ".starAndDiamondContainer",
      scale: [1, 1.1, 1],
      duration: 3000,
      loop: true,
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <div className="starAndDiamondContainer">
    <img src="/src/assets/StarAndDiamond.svg" alt="StarAndDiamond" />
  </div>
  );
};

export default StarAndDiamondComponent