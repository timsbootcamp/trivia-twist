import React, { useEffect } from 'react';
import anime from "animejs/lib/anime.es.js";
import TwoDimShapes from '../../assets/TwoDimShapes.svg';

export const TwoDimComponents = () => {
  useEffect(() => {
    anime({
      targets: ".twoDimContainer",
      rotate: '1turn',
      duration: 3000,
      loop: true,
      easing: 'linear'
    });
  }, []);

  return (
    <div>
      <img src={TwoDimShapes} alt="TwoDimShapes" />
    </div>
  );
};

export default TwoDimComponents