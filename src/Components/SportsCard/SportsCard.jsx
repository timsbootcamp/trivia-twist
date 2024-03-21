import React, { useState } from 'react';
import './index.css'; 
import '../../Styles/cardSelection.css'

// Define a functional component SportsCard which takes onSelectCategory as props
const SportsCard = ({ onSelectCategory }) => {
  // Define a function handleSelectCategory which calls onSelectCategory with argument 'Sports' when invoked
  const handleSelectCategory = () => {
    onSelectCategory('Sports'); 
  };

    // Return a button element with className 'categoryBtn' and onClick event handler set to handleSelectCategory
  return (
    <button className='categoryBtn Sports' onClick={handleSelectCategory}>
<svg className='cardSelection'
      xmlns="http://www.w3.org/2000/svg"
      version="1"
      viewBox="0 0 300 341.25"
    >
      <defs>
        <filter id="12abce10d3" width="100%" height="100%" x="0%" y="0%">
          <feColorMatrix
            colorInterpolationFilters="sRGB"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          ></feColorMatrix>
        </filter>
        <mask id="3e24890b1a">
          <g filter="url(#12abce10d3)">
            <path fillOpacity="0.41" d="M-30 -34.125H330V375.375H-30z"></path>
          </g>
        </mask>
        <clipPath id="a2d8b6bd17">
          <path d="M1.172.93h281.64V260.28H1.173zm0 0"></path>
        </clipPath>
        <clipPath id="573f7ac559">
          <path d="M39.336.93h205.672a38.151 38.151 0 0126.988 11.18 38.165 38.165 0 0111.18 26.984v183.023a38.164 38.164 0 01-38.168 38.164H39.336a38.177 38.177 0 01-26.988-11.176 38.177 38.177 0 01-11.176-26.988V39.094A38.161 38.161 0 0139.336.93zm0 0"></path>
        </clipPath>
        <linearGradient
          id="3d832aa377"
          x1="0"
          x2="278"
          y1="0"
          y2="0"
          gradientTransform="matrix(1.0131 0 0 1.0131 1.17 .93)"
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
        <clipPath id="2764d5f7a2">
          <path d="M0 0H285V261H0z"></path>
        </clipPath>
        <clipPath id="1717d57260">
          <path d="M10.281 1.11h277.676V334H10.281zm0 0"></path>
        </clipPath>
        <clipPath id="16f1e74ace">
          <path d="M15.379 333.578h267.266a4.76 4.76 0 004.796-4.8V6.21a4.76 4.76 0 00-4.796-4.8H15.379a4.76 4.76 0 00-4.797 4.8v322.566a4.76 4.76 0 004.797 4.801zm0 0"></path>
        </clipPath>
        <clipPath id="33ce692ec8">
          <path d="M9.172 0h284.34v339.875H9.172zm0 0"></path>
        </clipPath>
        <clipPath id="6f1b3f0d0f">
          <path d="M288.71 4.938C288.149 2.118 285.606 0 282.646 0H15.379c-3.387 0-6.207 2.824-6.207 6.21v322.567c0 2.965 1.973 5.364 4.797 6.07.562 2.821 3.105 4.938 6.066 4.938h267.266c3.387 0 6.21-2.82 6.21-6.207V11.008c0-2.965-1.976-5.363-4.8-6.07zM10.583 328.777V6.21a4.76 4.76 0 014.797-4.8h267.266a4.76 4.76 0 014.796 4.8v322.566a4.76 4.76 0 01-4.796 4.801H15.379a4.76 4.76 0 01-4.797-4.8zm0 0"></path>
        </clipPath>
        <clipPath id="6f773dbebc">
          <path d="M145 34.484h29V153h-29zm0 0"></path>
        </clipPath>
        <clipPath id="8ae13fe08d">
          <path d="M178 34.484h72V169h-72zm0 0"></path>
        </clipPath>
      </defs>
      <g mask="url(#3e24890b1a)">
        <g clipPath="url(#2764d5f7a2)" transform="translate(8 1)">
          <g clipPath="url(#a2d8b6bd17)">
            <g clipPath="url(#573f7ac559)">
              <path
                fill="url(#3d832aa377)"
                d="M1.172.93V260.28h281.64V.93zm0 0"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#1717d57260)">
        <g clipPath="url(#16f1e74ace)">
          <path fill="#ffee3c" d="M9.172 0h284.34v339.875H9.172zm0 0"></path>
        </g>
      </g>
      <g clipPath="url(#33ce692ec8)">
        <g clipPath="url(#6f1b3f0d0f)">
          <path fill="#231f20" d="M9.172 0h284.34v339.875H9.172zm0 0"></path>
        </g>
      </g>
      <path d="M89.238 126.715c-6.09-1.41-11.554-5.16-15.3-10.32-4.06-5.63-5.934-12.665-4.84-19.235.312-1.719-.938-3.281-2.657-3.594-1.718-.312-3.277.938-3.59 2.657-1.25 8.132.782 16.886 5.934 23.922 4.684 6.414 11.399 10.945 18.895 12.824.312 0 .468.156.777.156 1.406 0 2.656-.938 2.969-2.348.625-1.875-.469-3.593-2.188-4.062zm0 0"></path>
      <path d="M118.281 157.672l10.621 14.7c1.094-2.036 2.184-3.911 3.59-5.786l-9.054-12.512 7.023-5.156 7.809 10.941c1.562-1.406 3.125-2.812 4.84-3.906l-7.65-10.789c-.937-1.406-2.343-2.191-4.062-2.504-.468-.156-.937-.156-1.558 0l-.313-.312c-1.093-1.563-1.562-3.438-1.093-5.317 1.718-7.504 4.84-24.39 4.996-26.578.937-10.633-2.032-21.422-8.59-30.336-13.895-19.387-40.285-24.547-58.555-11.57-8.43 5.941-14.055 15.168-15.77 25.644-1.874 11.414 1.094 23.61 8.274 33.305 6.559 8.91 15.773 15.164 26.234 17.512 2.188.469 19.364 2.969 27.016 3.754 1.871.156 3.746 1.25 4.84 2.812l.469.625c-.47 1.875-.157 3.754.933 5.473zm-5.465-15.168c-8.117-.781-24.668-3.281-26.23-3.594-9.059-2.191-17.02-7.508-22.64-15.168-6.09-8.285-8.747-18.762-7.028-28.613 1.402-8.91 6.09-16.574 13.117-21.578 5.621-4.063 12.332-5.942 19.047-5.942 11.555 0 23.266 5.63 30.918 16.262 5.621 7.66 8.277 16.887 7.34 26.113-.156 1.563-3.125 17.825-4.84 25.797-.781 3.442-.156 7.035 1.871 10.008l-2.496 1.719c-2.188-2.813-5.465-4.535-9.059-5.004zm0 0M132.648 220.996a91.105 91.105 0 008.122-7.191c1.87-1.875 2.964-4.38 2.964-7.035 0-2.66-1.093-5.16-2.964-7.04a91.736 91.736 0 00-8.122-7.19c-8.12-6.255-21.078-13.915-35.757-13.915-14.68 0-27.637 7.66-35.758 13.914a91.736 91.736 0 00-8.121 7.191c-1.871 1.88-2.965 4.38-2.965 7.04 0 2.656 1.094 5.16 2.965 7.035a91.105 91.105 0 008.12 7.191c8.278 6.41 21.079 13.918 35.759 13.918s27.636-7.664 35.757-13.918zm-3.59-22.828c0-.156.157-.313.157-.313 3.12 2.504 5.62 4.692 7.18 6.41 1.406 1.407 1.406 3.755 0 5.16a86.045 86.045 0 01-7.18 6.41c0-.155-.156-.155-.156-.312-.625-2.656-.938-5.628-.938-8.597 0-2.973.313-6.098.938-8.758zm-64.335 17.2h-.47a79.18 79.18 0 01-6.866-6.098c-1.407-1.407-1.407-3.754 0-5.16 1.715-1.72 4.215-3.907 7.18-6.41 0 .155.156.155.156.312.625 2.66.937 5.629.937 8.601 0 2.969-.312 6.098-.937 8.754zm6.09-18.606c-.157-.938-.622-1.875-1.247-2.504 7.336-4.844 16.864-9.38 27.325-9.38 10.46 0 19.988 4.38 27.324 9.38-.621.785-1.09 1.566-1.246 2.504-.781 3.125-1.094 6.566-1.094 10.008 0 3.437.313 6.878 1.094 10.003.156.942.625 1.88 1.246 2.504-7.336 4.848-16.863 9.383-27.324 9.383-10.461 0-19.989-4.379-27.325-9.383.625-.78 1.09-1.562 1.246-2.504.782-3.125 1.094-6.566 1.094-10.003 0-3.442-.312-6.883-1.094-10.008zm0 0"></path>
      <path d="M83.305 210.363h.468v.469a3.135 3.135 0 003.125 3.129 3.134 3.134 0 003.122-3.129v-.469h4.527v.469a3.135 3.135 0 003.125 3.129 3.132 3.132 0 003.121-3.129v-.469h4.531v.469a3.132 3.132 0 003.121 3.129 3.135 3.135 0 003.125-3.129v-.469h.47a3.133 3.133 0 003.12-3.125 3.134 3.134 0 00-3.12-3.129h-.47v-.468a3.134 3.134 0 00-3.125-3.125 3.13 3.13 0 00-3.12 3.125v.468h-4.532v-.468a3.13 3.13 0 00-3.121-3.125 3.134 3.134 0 00-3.125 3.125v.468H90.02v-.468a3.133 3.133 0 00-3.122-3.125 3.134 3.134 0 00-3.125 3.125v.468h-.468a3.134 3.134 0 00-3.121 3.13 3.133 3.133 0 003.12 3.124zm0 0"></path>
      <g clipPath="url(#6f773dbebc)">
        <path d="M165.285 124.836l-2.031 11.883c-.625 3.129-.781 6.414-.781 9.695v1.563c2.03-.313 4.058-.625 6.246-.625v-.938c0-2.812.312-5.785.781-8.598l2.031-11.882c1.246-7.196 1.871-14.7 1.871-22.047V47.285c0-6.879-5.464-12.508-12.336-12.508h-3.59c-6.714 0-12.18 5.63-12.18 12.508v56.445c0 7.348.626 14.852 1.876 22.043l2.027 11.887c.469 2.813.781 5.785.781 8.598v5.785c2.032-.938 4.063-1.875 6.247-2.5v-3.129c0-3.281-.313-6.566-.782-9.695l-2.027-11.883a117.366 117.366 0 01-1.875-20.95v-56.6c0-3.442 2.652-6.255 6.09-6.255h3.59c3.28 0 5.933 2.813 5.933 6.254v56.445c0 7.036-.625 14.07-1.87 21.106zm0 0"></path>
      </g>
      <g clipPath="url(#8ae13fe08d)">
        <path d="M246.012 37.59l-5.778-2.344a6.443 6.443 0 00-4.84 0c-1.562.625-2.656 1.875-3.277 3.438L218.063 73.55l-11.555 6.097c-.625.313-1.25.942-1.406 1.567l-27.012 66.762c2.027.312 4.215.785 6.086 1.41l12.648-31.43 22.801 9.383-14.367 35.648c1.562 1.875 3.12 3.754 4.37 5.785l29.669-73.8c.312-.625.312-1.407 0-2.188l-4.215-12.512 14.055-34.867c1.558-2.968 0-6.566-3.125-7.816zm-24.047 41.12c.156-.155.312-.155.469-.312l6.558 2.66c0 .157 0 .313.156.47l2.344 7.19-16.086-6.566zm.156 43l-22.797-9.382 10.305-25.797 22.797 9.223zm8.746-46.75l-5.62-2.347 12.648-31.582 5.777 2.344zm0 0"></path>
      </g>
      <path d="M210.566 189.414c-2.343-20.172-19.52-35.809-40.285-35.809-18.738 0-34.508 12.825-39.195 30.18.937.625 7.965 5.942 8.277 6.254 7.809-3.285 16.864-2.816 24.203 1.094-6.246 7.191-10.93 14.07-14.054 19.699-.625 2.504-1.871 4.848-3.746 6.883-.157.312-4.84 4.531-4.84 4.531 1.094 1.254 2.34 2.348 3.746 3.441l.156.157c7.027 5.629 15.77 9.07 25.453 9.07 12.492 0 23.735-5.629 31.074-14.543a27.748 27.748 0 01-1.406-8.754c-.156.156-.156.313-.312.469-4.684-11.883-10.774-21.89-17.957-30.024.78-.78 1.718-1.406 2.496-2.03l.156.155c5.313 5.317 12.18 8.442 19.832 9.227.313 1.563.313 3.281.313 5.004v1.719a27.875 27.875 0 016.09-6.723zm-40.285-29.555c1.719 0 3.278.157 4.996.317.47 5.469 2.344 10.472 5.153 14.851-.938.782-2.032 1.563-2.965 2.504-8.434-7.976-16.555-11.886-22.488-13.918 4.53-2.343 9.683-3.754 15.304-3.754zm-32.793 24.239c1.875-6.254 5.621-11.727 10.465-15.95 4.371.938 14.363 3.91 24.668 13.602-1.559 1.566-3.277 3.129-4.84 4.691-8.898-5.472-20.453-6.41-30.293-2.343zm35.29 44.402c-.778 0-1.715.16-2.497.16-7.34 0-14.21-2.347-19.832-6.414 2.5-5.16 8.278-15.945 18.27-27.36l.469.47c8.433 8.597 9.992 22.515 3.59 33.144zm22.488-10.629c-4.063 4.219-9.059 7.504-14.836 9.223 4.84-12.352 2.343-26.89-6.871-36.117l-.625-.625c1.406-1.407 2.812-2.817 4.218-4.067 7.336 8.133 13.426 18.762 18.114 31.586zm-13.586-55.976c3.59 1.25 6.87 3.125 9.68 5.316-2.028 1.25-4.06 2.656-6.09 4.062-1.715-2.812-2.965-6.097-3.59-9.378zm7.652 14.226a104.272 104.272 0 016.867-4.531c2.813 3.281 5 7.035 6.559 11.097-5.153-.78-9.836-3.125-13.426-6.566zm0 0M228.055 189.57c-12.024 0-21.86 9.848-21.86 21.89 0 12.04 9.836 21.888 21.86 21.888 12.023 0 21.863-9.848 21.863-21.887 0-12.043-9.84-21.89-21.863-21.89zm-12.805 31.582a16.121 16.121 0 01-3.277-9.691c0-3.598 1.25-7.04 3.277-9.695 2.188 2.812 3.438 6.097 3.438 9.695 0 3.594-1.25 6.879-3.438 9.691zm20.926 4.067c-2.344 1.406-5.153 2.187-8.121 2.187-2.965 0-5.621-.781-8.118-2.187 3.122-3.91 4.997-8.758 4.997-13.758 0-5.004-1.72-9.852-4.996-13.762 2.34-1.406 5.152-2.187 8.117-2.187 2.968 0 5.62.781 8.12 2.187-3.124 3.91-4.995 8.758-4.995 13.762 0 5 1.715 9.848 4.996 13.758zm4.683-4.067c-2.187-2.812-3.433-6.097-3.433-9.691 0-3.598 1.246-6.883 3.433-9.695a16.099 16.099 0 013.278 9.695c-.153 3.594-1.246 7.035-3.278 9.691zm0 0"></path>
      <path
        d="M8.633.398c4.62 0 7.355-2.18 7.355-5.843 0-3.082-1.992-4.887-6.508-5.895-2.39-.531-3.265-1.117-3.265-2.074 0-.902.797-1.461 2.047-1.461 1.484 0 2.336.773 2.336 2.18h5.047c0-3.825-2.922-6.293-7.493-6.293-4.382 0-7.09 2.175-7.09 5.683 0 3.133 2.043 5.07 6.243 5.867 2.258.454 3.343 1.145 3.343 2.208 0 .93-.796 1.46-2.097 1.46-1.54 0-2.442-.824-2.442-2.257H.93C.93-2.02 3.798.398 8.634.398zm0 0"
        transform="translate(94.03 307.583)"
      ></path>
      <path
        d="M1.965 0h5.367v-4.594h2.469c4.726 0 7.726-2.738 7.726-7.011 0-4.278-3-6.985-7.726-6.985H1.965zm5.312-9.082v-4.996h2.02c1.777 0 2.812.957 2.812 2.5 0 1.566-1.035 2.496-2.812 2.496zm0 0"
        transform="translate(110.999 307.583)"
      ></path>
      <path
        d="M11.023.398c5.922 0 10.118-4.011 10.118-9.695 0-5.683-4.196-9.691-10.118-9.691-5.925 0-10.12 4.008-10.12 9.691 0 5.684 4.195 9.695 10.12 9.695zM6.348-9.297c0-2.789 1.937-4.726 4.675-4.726 2.762 0 4.672 1.937 4.672 4.726 0 2.79-1.91 4.73-4.672 4.73-2.738 0-4.675-1.94-4.675-4.73zm0 0"
        transform="translate(129.136 307.583)"
      ></path>
      <path
        d="M1.965 0h5.367v-5.285h2.016L12.004 0h6.082L14.66-6.27c1.965-1.085 3.082-3.05 3.082-5.656 0-4.117-2.789-6.664-7.305-6.664H1.966zm5.258-9.563v-4.648h2.496c1.703 0 2.633.824 2.633 2.313 0 1.488-.93 2.335-2.633 2.335zm0 0"
        transform="translate(151.203 307.583)"
      ></path>
      <path
        d="M6.402 0h5.336v-13.625h5.657v-4.965H.742v4.965h5.66zm0 0"
        transform="translate(170.323 307.583)"
      ></path>
      <path
        d="M8.633.398c4.62 0 7.355-2.18 7.355-5.843 0-3.082-1.992-4.887-6.508-5.895-2.39-.531-3.265-1.117-3.265-2.074 0-.902.797-1.461 2.047-1.461 1.484 0 2.336.773 2.336 2.18h5.047c0-3.825-2.922-6.293-7.493-6.293-4.382 0-7.09 2.175-7.09 5.683 0 3.133 2.043 5.07 6.243 5.867 2.258.454 3.343 1.145 3.343 2.208 0 .93-.796 1.46-2.097 1.46-1.54 0-2.442-.824-2.442-2.257H.93C.93-2.02 3.798.398 8.634.398zm0 0"
        transform="translate(188.46 307.583)"
      ></path>
    </svg>
    </button>
  );
};

// Export the SportsCard component
export default SportsCard;
