import React, { useState } from 'react';
import './index.css'; 

const MusicCard = ({ onSelectCategory }) => {
  const handleSelectCategory = () => {
    onSelectCategory('Entertainment: Music'); 
  };

  return (
    <button  onClick={handleSelectCategory}>
<svg className='Music'
      xmlns="http://www.w3.org/2000/svg"
      width="382"
      height="455"
      version="1"
      viewBox="0 0 286.5 341.25"
    >
      <defs>
        <filter id="3248af3c52" width="100%" height="100%" x="0%" y="0%">
          <feColorMatrix
            colorInterpolationFilters="sRGB"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          ></feColorMatrix>
        </filter>
        <mask id="dece692002">
          <g filter="url(#3248af3c52)">
            <path
              fillOpacity="0.41"
              d="M-28.65 -34.125H315.15000000000003V375.375H-28.65z"
            ></path>
          </g>
        </mask>
        <clipPath id="be38e26dda">
          <path d="M.484.93h281.641V260.28H.485zm0 0"></path>
        </clipPath>
        <clipPath id="bd40607356">
          <path d="M38.652.93h205.672a38.165 38.165 0 0126.988 11.18 38.165 38.165 0 0111.18 26.984v183.023a38.181 38.181 0 01-11.18 26.988 38.177 38.177 0 01-26.988 11.176H38.652A38.164 38.164 0 01.484 222.117V39.094a38.165 38.165 0 0111.18-26.985A38.151 38.151 0 0138.652.93zm0 0"></path>
        </clipPath>
        <linearGradient
          id="f525af7cde"
          x1="0"
          x2="278"
          y1="0"
          y2="0"
          gradientTransform="matrix(1.0131 0 0 1.0131 .485 .93)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1EDBCB"></stop>
          <stop offset="0.008" stopColor="#1EDBCB"></stop>
          <stop offset="0.016" stopColor="#1EDACA"></stop>
          <stop offset="0.023" stopColor="#1ED9CA"></stop>
          <stop offset="0.031" stopColor="#1DD8CA"></stop>
          <stop offset="0.039" stopColor="#1DD7C9"></stop>
          <stop offset="0.047" stopColor="#1DD7C9"></stop>
          <stop offset="0.055" stopColor="#1DD6C9"></stop>
          <stop offset="0.063" stopColor="#1CD5C8"></stop>
          <stop offset="0.07" stopColor="#1CD4C8"></stop>
          <stop offset="0.078" stopColor="#1CD3C8"></stop>
          <stop offset="0.086" stopColor="#1CD3C7"></stop>
          <stop offset="0.094" stopColor="#1BD2C7"></stop>
          <stop offset="0.102" stopColor="#1BD1C7"></stop>
          <stop offset="0.109" stopColor="#1BD0C6"></stop>
          <stop offset="0.117" stopColor="#1BD0C6"></stop>
          <stop offset="0.125" stopColor="#1ACFC6"></stop>
          <stop offset="0.133" stopColor="#1ACEC5"></stop>
          <stop offset="0.141" stopColor="#1ACDC5"></stop>
          <stop offset="0.148" stopColor="#1ACCC4"></stop>
          <stop offset="0.156" stopColor="#1ACCC4"></stop>
          <stop offset="0.164" stopColor="#19CBC4"></stop>
          <stop offset="0.172" stopColor="#19CAC3"></stop>
          <stop offset="0.18" stopColor="#19C9C3"></stop>
          <stop offset="0.188" stopColor="#19C8C3"></stop>
          <stop offset="0.195" stopColor="#18C8C2"></stop>
          <stop offset="0.203" stopColor="#18C7C2"></stop>
          <stop offset="0.211" stopColor="#18C6C2"></stop>
          <stop offset="0.219" stopColor="#18C5C1"></stop>
          <stop offset="0.227" stopColor="#17C4C1"></stop>
          <stop offset="0.234" stopColor="#17C4C1"></stop>
          <stop offset="0.242" stopColor="#17C3C0"></stop>
          <stop offset="0.25" stopColor="#17C2C0"></stop>
          <stop offset="0.258" stopColor="#16C1C0"></stop>
          <stop offset="0.266" stopColor="#16C0BF"></stop>
          <stop offset="0.273" stopColor="#16C0BF"></stop>
          <stop offset="0.281" stopColor="#16BFBF"></stop>
          <stop offset="0.289" stopColor="#16BEBE"></stop>
          <stop offset="0.297" stopColor="#15BDBE"></stop>
          <stop offset="0.305" stopColor="#15BCBD"></stop>
          <stop offset="0.313" stopColor="#15BCBD"></stop>
          <stop offset="0.32" stopColor="#15BBBD"></stop>
          <stop offset="0.328" stopColor="#14BABC"></stop>
          <stop offset="0.336" stopColor="#14B9BC"></stop>
          <stop offset="0.344" stopColor="#14B8BC"></stop>
          <stop offset="0.352" stopColor="#14B8BB"></stop>
          <stop offset="0.359" stopColor="#13B7BB"></stop>
          <stop offset="0.367" stopColor="#13B6BB"></stop>
          <stop offset="0.375" stopColor="#13B5BA"></stop>
          <stop offset="0.383" stopColor="#13B4BA"></stop>
          <stop offset="0.391" stopColor="#12B4BA"></stop>
          <stop offset="0.398" stopColor="#12B3B9"></stop>
          <stop offset="0.406" stopColor="#12B2B9"></stop>
          <stop offset="0.414" stopColor="#12B1B9"></stop>
          <stop offset="0.422" stopColor="#12B0B8"></stop>
          <stop offset="0.43" stopColor="#11B0B8"></stop>
          <stop offset="0.438" stopColor="#11AFB8"></stop>
          <stop offset="0.445" stopColor="#11AEB7"></stop>
          <stop offset="0.453" stopColor="#11ADB7"></stop>
          <stop offset="0.461" stopColor="#10ACB6"></stop>
          <stop offset="0.469" stopColor="#10ACB6"></stop>
          <stop offset="0.477" stopColor="#10ABB6"></stop>
          <stop offset="0.484" stopColor="#10AAB5"></stop>
          <stop offset="0.492" stopColor="#0FA9B5"></stop>
          <stop offset="0.5" stopColor="#0FA9B5"></stop>
          <stop offset="0.508" stopColor="#0FA8B4"></stop>
          <stop offset="0.516" stopColor="#0FA7B4"></stop>
          <stop offset="0.523" stopColor="#0EA6B4"></stop>
          <stop offset="0.531" stopColor="#0EA5B3"></stop>
          <stop offset="0.539" stopColor="#0EA5B3"></stop>
          <stop offset="0.547" stopColor="#0EA4B3"></stop>
          <stop offset="0.555" stopColor="#0EA3B2"></stop>
          <stop offset="0.563" stopColor="#0DA2B2"></stop>
          <stop offset="0.57" stopColor="#0DA1B2"></stop>
          <stop offset="0.578" stopColor="#0DA1B1"></stop>
          <stop offset="0.586" stopColor="#0DA0B1"></stop>
          <stop offset="0.594" stopColor="#0C9FB1"></stop>
          <stop offset="0.602" stopColor="#0C9EB0"></stop>
          <stop offset="0.609" stopColor="#0C9DB0"></stop>
          <stop offset="0.617" stopColor="#0C9DAF"></stop>
          <stop offset="0.625" stopColor="#0B9CAF"></stop>
          <stop offset="0.633" stopColor="#0B9BAF"></stop>
          <stop offset="0.641" stopColor="#0B9AAE"></stop>
          <stop offset="0.648" stopColor="#0B99AE"></stop>
          <stop offset="0.656" stopColor="#0A99AE"></stop>
          <stop offset="0.664" stopColor="#0A98AD"></stop>
          <stop offset="0.672" stopColor="#0A97AD"></stop>
          <stop offset="0.68" stopColor="#0A96AD"></stop>
          <stop offset="0.688" stopColor="#0A95AC"></stop>
          <stop offset="0.695" stopColor="#0995AC"></stop>
          <stop offset="0.703" stopColor="#0994AC"></stop>
          <stop offset="0.711" stopColor="#0993AB"></stop>
          <stop offset="0.719" stopColor="#0992AB"></stop>
          <stop offset="0.727" stopColor="#0891AB"></stop>
          <stop offset="0.734" stopColor="#0891AA"></stop>
          <stop offset="0.742" stopColor="#0890AA"></stop>
          <stop offset="0.75" stopColor="#088FAA"></stop>
          <stop offset="0.758" stopColor="#078EA9"></stop>
          <stop offset="0.766" stopColor="#078DA9"></stop>
          <stop offset="0.773" stopColor="#078DA8"></stop>
          <stop offset="0.781" stopColor="#078CA8"></stop>
          <stop offset="0.789" stopColor="#068BA8"></stop>
          <stop offset="0.797" stopColor="#068AA7"></stop>
          <stop offset="0.805" stopColor="#0689A7"></stop>
          <stop offset="0.813" stopColor="#0689A7"></stop>
          <stop offset="0.82" stopColor="#0688A6"></stop>
          <stop offset="0.828" stopColor="#0587A6"></stop>
          <stop offset="0.836" stopColor="#0586A6"></stop>
          <stop offset="0.844" stopColor="#0585A5"></stop>
          <stop offset="0.852" stopColor="#0585A5"></stop>
          <stop offset="0.859" stopColor="#0484A5"></stop>
          <stop offset="0.867" stopColor="#0483A4"></stop>
          <stop offset="0.875" stopColor="#0482A4"></stop>
          <stop offset="0.883" stopColor="#0482A4"></stop>
          <stop offset="0.891" stopColor="#0381A3"></stop>
          <stop offset="0.898" stopColor="#0380A3"></stop>
          <stop offset="0.906" stopColor="#037FA3"></stop>
          <stop offset="0.914" stopColor="#037EA2"></stop>
          <stop offset="0.922" stopColor="#027EA2"></stop>
          <stop offset="0.93" stopColor="#027DA1"></stop>
          <stop offset="0.938" stopColor="#027CA1"></stop>
          <stop offset="0.945" stopColor="#027BA1"></stop>
          <stop offset="0.953" stopColor="#027AA0"></stop>
          <stop offset="0.961" stopColor="#017AA0"></stop>
          <stop offset="0.969" stopColor="#0179A0"></stop>
          <stop offset="0.977" stopColor="#01789F"></stop>
          <stop offset="0.984" stopColor="#01779F"></stop>
          <stop offset="0.992" stopColor="#00769F"></stop>
          <stop offset="1" stopColor="#00769E"></stop>
        </linearGradient>
        <clipPath id="0fd1893362">
          <path d="M0 0H284V261H0z"></path>
        </clipPath>
        <clipPath id="fdce3920b9">
          <path d="M2.598 1.11H280V334H2.598zm0 0"></path>
        </clipPath>
        <clipPath id="cf9e55faa3">
          <path d="M7.695 333.578h267.262a4.76 4.76 0 004.8-4.8V6.21a4.76 4.76 0 00-4.8-4.8H7.695a4.76 4.76 0 00-4.8 4.8v322.566a4.76 4.76 0 004.8 4.801zm0 0"></path>
        </clipPath>
        <clipPath id="e4176a7dae">
          <path d="M1.484 0h284.34v339.875H1.484zm0 0"></path>
        </clipPath>
        <clipPath id="d93d55e45d">
          <path d="M281.027 4.938c-.566-2.82-3.105-4.938-6.07-4.938H7.695c-3.386 0-6.21 2.824-6.21 6.21v322.567c0 2.965 1.976 5.364 4.8 6.07.563 2.821 3.102 4.938 6.067 4.938h267.265c3.387 0 6.207-2.82 6.207-6.207V11.008c0-2.965-1.976-5.363-4.797-6.07zM2.895 328.777V6.21a4.76 4.76 0 014.8-4.8h267.262a4.76 4.76 0 014.8 4.8v322.566a4.76 4.76 0 01-4.8 4.801H7.695a4.76 4.76 0 01-4.8-4.8zm0 0"></path>
        </clipPath>
        <clipPath id="caccb553e3">
          <path d="M160 30.387h77V114h-77zm0 0"></path>
        </clipPath>
        <clipPath id="07a1e81c79">
          <path d="M48 168h51v54.715H48zm0 0"></path>
        </clipPath>
        <clipPath id="273423019e">
          <path d="M96 103h134v119.715H96zm0 0"></path>
        </clipPath>
      </defs>
      <g mask="url(#dece692002)">
        <g clipPath="url(#0fd1893362)" transform="translate(1 1)">
          <g clipPath="url(#be38e26dda)">
            <g clipPath="url(#bd40607356)">
              <path
                fill="url(#f525af7cde)"
                d="M.484.93V260.28h281.641V.93zm0 0"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#fdce3920b9)">
        <g clipPath="url(#cf9e55faa3)">
          <path fill="#ff9003" d="M1.484 0h284.34v339.875H1.484zm0 0"></path>
        </g>
      </g>
      <g clipPath="url(#e4176a7dae)">
        <g clipPath="url(#d93d55e45d)">
          <path fill="#231f20" d="M1.484 0h284.34v339.875H1.484zm0 0"></path>
        </g>
      </g>
      <g clipPath="url(#caccb553e3)">
        <path d="M235.734 31.168a2.7 2.7 0 00-2.347-.39L184.66 45.944a2.623 2.623 0 00-1.867 2.532v40.601c-2.406-1.926-5.383-3.133-8.691-3.133-7.704 0-13.957 6.262-13.957 13.97 0 7.702 6.253 13.964 13.957 13.964 7.699 0 13.957-6.262 13.957-13.965V68.52l43.496-13.543v18.902c-2.41-1.926-5.387-3.133-8.696-3.133-7.699 0-13.957 6.262-13.957 13.969 0 7.703 6.258 13.965 13.957 13.965 7.7 0 13.957-6.262 13.957-13.965V33.273c0-.84-.39-1.625-1.082-2.105zm-61.632 77.441c-4.786 0-8.696-3.91-8.696-8.695 0-4.789 3.91-8.7 8.696-8.7 4.78 0 8.691 3.911 8.691 8.7 0 4.785-3.879 8.695-8.691 8.695zm13.957-45.597v-12.61l43.496-13.547V49.47zm34.8 30.398c-4.78 0-8.691-3.91-8.691-8.695 0-4.79 3.91-8.7 8.691-8.7 4.782 0 8.696 3.91 8.696 8.7 0 4.785-3.914 8.695-8.696 8.695zm0 0"></path>
      </g>
      <g clipPath="url(#07a1e81c79)">
        <path d="M95.594 168.445l-30.742 9.57a2.623 2.623 0 00-1.868 2.532v23.805a9.546 9.546 0 00-4.511-1.141c-5.383 0-9.774 4.394-9.774 9.781 0 5.387 4.39 9.781 9.774 9.781 5.386 0 9.777-4.394 9.777-9.78v-19.055l25.477-7.946v8.79a9.55 9.55 0 00-4.512-1.145c-5.383 0-9.774 4.394-9.774 9.785 0 5.387 4.391 9.781 9.774 9.781 5.387 0 9.777-4.394 9.777-9.781v-32.477c0-.843-.39-1.625-1.082-2.136a2.745 2.745 0 00-2.316-.364zm-37.121 49.032a4.507 4.507 0 01-4.512-4.516 4.51 4.51 0 014.512-4.516 4.51 4.51 0 014.511 4.516c0 2.5-2.015 4.516-4.511 4.516zm9.777-29.106v-5.93l25.477-7.945v5.899zm20.965 19.535a4.51 4.51 0 01-4.512-4.515c0-2.5 2.016-4.516 4.512-4.516a4.507 4.507 0 014.512 4.516 4.51 4.51 0 01-4.512 4.515zm0 0"></path>
      </g>
      <path d="M213.477 160.8c.238.063.449.09.691.09a2.602 2.602 0 002.527-1.956c3.336-12.489-4.093-25.403-16.574-28.743-1.414-.359-2.86.454-3.219 1.868a2.598 2.598 0 001.864 3.218c9.687 2.59 15.46 12.614 12.875 22.305-.391 1.383.449 2.828 1.836 3.219zm0 0M113.04 136.781c1.894 0 3.128-.058 3.397-.09a2.472 2.472 0 001.774-.84c1.355-1.507 33.18-36.87 17.477-69.949-5.926-12.492-20.903-17.82-33.387-11.89-8.301 3.945-13.535 11.98-14.168 20.8-7.25-5.09-16.785-6.05-25.149-2.109-6.015 2.86-10.586 7.918-12.843 14.238-2.254 6.32-1.922 13.121.964 19.172 13.504 28.414 50.415 30.668 61.934 30.668zM55.136 88.746c1.773-4.996 5.383-8.969 10.136-11.226 8.27-3.942 18.079-1.715 23.883 5.418.75.933 2.074 1.234 3.188.722 1.082-.512 1.683-1.715 1.445-2.922-1.867-8.996 2.555-18.027 10.797-21.941 4.781-2.285 10.168-2.559 15.129-.781 4.965 1.777 8.965 5.386 11.25 10.172 12.965 27.269-11.34 57.94-15.88 63.296-7.01.211-46.202-.328-59.167-27.597-2.316-4.758-2.559-10.145-.781-15.14zm0 0"></path>
      <g clipPath="url(#273423019e)">
        <path d="M203.246 118.543c-13.383-3.582-27.281.902-36.035 11.078-2.133-11.258-9.563-20.918-20.242-25.707-1.324-.602-2.887 0-3.489 1.324-.601 1.325 0 2.89 1.325 3.492 11.066 4.97 18.047 16.075 17.746 28.325-.031 1.203.781 2.285 1.953 2.617a2.596 2.596 0 002.98-1.266c6.739-12.308 20.875-18.386 34.38-14.746 7.761 2.078 14.288 7.102 18.32 14.086 4.058 7.012 5.144 15.168 3.039 22.965-11.852 44.246-70.782 55.05-79.473 56.402-5.984-4.812-41.45-35.031-42.441-71.992-.032-1.445-1.204-2.648-2.707-2.559-1.446.028-2.59 1.262-2.559 2.708 1.144 42.71 43.555 75.367 45.36 76.722a2.57 2.57 0 001.597.54c.117 0 .207 0 .328-.028 2.918-.363 71.32-9.422 85.008-60.469 2.465-9.148 1.203-18.75-3.55-26.969-4.782-8.187-12.423-14.086-21.54-16.523zm0 0"></path>
      </g>
      <path
        d="M1.965 0h13.043v-4.383h-7.73V-7.25h6.718v-4.305H7.277v-2.707h7.438v-4.328H1.965zm0 0"
        transform="translate(19.539 269.517)"
      ></path>
      <path
        d="M1.965 0h5.312v-9.48L14.344 0h4.355v-18.59h-5.285v9.426L6.348-18.59H1.965zm0 0"
        transform="translate(35.737 269.517)"
      ></path>
      <path
        d="M6.402 0h5.336v-13.625h5.657v-4.965H.742v4.965h5.66zm0 0"
        transform="translate(56.423 269.517)"
      ></path>
      <path
        d="M1.965 0h13.043v-4.383h-7.73V-7.25h6.718v-4.305H7.277v-2.707h7.438v-4.328H1.965zm0 0"
        transform="translate(74.56 269.517)"
      ></path>
      <path
        d="M1.965 0h5.367v-5.285h2.016L12.004 0h6.082L14.66-6.27c1.965-1.085 3.082-3.05 3.082-5.656 0-4.117-2.789-6.664-7.305-6.664H1.966zm5.258-9.563v-4.648h2.496c1.703 0 2.633.824 2.633 2.313 0 1.488-.93 2.335-2.633 2.335zm0 0"
        transform="translate(90.759 269.517)"
      ></path>
      <path
        d="M6.402 0h5.336v-13.625h5.657v-4.965H.742v4.965h5.66zm0 0"
        transform="translate(109.878 269.517)"
      ></path>
      <path
        d="M.133 0h5.683l1.008-2.629h6.348L14.184 0h5.71l-7.226-18.59H7.355zM7.94-6.559l2.07-5.765 2.075 5.765zm0 0"
        transform="translate(128.015 269.517)"
      ></path>
      <path
        d="M1.965 0h5.367v-18.59H1.965zm0 0"
        transform="translate(148.038 269.517)"
      ></path>
      <path
        d="M1.965 0h5.312v-9.48L14.344 0h4.355v-18.59h-5.285v9.426L6.348-18.59H1.965zm0 0"
        transform="translate(157.332 269.517)"
      ></path>
      <path
        d="M1.965 0h5.312v-9.43l3.586 5.02h3.48l3.56-4.992V0h5.308v-18.59h-4.356L12.59-9.746 6.348-18.59H1.965zm0 0"
        transform="translate(178.018 269.517)"
      ></path>
      <path
        d="M1.965 0h13.043v-4.383h-7.73V-7.25h6.718v-4.305H7.277v-2.707h7.438v-4.328H1.965zm0 0"
        transform="translate(203.192 269.517)"
      ></path>
      <path
        d="M1.965 0h5.312v-9.48L14.344 0h4.355v-18.59h-5.285v9.426L6.348-18.59H1.965zm0 0"
        transform="translate(219.39 269.517)"
      ></path>
      <path
        d="M6.402 0h5.336v-13.625h5.657v-4.965H.742v4.965h5.66zm0 0"
        transform="translate(240.077 269.517)"
      ></path>
      <path
        d="M3.613.344c1.645 0 2.813-1.168 2.813-2.762S5.258-5.18 3.613-5.18C1.938-5.18.77-4.012.77-2.418S1.937.344 3.613.344zM.77-11.711c0 1.594 1.167 2.762 2.843 2.762 1.645 0 2.813-1.168 2.813-2.762s-1.168-2.766-2.813-2.766C1.938-14.477.77-13.305.77-11.71zm0 0"
        transform="translate(258.214 269.517)"
      ></path>
      <path
        d="M1.965 0h5.312v-9.43l3.586 5.02h3.48l3.56-4.992V0h5.308v-18.59h-4.356L12.59-9.746 6.348-18.59H1.965zm0 0"
        transform="translate(96.152 306.187)"
      ></path>
      <path
        d="M9.96.398c5.02 0 8.126-3.054 8.126-8.046V-18.59H12.75v10.594c0 2.207-.93 3.375-2.79 3.375-1.858 0-2.788-1.168-2.788-3.375V-18.59H1.805v10.942C1.805-2.656 4.94.398 9.96.398zm0 0"
        transform="translate(121.326 306.187)"
      ></path>
      <path
        d="M8.633.398c4.62 0 7.355-2.18 7.355-5.843 0-3.082-1.992-4.887-6.508-5.895-2.39-.531-3.265-1.117-3.265-2.074 0-.902.797-1.461 2.047-1.461 1.484 0 2.336.773 2.336 2.18h5.047c0-3.825-2.922-6.293-7.493-6.293-4.382 0-7.09 2.175-7.09 5.683 0 3.133 2.043 5.07 6.243 5.867 2.258.454 3.343 1.145 3.343 2.208 0 .93-.796 1.46-2.097 1.46-1.54 0-2.442-.824-2.442-2.257H.93C.93-2.02 3.798.398 8.634.398zm0 0"
        transform="translate(141.242 306.187)"
      ></path>
      <path
        d="M1.965 0h5.367v-18.59H1.965zm0 0"
        transform="translate(158.21 306.187)"
      ></path>
      <path
        d="M10.648.398c5.13 0 9.004-3.109 9.801-7.835h-5.441c-.664 1.753-2.235 2.87-4.25 2.87-2.606 0-4.41-1.94-4.41-4.73 0-2.812 1.832-4.726 4.46-4.726 1.942 0 3.56 1.09 4.118 2.761h5.418c-.957-4.699-4.782-7.726-9.746-7.726-5.739 0-9.696 3.957-9.696 9.691C.902-3.559 4.86.398 10.648.398zm0 0"
        transform="translate(167.505 306.187)"
      ></path>
    </svg>
    </button>
  );
};

export default MusicCard;
