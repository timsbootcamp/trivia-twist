import React, { useState } from 'react';
import './index.css'; 


const EasyCard = ({ SelectedDifficulty }) => {
  const handleSelectDifficulty = () => {
    SelectedDifficulty('Easy'); 
  };

  return (
    <button className='Easy mt-5 mb-5 col-sm-12 col-md-4' onClick={handleSelectDifficulty}>
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={399}
    height={455}
    viewBox="0 0 120 136.5"

  >
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
        <path d="M16.879 69H21v4h-4.121Zm0 0" />
      </clipPath>
      <clipPath id="l">
        <path d="M100 69h4.309v4H100Zm0 0" />
      </clipPath>
      <clipPath id="m">
        <path d="M20 55h83v25.914H20Zm0 0" />
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
    <path d="M17.297 70.785a1.37 1.37 0 0 1 1.371-1.367 1.37 1.37 0 0 1 1.375 1.367c0 .758-.613 1.371-1.375 1.371a1.37 1.37 0 0 1-1.371-1.37" />
    <g clipPath="url(#k)">
      <path d="M18.668 69.766c-.563 0-1.023.457-1.023 1.02a1.024 1.024 0 0 0 2.046 0c0-.563-.457-1.02-1.023-1.02Zm0 2.742c-.95 0-1.723-.774-1.723-1.723a1.725 1.725 0 0 1 3.45 0c0 .95-.774 1.723-1.727 1.723" />
    </g>
    <path d="M101.145 70.785a1.37 1.37 0 0 1 1.37-1.367 1.37 1.37 0 0 1 1.376 1.367c0 .758-.614 1.371-1.375 1.371a1.37 1.37 0 0 1-1.371-1.37" />
    <g clipPath="url(#l)">
      <path d="M102.516 69.766c-.563 0-1.024.457-1.024 1.02a1.024 1.024 0 0 0 2.051 0c0-.563-.461-1.02-1.027-1.02Zm0 2.742c-.95 0-1.723-.774-1.723-1.723a1.725 1.725 0 0 1 3.45 0c0 .95-.774 1.723-1.727 1.723" />
    </g>
    <g clipPath="url(#m)">
      <path d="M30.516 80.918c-2 0-3.559-.164-4.63-.488-1.066-.32-1.714-.82-1.933-1.485-.344-1.035.348-2.328 2.176-4.062 1.469-1.399 3.394-2.813 5.094-4.067 1.46-1.074 2.84-2.09 3.16-2.57.855-1.277.262-3.297-.824-4.383-.836-.836-1.621-1.195-2.399-1.097-1.703.207-3.117 2.562-4.258 4.453-.55.914-1.027 1.707-1.472 2.152-1.043 1.04-2.149 1.524-3.473 1.524-.262 0-1.117.082-1.324.109-.035.008-.067.016-.102.016l-.043-.004a.352.352 0 0 1-.32-.348c0-.07.027-.313.355-.356.032-.003.079-.011.137-.015l.43-.043c.238-.024.668-.059.867-.059 1.145 0 2.063-.406 2.977-1.32.386-.383.863-1.176 1.367-2.016 1.219-2.023 2.73-4.539 4.773-4.789.992-.12 1.992.317 2.98 1.297 1.278 1.278 1.993 3.653.91 5.27-.386.578-1.683 1.535-3.323 2.742-1.684 1.238-3.59 2.644-5.028 4.012-1.566 1.484-2.234 2.605-1.996 3.34.227.68 1.43 1.488 5.899 1.488 1.402 0 2.547-.172 3.609-.54 1.625-.558 2.742-2.023 3.418-4.468.61-2.207.77-4.824.93-7.356.144-2.312.28-4.496.77-5.96.706-2.118 2.448-3.364 4.132-4.57.113-.079.223-.16.336-.243 1.547-1.113 5.332-2.324 7.977-1.766 1.12.239 1.93.762 2.394 1.567 1.82 3.11-.148 6.535-2.055 9.844-2.246 3.902-4.363 7.585-.566 10.664 1.52 1.23 3.926 1.562 6.434.882 2.542-.687 4.546-2.25 5.234-4.078.734-1.949-.406-3.386-1.613-4.902-1.633-2.059-3.485-4.387-.309-8.129l.078-.094c.903-1.066.922-1.086 1.649-1.605.207-.145.46-.324.812-.586.79-.582 1.766-1.227 3.027-1.602 1.524-.449 3.59-.5 5.145-.125 2.488.598 4.094 1.746 4.77 3.418.5 1.23.484 2.739-.047 4.48-.422 1.391-1.168 2.927-2.215 4.567-.063.098-.176.23-.39.48-.509.594-1.86 2.176-1.7 2.887.02.082.066.188.262.274 2.457 1.09 5.23-.074 6.66-.867 2.199-1.211 4.133-3.094 5.043-4.91.304-.61-.149-1.641-.586-2.637-.543-1.235-1.106-2.512-.445-3.434.62-.867 2.203-1.164 4.972-.926 1.899.16 3.067.715 3.574 1.7.934 1.804-.691 4.539-2.257 7.18-1.196 2.011-2.43 4.085-2.086 5.167.093.285.3.496.636.645 1.434.64 3.16.46 5.286-.555 3.078-1.469 3.187-2.875 3.332-4.82.085-1.133.183-2.414.91-3.867a2.402 2.402 0 0 1 2.011-1.32c.825-.044 1.555.335 2.012 1.038.606.946.352 2.09.164 2.926-.066.293-.164.73-.12.86a.351.351 0 0 1-.36.602c-.504-.278-.36-.927-.203-1.614.168-.754.379-1.696-.07-2.395-.317-.488-.821-.75-1.383-.719a1.695 1.695 0 0 0-1.422.934c-.668 1.332-.754 2.488-.84 3.606-.074.996-.145 1.937-.637 2.843-.543 1-1.523 1.813-3.09 2.559-2.324 1.105-4.246 1.289-5.879.558-.52-.23-.863-.593-1.015-1.07-.438-1.379.82-3.492 2.148-5.734 1.406-2.363 2.996-5.043 2.242-6.504-.382-.742-1.398-1.188-3.011-1.324-2.434-.207-3.895.008-4.344.636-.43.598.05 1.692.515 2.746.504 1.145 1.024 2.329.57 3.231-.968 1.937-3.01 3.934-5.327 5.21-2.668 1.477-5.258 1.794-7.285.895-.45-.199-.606-.523-.66-.761-.22-.969.84-2.313 1.85-3.492.145-.168.294-.344.329-.403 1.566-2.453 3.219-5.902 2.203-8.41-.586-1.45-2.027-2.457-4.285-3.004-1.418-.34-3.387-.289-4.777.121-1.157.34-2.07.946-2.809 1.492-.36.266-.613.45-.82.594-.66.469-.66.469-1.524 1.488l-.078.09c-1.285 1.516-1.762 2.817-1.504 4.094.23 1.14 1.008 2.117 1.828 3.148 1.274 1.606 2.594 3.266 1.723 5.586-.766 2.036-2.953 3.762-5.71 4.508-2.727.739-5.368.356-7.063-1.015-1.914-1.555-2.649-3.399-2.239-5.641.352-1.934 1.516-3.957 2.641-5.914.918-1.594 1.867-3.242 2.352-4.8.527-1.72.437-3.099-.293-4.345-.364-.625-1.016-1.039-1.934-1.234-2.422-.512-6.012.637-7.418 1.648l-.344.247c-1.664 1.19-3.238 2.316-3.875 4.222-.457 1.375-.593 3.516-.734 5.781-.152 2.446-.324 5.22-.953 7.5-.742 2.684-2.004 4.301-3.864 4.942-1.14.394-2.359.578-3.84.578" />
    </g>
    <path d="M46.057 117.498h5.207v-1.75h-3.086v-1.145h2.683v-1.719h-2.683v-1.082h2.969v-1.73h-5.09ZM51.796 117.498h2.27l.402-1.051h2.535l.403 1.05h2.28l-2.886-7.425H54.68Zm3.117-2.622.829-2.3.828 2.3ZM63.188 117.658c1.844 0 2.938-.871 2.938-2.336 0-1.23-.797-1.95-2.602-2.356-.953-.21-1.305-.445-1.305-.824 0-.363.32-.586.82-.586.594 0 .934.309.934.871h2.016c0-1.527-1.168-2.515-2.992-2.515-1.75 0-2.832.87-2.832 2.27 0 1.253.816 2.026 2.492 2.347.902.18 1.336.453 1.336.879 0 .37-.317.582-.84.582-.613 0-.973-.328-.973-.899h-2.07c0 1.602 1.144 2.567 3.078 2.567ZM69.274 117.498h2.133v-2.59l2.703-4.836h-2.426l-1.347 2.664-.575-1.125-.785-1.54h-2.406l2.703 4.848Zm0 0" />
  </svg>

    </button>
  );
};

export default EasyCard;


