import React, { useState } from 'react';
import './index.css'; 

// Define a functional component named MediumCard that takes a prop SelectedDifficulty
const MediumCard = ({ SelectedDifficulty }) => {
    // Define a function to handle the selection of difficulty
  const handleSelectDifficulty = () => {
    // Call the SelectedDifficulty function passed as prop with the argument 'Medium'
    SelectedDifficulty('Medium'); 
  };

  // Return a button element with a click event listener to trigger handleSelectDifficulty
  return (
    <button className='difficultybtn mt-5 mb-5 col-sm-12 col-md-4' onClick={handleSelectDifficulty}>
<svg className='Medium'
    xmlns="http://www.w3.org/2000/svg"
    width={399}
    height={455}
    viewBox="0 0 120 136.5"
  
  >
    {/* Definitions for gradients, clip paths, masks, and filters */}
    <defs>
      <clipPath id="d">
        <path d="M.75.77h112.492v103.59H.75Zm0 0" />
      </clipPath>
      <clipPath id="e">
        <path d="M15.695.77h82.746c8.254 0 14.946 6.69 14.946 14.945v73.7c0 8.253-6.692 14.944-14.946 14.944H15.695C7.441 104.36.75 97.668.75 89.414v-73.7C.75 7.462 7.441.77 15.695.77Zm0 0" />
      </clipPath>
      <clipPath id="c">
        <path d="M0 0h114v105H0z" />
      </clipPath>
      <clipPath id="g">
        <path d="M4.195.445H115v133.09H4.195Zm0 0" />
      </clipPath>
      <clipPath id="h">
        <path d="M6.23 133.234h106.75a1.9 1.9 0 0 0 1.918-1.914V2.48c0-1.07-.847-1.917-1.918-1.917H6.23c-1.07 0-1.918.847-1.918 1.917v128.84a1.9 1.9 0 0 0 1.918 1.914Zm0 0" />
      </clipPath>
      <clipPath id="i">
        <path d="M3.75 0h113.57v135.75H3.75Zm0 0" />
      </clipPath>
      <clipPath id="j">
        <path d="M115.402 1.973A2.472 2.472 0 0 0 112.98 0H6.23C4.88 0 3.75 1.129 3.75 2.48v128.84c0 1.184.79 2.14 1.918 2.422a2.472 2.472 0 0 0 2.422 1.973h106.75a2.502 2.502 0 0 0 2.48-2.48V4.397c0-1.183-.789-2.144-1.918-2.425ZM4.312 131.32V2.48c0-1.07.848-1.917 1.918-1.917h106.75c1.07 0 1.918.847 1.918 1.917v128.84a1.9 1.9 0 0 1-1.918 1.914H6.23a1.9 1.9 0 0 1-1.918-1.914Zm0 0" />
      </clipPath>
      <clipPath id="k">
        <path d="M17.02 65H21v4h-3.98Zm0 0" />
      </clipPath>
      <clipPath id="l">
        <path d="M98 65h4.207v4H98Zm0 0" />
      </clipPath>
      <clipPath id="m">
        <path d="M18 57h83v22.602H18Zm0 0" />
      </clipPath>
      <linearGradient
        id="f"
        x1={0}
        x2={278}
        y1={0}
        y2={0}
        gradientTransform="matrix(.40465 0 0 .40465 .75 .77)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1EDBCB" />
        <stop offset={0.008} stopColor="#1EDBCB" />
        <stop offset={0.016} stopColor="#1EDACA" />
        <stop offset={0.023} stopColor="#1ED9CA" />
        <stop offset={0.031} stopColor="#1DD8CA" />
        <stop offset={0.039} stopColor="#1DD7C9" />
        <stop offset={0.047} stopColor="#1DD7C9" />
        <stop offset={0.055} stopColor="#1DD6C9" />
        <stop offset={0.063} stopColor="#1CD5C8" />
        <stop offset={0.07} stopColor="#1CD4C8" />
        <stop offset={0.078} stopColor="#1CD3C8" />
        <stop offset={0.086} stopColor="#1CD3C7" />
        <stop offset={0.094} stopColor="#1BD2C7" />
        <stop offset={0.102} stopColor="#1BD1C7" />
        <stop offset={0.109} stopColor="#1BD0C6" />
        <stop offset={0.117} stopColor="#1BD0C6" />
        <stop offset={0.125} stopColor="#1ACFC6" />
        <stop offset={0.133} stopColor="#1ACEC5" />
        <stop offset={0.141} stopColor="#1ACDC5" />
        <stop offset={0.148} stopColor="#1ACCC4" />
        <stop offset={0.156} stopColor="#1ACCC4" />
        <stop offset={0.164} stopColor="#19CBC4" />
        <stop offset={0.172} stopColor="#19CAC3" />
        <stop offset={0.18} stopColor="#19C9C3" />
        <stop offset={0.188} stopColor="#19C8C3" />
        <stop offset={0.195} stopColor="#18C8C2" />
        <stop offset={0.203} stopColor="#18C7C2" />
        <stop offset={0.211} stopColor="#18C6C2" />
        <stop offset={0.219} stopColor="#18C5C1" />
        <stop offset={0.227} stopColor="#17C4C1" />
        <stop offset={0.234} stopColor="#17C4C1" />
        <stop offset={0.242} stopColor="#17C3C0" />
        <stop offset={0.25} stopColor="#17C2C0" />
        <stop offset={0.258} stopColor="#16C1C0" />
        <stop offset={0.266} stopColor="#16C0BF" />
        <stop offset={0.273} stopColor="#16C0BF" />
        <stop offset={0.281} stopColor="#16BFBF" />
        <stop offset={0.289} stopColor="#16BEBE" />
        <stop offset={0.297} stopColor="#15BDBE" />
        <stop offset={0.305} stopColor="#15BCBD" />
        <stop offset={0.313} stopColor="#15BCBD" />
        <stop offset={0.32} stopColor="#15BBBD" />
        <stop offset={0.328} stopColor="#14BABC" />
        <stop offset={0.336} stopColor="#14B9BC" />
        <stop offset={0.344} stopColor="#14B8BC" />
        <stop offset={0.352} stopColor="#14B8BB" />
        <stop offset={0.359} stopColor="#13B7BB" />
        <stop offset={0.367} stopColor="#13B6BB" />
        <stop offset={0.375} stopColor="#13B5BA" />
        <stop offset={0.383} stopColor="#13B4BA" />
        <stop offset={0.391} stopColor="#12B4BA" />
        <stop offset={0.398} stopColor="#12B3B9" />
        <stop offset={0.406} stopColor="#12B2B9" />
        <stop offset={0.414} stopColor="#12B1B9" />
        <stop offset={0.422} stopColor="#12B0B8" />
        <stop offset={0.43} stopColor="#11B0B8" />
        <stop offset={0.438} stopColor="#11AFB8" />
        <stop offset={0.445} stopColor="#11AEB7" />
        <stop offset={0.453} stopColor="#11ADB7" />
        <stop offset={0.461} stopColor="#10ACB6" />
        <stop offset={0.469} stopColor="#10ACB6" />
        <stop offset={0.477} stopColor="#10ABB6" />
        <stop offset={0.484} stopColor="#10AAB5" />
        <stop offset={0.492} stopColor="#0FA9B5" />
        <stop offset={0.5} stopColor="#0FA9B5" />
        <stop offset={0.508} stopColor="#0FA8B4" />
        <stop offset={0.516} stopColor="#0FA7B4" />
        <stop offset={0.523} stopColor="#0EA6B4" />
        <stop offset={0.531} stopColor="#0EA5B3" />
        <stop offset={0.539} stopColor="#0EA5B3" />
        <stop offset={0.547} stopColor="#0EA4B3" />
        <stop offset={0.555} stopColor="#0EA3B2" />
        <stop offset={0.563} stopColor="#0DA2B2" />
        <stop offset={0.57} stopColor="#0DA1B2" />
        <stop offset={0.578} stopColor="#0DA1B1" />
        <stop offset={0.586} stopColor="#0DA0B1" />
        <stop offset={0.594} stopColor="#0C9FB1" />
        <stop offset={0.602} stopColor="#0C9EB0" />
        <stop offset={0.609} stopColor="#0C9DB0" />
        <stop offset={0.617} stopColor="#0C9DAF" />
        <stop offset={0.625} stopColor="#0B9CAF" />
        <stop offset={0.633} stopColor="#0B9BAF" />
        <stop offset={0.641} stopColor="#0B9AAE" />
        <stop offset={0.648} stopColor="#0B99AE" />
        <stop offset={0.656} stopColor="#0A99AE" />
        <stop offset={0.664} stopColor="#0A98AD" />
        <stop offset={0.672} stopColor="#0A97AD" />
        <stop offset={0.68} stopColor="#0A96AD" />
        <stop offset={0.688} stopColor="#0A95AC" />
        <stop offset={0.695} stopColor="#0995AC" />
        <stop offset={0.703} stopColor="#0994AC" />
        <stop offset={0.711} stopColor="#0993AB" />
        <stop offset={0.719} stopColor="#0992AB" />
        <stop offset={0.727} stopColor="#0891AB" />
        <stop offset={0.734} stopColor="#0891AA" />
        <stop offset={0.742} stopColor="#0890AA" />
        <stop offset={0.75} stopColor="#088FAA" />
        <stop offset={0.758} stopColor="#078EA9" />
        <stop offset={0.766} stopColor="#078DA9" />
        <stop offset={0.773} stopColor="#078DA8" />
        <stop offset={0.781} stopColor="#078CA8" />
        <stop offset={0.789} stopColor="#068BA8" />
        <stop offset={0.797} stopColor="#068AA7" />
        <stop offset={0.805} stopColor="#0689A7" />
        <stop offset={0.813} stopColor="#0689A7" />
        <stop offset={0.82} stopColor="#0688A6" />
        <stop offset={0.828} stopColor="#0587A6" />
        <stop offset={0.836} stopColor="#0586A6" />
        <stop offset={0.844} stopColor="#0585A5" />
        <stop offset={0.852} stopColor="#0585A5" />
        <stop offset={0.859} stopColor="#0484A5" />
        <stop offset={0.867} stopColor="#0483A4" />
        <stop offset={0.875} stopColor="#0482A4" />
        <stop offset={0.883} stopColor="#0482A4" />
        <stop offset={0.891} stopColor="#0381A3" />
        <stop offset={0.898} stopColor="#0380A3" />
        <stop offset={0.906} stopColor="#037FA3" />
        <stop offset={0.914} stopColor="#037EA2" />
        <stop offset={0.922} stopColor="#027EA2" />
        <stop offset={0.93} stopColor="#027DA1" />
        <stop offset={0.938} stopColor="#027CA1" />
        <stop offset={0.945} stopColor="#027BA1" />
        <stop offset={0.953} stopColor="#027AA0" />
        <stop offset={0.961} stopColor="#017AA0" />
        <stop offset={0.969} stopColor="#0179A0" />
        <stop offset={0.977} stopColor="#01789F" />
        <stop offset={0.984} stopColor="#01779F" />
        <stop offset={0.992} stopColor="#00769F" />
        <stop offset={1} stopColor="#00769E" />
      </linearGradient>
      <filter id="a" width="100%" height="100%" x="0%" y="0%">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
      </filter>
      <mask id="b">
        <g filter="url(#a)">
          <path fillOpacity={0.41} d="M-12-13.65h144v163.8H-12z" />
        </g>
      </mask>
    </defs>
    <g mask="url(#b)">
      <g clipPath="url(#c)" transform="translate(3)">
        <g clipPath="url(#d)">
          <g clipPath="url(#e)">
            <path fill="url(#f)" d="M.75.77v103.59h112.492V.77Zm0 0" />
          </g>
        </g>
      </g>
    </g>
    <g clipPath="url(#g)">
      <g clipPath="url(#h)">
        <path fill="#d0ff96" d="M3.75 0h113.57v135.75H3.75Zm0 0" />
      </g>
    </g>
    <g clipPath="url(#i)">
      <g clipPath="url(#j)">
        <path fill="#231f20" d="M3.75 0h113.57v135.75H3.75Zm0 0" />
      </g>
    </g>
    <g clipPath="url(#k)">
      <path d="M17.363 66.895c0-.75.598-1.364 1.34-1.364.742 0 1.34.614 1.34 1.364 0 .753-.598 1.367-1.34 1.367-.742 0-1.34-.614-1.34-1.367" />
      <path d="M18.703 65.883c-.55 0-1 .453-1 1.012 0 .562.45 1.02 1 1.02s1-.458 1-1.02c0-.56-.45-1.012-1-1.012Zm0 2.726c-.93 0-1.683-.77-1.683-1.714 0-.942.753-1.711 1.683-1.711s1.684.77 1.684 1.71c0 .946-.754 1.715-1.684 1.715" />
    </g>
    <path d="M99.184 66.895c0-.75.601-1.364 1.34-1.364.742 0 1.343.614 1.343 1.364 0 .753-.601 1.367-1.344 1.367-.738 0-1.34-.614-1.34-1.367" />
    <g clipPath="url(#l)">
      <path d="M100.523 65.883c-.55 0-.996.453-.996 1.012 0 .562.446 1.02.996 1.02.551 0 1-.458 1-1.02 0-.56-.449-1.012-1-1.012Zm0 2.726c-.925 0-1.683-.77-1.683-1.714 0-.942.758-1.711 1.683-1.711.93 0 1.684.77 1.684 1.71 0 .946-.754 1.715-1.684 1.715" />
    </g>
    <g clipPath="url(#m)">
      <path d="M54.434 59.836h-.051c-.692.02-1.168.445-1.426 1.266-.387 1.246.234 2.605 1.895 4.16.804.754 1.793 1.496 2.851 2.226 1.164-1.687.848-3.355.492-4.304-.683-1.832-2.394-3.348-3.761-3.348Zm14.593 4.625a5.362 5.362 0 0 0-.183 1.45c.023 1.03.41 1.905 1.148 2.593.934.871 2.426 1.406 4.086 1.473 1.57.062 3.035-.309 3.922-.989.883-.675 1.066-1.55.55-2.597-1.093-2.23-4.042-2.399-6.167-2.329-1.203.036-2.32.176-3.356.399Zm-22.66-.434c-.695 0-1.312.246-1.515.864-.79 2.406-.426 4.218 1.054 5.242.352.242.766.441 1.23.59.852-1.184 1.52-2.703 2.016-4.578.23-.864-.699-1.633-1.738-1.954a3.727 3.727 0 0 0-1.047-.164Zm14 6.035c-.472.711-.84 1.438-1.113 2.149-.918 2.41-.75 4.727.434 5.894.968.957 2.546 1.036 4.445.223 1.707-.734 2.605-1.52 2.672-2.344.136-1.714-3.203-3.851-6.438-5.921Zm1.38 9.52c-1.013 0-1.88-.328-2.536-.977-1.383-1.363-1.613-3.972-.594-6.644a11.52 11.52 0 0 1 1.172-2.27 75.367 75.367 0 0 1-1.941-1.265c-.239.273-.504.539-.801.789-1.39 1.187-3.535 2.094-5.738 2.418-1.43.21-2.778.164-3.918-.117-.801.996-1.746 1.757-2.825 2.27-2.242 1.062-5.082 1.085-8.671.066-3.083-.88-6.29-2.395-9.118-3.73-3.21-1.52-5.984-2.833-7.765-2.876a.346.346 0 0 1-.332-.36.344.344 0 0 1 .347-.34c1.922.052 4.758 1.391 8.04 2.942 2.804 1.328 5.984 2.832 9.011 3.692 3.43.972 6.11.965 8.2-.024a7.319 7.319 0 0 0 2.406-1.855c-.43-.16-.82-.36-1.164-.594-.833-.578-1.383-1.363-1.625-2.336-.258-1.047-.157-2.289.308-3.7.445-1.366 2.078-1.55 3.41-1.144 1.309.403 2.559 1.45 2.203 2.797-.484 1.824-1.148 3.364-1.976 4.582.988.203 2.144.219 3.37.04 2.083-.31 4.099-1.157 5.4-2.262.25-.215.472-.434.663-.649-1.066-.738-2.062-1.492-2.882-2.262-1.88-1.757-2.559-3.351-2.086-4.878.343-1.106 1.074-1.727 2.054-1.754 1.672-.051 3.676 1.652 4.477 3.797.39 1.042.473 2.128.238 3.14a5.293 5.293 0 0 1-.804 1.797c.628.422 1.273.84 1.917 1.25 1.704-2.285 4.434-4.332 8.297-5.254.254-.812.66-1.672 1.215-2.574.856-1.39 2.531-3.133 4.43-3.453 8.23-1.395 10.933 2.402 13.32 5.754 1.246 1.757 2.426 3.414 4.29 4.168 2.1.847 4.85.468 8.652-1.188a.338.338 0 0 1 .449.18.35.35 0 0 1-.18.457c-3.976 1.738-6.89 2.117-9.176 1.195-2.046-.828-3.28-2.562-4.59-4.402-2.378-3.344-4.84-6.801-12.652-5.477-1.57.262-3.12 1.766-3.965 3.137a11.57 11.57 0 0 0-1.011 2.035c.964-.187 1.996-.3 3.097-.336 1.547-.05 2.742.063 3.762.356 1.453.422 2.477 1.21 3.04 2.355.343.7.437 1.367.28 1.984-.144.567-.492 1.067-1.035 1.481-1.004.773-2.637 1.195-4.36 1.129-1.82-.07-3.468-.676-4.523-1.656-.879-.82-1.34-1.86-1.367-3.09a5.716 5.716 0 0 1 .125-1.29c-3.476.915-5.95 2.782-7.515 4.864 1.757 1.121 3.414 2.184 4.656 3.23 1.488 1.258 2.14 2.31 2.062 3.313-.09 1.117-1.101 2.074-3.09 2.926-.957.41-1.851.613-2.652.613" />
    </g>
    <path d="M37.24 117.498h2.12v-3.766l1.434 2.004h1.386l1.422-1.992v3.754h2.125v-7.426h-1.742l-2.504 3.531-2.492-3.531h-1.75ZM47.294 117.498h5.207v-1.75h-3.086v-1.145H52.1v-1.719h-2.684v-1.082h2.969v-1.73h-5.09ZM53.764 117.498h3.152c2.395 0 3.989-1.473 3.989-3.711 0-2.23-1.594-3.715-3.989-3.715h-3.152Zm2.144-1.922v-3.582h.942c1.137 0 1.867.699 1.867 1.793 0 1.09-.73 1.789-1.867 1.789ZM62.048 117.498h2.144v-7.426h-2.144ZM68.951 117.658c2.008 0 3.246-1.223 3.246-3.215v-4.371h-2.129v4.234c0 .879-.375 1.344-1.117 1.344s-1.113-.465-1.113-1.344v-4.234h-2.14v4.37c0 1.993 1.25 3.216 3.253 3.216ZM73.715 117.498h2.12v-3.766l1.434 2.004h1.387l1.422-1.992v3.754h2.125v-7.426H80.46l-2.504 3.531-2.492-3.531h-1.75Zm0 0" />
  </svg>

    </button>
  );
};

export default MediumCard;
