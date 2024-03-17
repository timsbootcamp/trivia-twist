import React, { useState } from 'react';
// import TriviaSelection,{SelectedDifficulty,handleSelectDifficulty} from '../../Components/TriviaSelection/TriviaSelection'
// import onSelectDifficulty from '../../Components/TriviaSelection/TriviaSelection'
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
        <path d="M16.61 62H20v3h-3.39Zm0 0" />
      </clipPath>
      <clipPath id="l">
        <path d="M16.61 61H21v5h-4.39Zm0 0" />
      </clipPath>
      <clipPath id="m">
        <path d="M99 61h4.293v5H99Zm0 0" />
      </clipPath>
      <clipPath id="n">
        <path d="M18 47.676h84v29.89H18Zm0 0" />
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
      <path d="M16.96 63.465c0-.758.61-1.375 1.364-1.375a1.37 1.37 0 0 1 1.363 1.375 1.37 1.37 0 0 1-1.363 1.375 1.37 1.37 0 0 1-1.363-1.375" />
    </g>
    <g clipPath="url(#l)">
      <path d="M18.324 62.441c-.558 0-1.015.461-1.015 1.024 0 .562.457 1.02 1.015 1.02a1.02 1.02 0 0 0 1.016-1.02c0-.563-.457-1.024-1.016-1.024Zm0 2.75a1.722 1.722 0 0 1-1.715-1.726c0-.953.77-1.727 1.715-1.727.946 0 1.715.774 1.715 1.727 0 .953-.77 1.726-1.715 1.726" />
    </g>
    <path d="M100.215 63.465c0-.758.61-1.375 1.363-1.375a1.37 1.37 0 0 1 1.363 1.375 1.37 1.37 0 0 1-1.363 1.375 1.37 1.37 0 0 1-1.363-1.375" />
    <g clipPath="url(#m)">
      <path d="M101.578 62.441c-.558 0-1.016.461-1.016 1.024 0 .562.458 1.02 1.016 1.02a1.02 1.02 0 0 0 1.016-1.02c0-.563-.457-1.024-1.016-1.024Zm0 2.75a1.722 1.722 0 0 1-1.715-1.726c0-.953.77-1.727 1.715-1.727.945 0 1.715.774 1.715 1.727 0 .953-.77 1.726-1.715 1.726" />
    </g>
    <g clipPath="url(#n)">
      <path d="m60.332 51.523.484.024.246-.035c.278-.043.56-.078.84-.11a9.432 9.432 0 0 0-1.02-.48 8.804 8.804 0 0 0-.55.601Zm-6.16-.921a9.23 9.23 0 0 1 1.902 1.086c.367-.047.742-.086 1.121-.118a25.357 25.357 0 0 1 2.254-.074c.211-.285.446-.559.7-.828-1.997-.602-4.16-.59-5.977-.066Zm12.2 1.71c.265 0 .526.004.788.008a17.459 17.459 0 0 0-2.793-.304c.45.09.895.191 1.332.3.227-.004.45-.004.672-.004Zm-9.552-.003c.114.105.223.21.328.324.332-.153.68-.29 1.036-.418-.313.015-.625.031-.934.058l-.43.036Zm13.426.175c.149.016.297.028.445.043.336.035.668.075.996.114-.378-1.2-1.37-2.305-2.949-3.27-2.675-1.637-5.164-.555-6.781.637a10.1 10.1 0 0 0-.5.394c.59.254 1.133.563 1.617.918 2.418-.097 4.867.274 6.946 1.075.074.03.152.058.226.09Zm-15.504.266c.52 0 1.043.012 1.574.035a6.103 6.103 0 0 0-.421-.363c-.622.086-1.22.2-1.797.332.215-.004.43-.004.644-.004Zm4.871-.227c-.074.125-.144.25-.21.38 1-.18 2.054-.321 3.152-.419l.242-.023c-.645-.09-1.293-.16-1.942-.203-.414.07-.828.16-1.242.265Zm-1.297.403c.086.008.176.02.266.027l.07-.144-.336.117Zm-5.152-1.961c-.758.328-1.422.765-1.941 1.293a4.431 4.431 0 0 0-.606.762c.192-.024.383-.051.578-.07a18.49 18.49 0 0 1 3.875-1.11 8.95 8.95 0 0 0-1.906-.875Zm14.926 2.082c.562.203 1.117.426 1.652.664l.375.176a10.727 10.727 0 0 1 .89-.278 13.342 13.342 0 0 0-.952-.441 40.483 40.483 0 0 0-1.965-.121Zm-9.957.828c.023.031.043.066.066.098.012-.04.024-.082.04-.121l-.106.023Zm3.152-.547c1.082.188 2.153.418 3.195.688a5.517 5.517 0 0 0-.582-.93 43.494 43.494 0 0 0-2.613.242Zm9.738 1.012c.247.129.485.262.72.398.05-.199.081-.398.1-.593-.277.054-.55.12-.82.195Zm-5.68-.086c.637.18 1.262.375 1.872.586.203.07.402.144.601.215.438-.301.907-.57 1.403-.805a23.922 23.922 0 0 0-3.61-1.23c-.289.003-.582.015-.87.027.25.379.452.781.605 1.207Zm3.282 1.113c.832.332 1.621.692 2.355 1.07.215-.332.395-.671.536-1.011a19.918 19.918 0 0 0-1.434-.778c-.508.2-.996.438-1.457.72Zm3.738-.246a16.75 16.75 0 0 1 2.117 1.594c-.496-.836-1.171-1.559-1.984-2.172a3.897 3.897 0 0 1-.101.46c-.008.04-.02.079-.032.118Zm-22.27-.863c-.19.793-.171 1.668.067 2.605 1.055-1.058 2.598-1.972 4.516-2.695.047-.04.094-.082.14-.117.258-.211.532-.41.82-.598a30.834 30.834 0 0 0-4.195.156c-.468.2-.918.414-1.347.649Zm15.485.804a6.804 6.804 0 0 1 .125 2.145 7.968 7.968 0 0 1 1.445-1.633 35.2 35.2 0 0 0-1.57-.511Zm-16.176-4.667c-2.238 0-4.558.53-6.554 1.511-2.047 1-3.524 2.36-4.153 3.828a4 4 0 0 0-.308 2.13c1.207-.532 2.402-.786 3.398-.747.77-.945 1.8-1.754 3.074-2.41 1.371-.703 3.028-1.223 4.883-1.547a5.192 5.192 0 0 1 .985-1.398c.402-.41.878-.77 1.418-1.078-.95-.211-1.848-.282-2.579-.29h-.164Zm12.543 8.308c.883 0 1.735.063 2.532.192.554-1.063.699-2.266.433-3.602a5.479 5.479 0 0 0-.11-.453 40.193 40.193 0 0 0-5.76-1.133 7.403 7.403 0 0 0-.333 1.184c.098.199.188.402.27.609.457 1.137.714 2.246.773 3.328.746-.086 1.48-.125 2.195-.125Zm-3.367-2.262c.012.801.14 1.633.39 2.489a3.58 3.58 0 0 1 .079-.012 9.189 9.189 0 0 0-.469-2.477Zm13.024.329c.699.39 1.347.8 1.925 1.222a12.462 12.462 0 0 1 1.868 1.653 6.58 6.58 0 0 0-.2-1.211c-.843-.965-1.875-1.848-3.078-2.633a7.05 7.05 0 0 1-.515.969Zm-6.094 2.332c.613.148 1.183.34 1.703.574.066.031.137.062.2.094 1.28-.813 2.374-1.75 3.155-2.75a27.568 27.568 0 0 0-2.648-1.165 7.348 7.348 0 0 0-2.41 3.247ZM42.609 57.23c.11.028.215.063.313.098.633.234 1.594.86 1.5 2.469.308-.934.738-1.805 1.285-2.602.77-1.12 1.777-2.105 2.992-2.922.156-.105.313-.207.477-.304-1.465.308-2.813.758-3.996 1.367-1.047.535-1.903 1.168-2.57 1.894Zm7.79.407c.425 1.187 1.046 2.093 1.765 2.785a6.784 6.784 0 0 1-.05-.852c0-1.527.46-2.93 1.359-4.129-1.188.579-2.16 1.243-2.88 1.98-.066.071-.132.142-.195.216ZM76.093 60.5c.195.016.386.04.582.07-.176-.332-.371-.66-.586-.976.02.3.02.605.004.906Zm-21.031-5.734c-1.356 1.175-2.254 2.761-2.254 4.804 0 .473.054.922.152 1.344 1.41-.832 3.254-1.492 5.309-1.871-.407-1.426-.504-2.79-.301-4.063a8.307 8.307 0 0 0-.559-.933 24.16 24.16 0 0 0-2.347.719Zm10.214 5.007a7.433 7.433 0 0 0-.257 1.266 17.23 17.23 0 0 0 1.656-.828 9.632 9.632 0 0 0-1.399-.438Zm-26.73-1.21c.246.789.734 1.566 1.457 2.324.055.058.113.117.176.175a7.41 7.41 0 0 1 1.093-3.234c-.816.05-1.77.3-2.714.73Zm25.906 1.628c-.523.653-1.207 1.246-2.043 1.774.64-.172 1.27-.383 1.883-.621.023-.38.074-.762.16-1.153Zm-4.812.52c.238.504.507 1 .804 1.488.305-.133.598-.273.875-.418 1.211-.636 2.125-1.379 2.746-2.23-1.32-.18-2.796-.188-4.308-.016-.012.395-.051.79-.117 1.176Zm-6.145.703a8.07 8.07 0 0 0 1.973.797c.98-.168 2.015-.2 3.054-.098.168-.43.297-.87.387-1.32a16.114 16.114 0 0 1-.426-1.07c-1.93.343-3.664.941-4.988 1.691Zm5.746.79c.145.023.29.046.434.073-.098-.168-.196-.34-.285-.511-.02.054-.036.109-.055.164l-.094.273Zm-18.402-.63c.406.27.883.52 1.418.746.765-.535 1.219-1.195 1.387-2 .25-1.215-.07-2-.961-2.328a2.591 2.591 0 0 0-.582-.14c-.778 1.066-1.196 2.312-1.262 3.722Zm12.57.602c.086.18.18.351.281.52.157-.06.313-.118.477-.169a7.896 7.896 0 0 1-.758-.351Zm-10.383.441c.274.098.559.188.856.274.004-.504.054-1.02.144-1.54a3.892 3.892 0 0 1-1 1.266Zm-2.175-.215c.011.203.039.407.07.614.172-.067.336-.137.488-.211.035-.016.07-.032.106-.051a7.077 7.077 0 0 1-.664-.352Zm13.242.891c.093.129.191.25.293.371a25.344 25.344 0 0 0 2.804-.45 11.016 11.016 0 0 1-1.78-.284c-.458.09-.9.21-1.317.363Zm-9.512-.215c1.406.352 3.027.594 4.77.695a8.373 8.373 0 0 1-.477-1.039c-.414-1.105-.508-2.172-.281-3.172.168-.73.508-1.425 1.015-2.074l-.007-.027c-.325-1.04-.395-1.945-.309-2.723-2.434 1.586-4.031 3.852-4.555 6.621a8.677 8.677 0 0 0-.156 1.72Zm8.848.5a6.54 6.54 0 0 0-.285.149l-.083.046c.16-.011.325-.02.485-.035-.04-.05-.078-.105-.117-.16Zm-3.242.234h.082c.164-.488.445-.964.847-1.425a6.836 6.836 0 0 1 1.102-.985c-1.016-.8-1.793-1.843-2.32-3.117-.82 1.258-.946 2.668-.372 4.2.18.472.399.917.66 1.328Zm.828.016c.246 0 .496 0 .742-.004a6.535 6.535 0 0 1 1.05-.715c.079-.043.157-.086.235-.125a7.434 7.434 0 0 1-.473-.972c-.36.27-.672.55-.925.843-.282.317-.493.641-.63.973Zm10.722-.973c.77.29 1.504.657 2.168 1.098.223-.105.45-.203.68-.285a6.398 6.398 0 0 1-.293-1.574c-.84.316-1.7.57-2.555.761Zm5.262.36c1.04 0 1.965.265 2.742.773-.09-1.468-.86-2.613-2.3-3.41-.067.043-.137.082-.208.125a19.5 19.5 0 0 1-2.254 1.117 5.46 5.46 0 0 0 .27 1.637 6.717 6.717 0 0 1 1.66-.242H67Zm-29.094-4.332c-1.375.746-2.468 1.758-3.058 2.844-.41.757-.563 1.515-.457 2.265.765-.015 1.511-.05 2.222-.113 1.422-.117 2.64-.332 3.637-.633a7.367 7.367 0 0 1-.117-1.293v-.02a5.333 5.333 0 0 1-.637-.558c-.828-.871-1.324-1.71-1.59-2.492Zm32.54 5.672c.046.043.09.086.128.132l-.023-.207c-.188-1.8.793-3.113 2.754-3.687a7.84 7.84 0 0 1 1.886-.313c-.62-.753-1.367-1.398-2.074-1.917a18.013 18.013 0 0 0-1.922-1.211c-.195.253-.406.507-.64.761-.68.73-1.5 1.414-2.446 2.043.684.434 1.223.953 1.614 1.559.527.816.77 1.77.722 2.84Zm-19.637.093c.027.028.05.055.074.082.05-.066.105-.132.164-.199h-.227l-.011.117Zm26.742-3.886a7.04 7.04 0 0 1 4.582 3.996c1.304-.258 2.59-.512 3.847-.75.004-.02.012-.043.016-.063a7.918 7.918 0 0 0-.453-3.394c-1.313-2.969-4.625-4.727-7.434-5.723a28.315 28.315 0 0 0-3.132-.898 13.286 13.286 0 0 0-2.051.054c.242.18.469.371.683.57 1.047.962 1.774 2.09 2.164 3.356.016.055.032.11.051.168a11.522 11.522 0 0 1 1.727 2.684Zm-16.278 2.664c.36.488.75.96 1.16 1.414l.094-.07a7.55 7.55 0 0 1 .668-.438 10.308 10.308 0 0 0-1.922-.906Zm3.293 1.008c.114.09.227.187.336.285.102.086.2.18.293.27a6.386 6.386 0 0 1-.355-.665c-.09.035-.184.07-.274.11Zm-9.578-.13c.407.391.84.743 1.282 1.055.503-.476.94-.98 1.312-1.507a25.12 25.12 0 0 1-2.594.453Zm22.91-2.675c.493 1.394.622 2.644.38 3.719-.016.066-.032.132-.051.199.73-.149 1.46-.293 2.187-.442.34-.066.68-.136 1.02-.207a6.41 6.41 0 0 0-.657-1.097 6.325 6.325 0 0 0-2.879-2.172Zm-1.32-.356c.637 1.164.863 2.375.672 3.606-.047.308-.105.61-.176.894l.371-.07c.399-1.035.328-2.344-.218-3.879a10.961 10.961 0 0 0-.176-.457 6.317 6.317 0 0 0-.473-.094Zm-1.266-.086a6.947 6.947 0 0 0-1.812.282c-1.625.476-2.402 1.492-2.254 2.941.059.594.274 1.238.613 1.89.887-.695 1.625-1.448 2.2-2.253.66-.926 1.078-1.879 1.254-2.86Zm.63.387c-.22.996-.66 1.965-1.317 2.883a11.379 11.379 0 0 1-2.043 2.164 200.47 200.47 0 0 0 3.734-.7c.098-.359.18-.745.243-1.151.187-1.18-.094-2.254-.618-3.196Zm.921 4.957c-.02.074-.047.149-.07.219.07-.078.137-.16.203-.242l-.133.023Zm-25.48-1.3c.77.703 1.73 1.261 2.875 1.683a14.01 14.01 0 0 0 1.472-1.074 10.969 10.969 0 0 1-1.632-1.442c-.68.067-1.371.106-2.07.125a5.121 5.121 0 0 0-.645.707Zm18.957.257a7.924 7.924 0 0 1-.438 1.578c.387-.062.774-.12 1.164-.187.032-.024.067-.047.102-.07-.2-.399-.445-.801-.738-1.204-.028-.039-.059-.078-.09-.117Zm-4.824-1.367c.5 1.04 1.261 1.781 1.879 2.258.418.32.886.61 1.386.855l.313-.046c.304-.66.52-1.403.62-2.243.005-.03.005-.062.009-.093-1.16-.957-2.711-1.11-4.207-.73Zm-8.649 1.637c.301.191.602.363.895.523.77.414 1.613.79 2.515 1.125.352-.758.903-1.484 1.61-2.117a18.934 18.934 0 0 1-1.68-2.164c-.09.012-.176.023-.262.031-.437.16-.89.309-1.367.442-.45.765-1.02 1.488-1.71 2.16Zm25.5-.328c.184.675.223 1.355.11 2.027.496-.234.945-.484 1.343-.75.856-.578 1.473-1.219 1.852-1.922-1.086.203-2.188.422-3.305.645Zm-16.082.918c.227.367.406.746.547 1.14.262-.031.523-.062.785-.097a8.362 8.362 0 0 1-1.332-1.043Zm-3.367-.993a18.536 18.536 0 0 0 2.656 2.27c.18-.016.364-.035.547-.055-.387-.98-1.031-1.75-1.68-2.324a7.042 7.042 0 0 0-.593-.476 7.56 7.56 0 0 0-.91.57Zm-7.805 1.836c1.254.36 2.703.579 4.356.657a19.627 19.627 0 0 1-2.035-.946c-.391-.21-.754-.425-1.102-.652a13.347 13.347 0 0 1-1.219.941Zm5.832.454c.235.078.473.156.711.23.926-.02 1.88-.07 2.86-.152l-.016-.012a19.841 19.841 0 0 1-2.133-1.91c-.597.535-1.097 1.164-1.422 1.844Zm-9.949-1.805c.074.2.176.402.297.605.32.532.719 1.012 1.191 1.438.34-.16.672-.328 1-.512l-.066-.023a9.028 9.028 0 0 1-2.422-1.512Zm19.727 2.09c.3.074.609.132.914.175a5.372 5.372 0 0 0-.168-.578l-.14.024c-.2.129-.4.258-.606.379Zm1.785-.582c.203.28.43.558.672.832.925-.043 1.773-.243 2.468-.586.157-.281.297-.582.422-.906-1.191.23-2.382.453-3.562.66Zm-21.88-.653a6.444 6.444 0 0 0-.292 2.024c.492-.156.973-.332 1.445-.528a7.066 7.066 0 0 1-1.152-1.496Zm16.474 1.883c.113.063.222.121.335.18.333-.13.665-.27.989-.414.086-.125.168-.25.25-.38l-.012-.003c-.55.078-1.098.148-1.637.215.028.133.055.27.075.402Zm-3.172-.105c.754.168 1.527.312 2.324.433-.29-.172-.582-.355-.871-.554-.488.046-.973.09-1.453.12Zm12.226-.352a5.59 5.59 0 0 1-.824 1.063c2.426-.227 4.606-.704 6.352-1.387a3.926 3.926 0 0 0 0-2.227c-.38.075-.754.149-1.133.227-.871.176-1.746.351-2.621.523a4.063 4.063 0 0 1-1.246 1.465 5.245 5.245 0 0 1-.528.336Zm-2.34.715c.059.059.121.117.184.172.066.066.137.129.207.191.242-.164.469-.351.676-.566-.34.094-.695.16-1.067.203Zm-29.195-5.023c.262 2.496 1.695 4.234 3.02 5.332.074.062.148.12.226.18a18.465 18.465 0 0 0 1.774-.403c-.036-1.164.168-2.215.597-3.133a3.583 3.583 0 0 1-.14-.894 7.367 7.367 0 0 1-.293-.395c-.13-.004-.254-.012-.38-.016-1.71-.097-3.347-.324-4.804-.671Zm27.84 5.074c.004.023.004.05.004.074.008.125.008.25.008.371.277 0 .55-.008.824-.016-.14-.14-.281-.28-.414-.421-.14 0-.278-.004-.422-.008Zm-3.813.304c.95.082 1.91.13 2.883.141.078 0 .16.004.239.004a5.554 5.554 0 0 0-.016-.508 10.318 10.318 0 0 1-1.899-.402c-.32.168-.648.332-.988.488-.07.094-.14.184-.219.277Zm-34.082-4.496c.336.938 1.079 1.852 2.215 2.72 1.809 1.378 4.332 2.097 7.047 2.198-.875-.937-1.617-1.902-2.191-2.863-.575-.957-.985-1.898-1.23-2.816-1.641.492-3.665.707-5.84.761Zm6.508-.984c.508 1.922 1.801 3.973 3.739 5.914a19.652 19.652 0 0 0 2.128-.156c-1.14-1.004-1.972-2.149-2.48-3.418a8.013 8.013 0 0 1-.559-2.422c-.132-.04-.261-.078-.39-.113a15.875 15.875 0 0 1-1.176-.407c-.379.23-.8.43-1.262.602Zm19.547 4.875c-.11.527-.11 1.07.043 1.61a21.054 21.054 0 0 0 4.633-.731 32.457 32.457 0 0 1-3.734-.883c-.184.004-.364.004-.547.004h-.395Zm-7.535-.219c1.387 1 3.262 1.621 5.484 1.793.45.035.907.05 1.371.05a3.995 3.995 0 0 1-.035-1.64c-2.191-.066-4.031-.355-5.578-.875-.398.239-.812.461-1.242.672Zm-4.438 1.52c.375.242.77.472 1.18.683a7.998 7.998 0 0 1-.074-.441c-.027-.168-.047-.332-.066-.496-.34.094-.688.18-1.04.254Zm26.461.027c1.11.79 2.297 1.34 3.438 1.582 1.254-.828 2.223-1.789 2.77-2.808-.801.277-1.684.519-2.637.718-1.114.23-2.317.403-3.57.508Zm4.47 1.719c2.038.101 4.648-.824 6.007-5.528-.375.426-.836.82-1.379 1.188-.57.383-1.227.73-1.965 1.039a4.577 4.577 0 0 1-.117.293c-.473 1.082-1.34 2.102-2.547 3.008Zm-18.641-.746c.078.156.175.308.28.46.2.278.427.54.684.782a13.893 13.893 0 0 0 2.399-.723c.683-.273 1.41-.636 2.105-1.117a5.78 5.78 0 0 0 .051-.437 22.003 22.003 0 0 1-5.52 1.035Zm-10.297.07c3.097 1.363 6.968 1.86 10.425 1.324a6.577 6.577 0 0 1-.414-.523 4.577 4.577 0 0 1-.48-.844 17.83 17.83 0 0 1-1.656-.05c-1.739-.137-3.278-.528-4.578-1.165a8.741 8.741 0 0 1-1.579-.996c-.64.277-1.304.524-1.988.734.02.188.043.383.074.586.047.32.114.633.196.934Zm11.957 1.738c.648.457 1.422.82 2.289 1.086a7.48 7.48 0 0 0 1.101-1.949c.075-.191.14-.383.196-.566a11.8 11.8 0 0 1-1.621.796c-.622.25-1.282.461-1.965.633Zm9.695-2.101a6.06 6.06 0 0 1-.762 1.715 8.467 8.467 0 0 1-1.789 1.96c.258-.015.52-.035.781-.062 2.665-.277 5.2-1.082 7.192-2.203-1.219-.371-2.45-1.043-3.574-1.945a5.078 5.078 0 0 1-1.829.535Zm-6.672 3.383c.887.203 1.86.312 2.895.324 1.02-.684 1.855-1.485 2.425-2.375.27-.422.477-.856.614-1.297-1.07-.016-2.235-.285-3.438-.781-.023 0-.043-.004-.066-.008-.309.305-.645.59-1.008.86a7.749 7.749 0 0 1-.406 1.39 8.353 8.353 0 0 1-1.016 1.887Zm-20.094-3.668c.13.113.254.226.387.34a25.354 25.354 0 0 0 5.813 3.792 7.865 7.865 0 0 1-1.668-2.964 13.996 13.996 0 0 1-2.375-1.407c-.579.094-1.16.164-1.746.211-.137.008-.274.02-.41.028Zm8.407 5.039c.87.3 1.734.535 2.574.695 2.125.406 5.554.582 7.86-1.68-1.055-.355-1.95-.847-2.677-1.468-1.941.367-4.054.418-6.18.136a19.08 19.08 0 0 1-4.57-1.172c.594 1.465 1.61 2.649 2.993 3.489Zm11.191-.762a6.967 6.967 0 0 1-2.617 1.8c-.344.134-.7.247-1.07.34 2.132-.21 4.234-.835 5.984-1.765a13.366 13.366 0 0 1-2.297-.375Zm-5.29 2.918a14.29 14.29 0 0 1-3.019-.305c-1.21-.258-2.28-.672-3.207-1.222-2.851-1.008-5.757-2.7-8.156-4.797a20.98 20.98 0 0 1-.914-.84 16.805 16.805 0 0 1-3.793-.403c-1.715-.39-3.191-1.05-4.387-1.96-1.484-1.133-2.222-2.254-2.523-3.27-3.16.027-6.578-.25-9.578-.496-2.172-.176-4.047-.328-5.399-.328a.35.35 0 0 1-.347-.352.35.35 0 0 1 .347-.351c1.38 0 3.266.152 5.453.328 2.864.234 6.25.512 9.38.492-.126-1.074.203-1.988.542-2.61.676-1.245 1.93-2.39 3.489-3.206-.196-1.07.02-2.004.332-2.73 1.398-3.255 6.36-5.763 11.343-5.763h.176c1.254.016 2.453.196 3.547.528a9.996 9.996 0 0 1 1.98-.543 11.702 11.702 0 0 1 5.254.32c.122.035.243.078.364.117.258-.23.531-.457.824-.672 1.207-.89 2.45-1.418 3.687-1.562 1.344-.156 2.649.14 3.872.89 1.433.876 2.437 1.876 2.98 2.973.164.328.285.664.363 1.004.903.133 1.778.293 2.618.48 1.285.07 2.585.31 3.832.715 2.632.856 4.835 2.383 6.203 4.305a8.658 8.658 0 0 1 1.058 1.969c.34.746.551 1.535.63 2.36.042.445.023.878-.06 1.296 6.278-1.148 11.778-1.777 14.985-.469a.356.356 0 0 1 .191.457.348.348 0 0 1-.457.196c-3.082-1.262-8.558-.606-14.82.55a9.83 9.83 0 0 1-.258 1.293c-.613 2.34-1.586 4.075-2.89 5.157-1.165.965-2.555 1.394-4.125 1.27a6.274 6.274 0 0 1-.657-.083 16.64 16.64 0 0 1-1.054.602c-2.063 1.074-4.567 1.808-7.047 2.062-.633.067-1.254.098-1.864.102a14.954 14.954 0 0 1-3.484 1.629 17.585 17.585 0 0 1-5.41.867" />
    </g>
    <path d="M48.902 117.498h2.145v-7.426h-2.145v2.664h-2.289v-2.664H44.47v7.426h2.144v-2.79h2.29ZM51.884 117.498h2.27l.402-1.051h2.535l.402 1.05h2.282l-2.887-7.425h-2.121Zm3.117-2.622.828-2.3.829 2.3ZM60.612 117.498h2.144v-2.11h.805l1.059 2.11h2.43l-1.368-2.504c.785-.434 1.23-1.22 1.23-2.258 0-1.645-1.113-2.664-2.917-2.664h-3.383Zm2.101-3.82v-1.856h.996c.68 0 1.051.328 1.051.922 0 .593-.37.933-1.05.933ZM68.248 117.498h3.153c2.394 0 3.988-1.473 3.988-3.711 0-2.23-1.594-3.715-3.988-3.715h-3.153Zm2.145-1.922v-3.582h.941c1.137 0 1.868.699 1.868 1.793 0 1.09-.73 1.789-1.868 1.789Zm0 0" />
  </svg>

    </button>
  );
};

export default EasyCard;
