import React , { useEffect }from "react";
import anime from "animejs/lib/anime.es.js";
import GreyCube from "../../assets/GreyCube.svg";

export const GreyCubeComponent = () => {
 useEffect(() => {
  anime({
    targets: ".greyCube",
    translateY: [-50, 50],
    duration: 2000, 
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });
}, []);

  return (
    <div className="greyCubeContainer">
      <img src={GreyCube} alt="GreyCube" />
    </div>
  );
};

export default GreyCubeComponent;