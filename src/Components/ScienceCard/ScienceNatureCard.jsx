import React, { useState } from 'react';
import './index.css'; 
import '../../Styles/cardSelection.css'

// Functional component ScienceNatureCard receiving onSelectCategory prop
const ScienceNatureCard = ({ onSelectCategory }) => {
  // Function to handle category selection
  const handleSelectCategory = () => {
    onSelectCategory('Science & Nature'); // Calling onSelectCategory prop with 'Science & Nature' as argument
  };

  //Return JSX for rendering ScienceNatureCard
  return (
    <button className='categoryBtn Science' onClick={handleSelectCategory}>
   <svg className='cardSelection'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 288 341.25"
   
  >
    <defs>
      <clipPath id="d">
        <path d="M.344.93h281.64V260.28H.344Zm0 0" />
      </clipPath>
      <clipPath id="e">
        <path d="M38.508.93h205.676a38.165 38.165 0 0 1 38.164 38.164v183.023a38.177 38.177 0 0 1-11.176 26.988 38.177 38.177 0 0 1-26.988 11.176H38.508A38.161 38.161 0 0 1 .344 222.117V39.094a38.149 38.149 0 0 1 11.18-26.985A38.149 38.149 0 0 1 38.507.93Zm0 0" />
      </clipPath>
      <clipPath id="c">
        <path d="M0 0h284v261H0z" />
      </clipPath>
      <clipPath id="g">
        <path d="M4.453 1.11H282V334H4.453Zm0 0" />
      </clipPath>
      <clipPath id="h">
        <path d="M9.555 333.578h267.261c2.684 0 4.797-2.117 4.797-4.8V6.21c0-2.684-2.113-4.8-4.797-4.8H9.555a4.76 4.76 0 0 0-4.801 4.8v322.566a4.76 4.76 0 0 0 4.8 4.801Zm0 0" />
      </clipPath>
      <clipPath id="i">
        <path d="M3.344 0h284.34v339.875H3.344Zm0 0" />
      </clipPath>
      <clipPath id="j">
        <path d="M282.887 4.938C282.32 2.118 279.78 0 276.817 0H9.554C6.168 0 3.344 2.824 3.344 6.21v322.567c0 2.965 1.976 5.364 4.797 6.07.566 2.821 3.105 4.938 6.07 4.938h267.262c3.386 0 6.21-2.82 6.21-6.207V11.008c0-2.965-1.976-5.363-4.796-6.07ZM4.754 328.777V6.21a4.76 4.76 0 0 1 4.8-4.8h267.262c2.684 0 4.797 2.116 4.797 4.8v322.566c0 2.684-2.113 4.801-4.797 4.801H9.555a4.76 4.76 0 0 1-4.801-4.8Zm0 0" />
      </clipPath>
      <clipPath id="k">
        <path d="M38.078 29.656H241v202.801H38.078Zm0 0" />
      </clipPath>
      <linearGradient
        id="f"
        x1={0}
        x2={278}
        y1={0}
        y2={0}
        gradientTransform="matrix(1.0131 0 0 1.0131 .343 .93)"
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
          <path fillOpacity={0.41} d="M-28.8-34.125h345.6v409.5H-28.8z" />
        </g>
      </mask>
    </defs>
    <g mask="url(#b)">
      <g clipPath="url(#c)" transform="translate(3 1)">
        <g clipPath="url(#d)">
          <g clipPath="url(#e)">
            <path fill="url(#f)" d="M.344.93V260.28h281.64V.93Zm0 0" />
          </g>
        </g>
      </g>
    </g>
    <g clipPath="url(#g)">
      <g clipPath="url(#h)">
        <path fill="#07b4aa" d="M3.344 0h284.34v339.875H3.344Zm0 0" />
      </g>
    </g>
    <g clipPath="url(#i)">
      <g clipPath="url(#j)">
        <path fill="#231f20" d="M3.344 0h284.34v339.875H3.344Zm0 0" />
      </g>
    </g>
    <g clipPath="url(#k)">
      <path
        fillRule="evenodd"
        d="M193.227 86.48c0 2.504-2.043 4.543-4.532 4.543-2.507 0-4.554-2.039-4.554-4.543 0-2.5 2.047-4.539 4.554-4.539 2.489 0 4.532 2.04 4.532 4.54Zm41.847 140.196H126.918v-14.57h108.156Zm-97.293-31.328h23.805v11.023H137.78Zm-16.844-15.782h57.473v10.047h-57.472Zm72.946-76.27a17.66 17.66 0 0 0 8.875-6.257c24.152 25.988 45.625 65.164 19.101 109.332h-35.656c23.23-29.09 25.66-62.082 7.68-103.074Zm-25.66 12.891 9.3-16.113c-3.937-3.23-6.445-8.12-6.445-13.594 0-9.699 7.91-17.59 17.617-17.59 2.18 0 4.262.4 6.192 1.13l3.433-5.934-20.64-11.902-30.098 52.101Zm-11.438 8.465-10.805-6.242 3.645-6.324 10.805 6.238Zm36.348-87.875 10.8 6.239-7.656 13.273-10.804-6.238Zm-4.438 61.563c6.54 0 11.864-5.32 11.864-11.86 0-6.535-5.325-11.855-11.864-11.855-6.543 0-11.867 5.32-11.867 11.855 0 6.54 5.324 11.86 11.867 11.86ZM237.95 206.37h-9.453c11.129-19.965 14.121-40.598 8.836-61.414-4.574-18.047-15.281-35.988-31.797-53.352a17.89 17.89 0 0 0 .754-5.125c0-5.468-2.508-10.359-6.426-13.59l4.864-8.421c.386-.656.48-1.438.289-2.172a2.96 2.96 0 0 0-1.352-1.746l-2.41-1.399 9.105-15.754c.368-.66.48-1.441.27-2.175a2.85 2.85 0 0 0-1.332-1.743l-15.781-9.105a2.853 2.853 0 0 0-2.18-.285 2.872 2.872 0 0 0-1.734 1.336l-9.106 15.754-2.434-1.399a2.84 2.84 0 0 0-2.16-.285c-.73.2-1.367.68-1.754 1.336l-32.972 57.07a2.876 2.876 0 0 0 1.062 3.918l2.41 1.399-5.074 8.808a2.852 2.852 0 0 0 1.043 3.918l15.781 9.106a2.817 2.817 0 0 0 2.18.285 2.816 2.816 0 0 0 1.738-1.336l5.094-8.809 2.43 1.399c.441.254.926.383 1.426.383.254 0 .504-.032.754-.094a2.87 2.87 0 0 0 1.734-1.34l10.746-18.59c1.7.645 3.531 1.028 5.441 1.11 18.524 41.23 15.59 73.816-9.203 102.312h-11.422v-11.023h13.97a2.857 2.857 0 0 0 2.855-2.868V176.7a2.857 2.857 0 0 0-2.856-2.868h-63.203a2.873 2.873 0 0 0-2.875 2.867v15.781a2.873 2.873 0 0 0 2.875 2.868h13.95v11.023h-7.97a2.863 2.863 0 0 0-2.874 2.867v20.305a2.86 2.86 0 0 0 2.874 2.867H237.95a2.87 2.87 0 0 0 2.871-2.867v-20.305a2.872 2.872 0 0 0-2.87-2.867Zm-127.87 17.754a5.076 5.076 0 0 1-4.438 2.55H57.988c-1.87 0-3.531-.952-4.437-2.55a5.054 5.054 0 0 1 0-5.113l10.164-17.598c6.039-2.441 10.015-1.035 14.992.727 3.492 1.238 7.254 2.57 11.902 2.57 2.954 0 6.25-.531 10.07-1.961l9.38 16.262c.925 1.605.945 3.52.02 5.113Zm-36.774-39.32-5.594 9.707c5.055-.555 9.164.894 12.906 2.218 4.996 1.774 9.762 3.458 17.133.97l-7.45-12.895c-.984-1.696-1.445-3.47-1.445-5.422v-19.801H74.773v19.8a10.555 10.555 0 0 1-1.468 5.423Zm-2.39-34.637c0-.219.19-.398.401-.398H92.31c.21 0 .386.18.386.398v3.281a.394.394 0 0 1-.386.395H71.316a.408.408 0 0 1-.402-.395Zm3.105-92.356c-.387-6.527 2.796-14.84 7.773-20.761 5.21 6.066 8.277 14.078 7.777 20.715-.465 6.203-4.593 13.191-7.738 18.007-3.762-5.78-7.465-11.753-7.812-17.96Zm-18.754 50.079c-6.29-5.387-10.59-15.192-11.168-25.067 9.605.633 19.617 5.02 25.117 11.192 5.226 5.875 7.101 14.476 8.875 22.843-6.809-1.386-16.863-3.84-22.824-8.968ZM94.41 94.016c5.48-6.172 15.492-10.563 25.121-11.192-.597 9.875-4.902 19.68-11.172 25.067-5.96 5.129-16.011 7.582-22.824 8.968 1.758-8.367 3.649-16.968 8.875-22.843Zm.871 87.921c-.484-.828-.695-1.593-.695-2.554v-20.25c2.258-.91 3.86-3.113 3.86-5.684v-3.281c0-3.383-2.762-6.133-6.137-6.133h-7.641V122.88c7.64-1.488 19.719-4.004 27.434-10.637 8.105-6.965 13.43-19.984 13.234-32.402a2.867 2.867 0 0 0-2.836-2.824c-12-.192-25.313 5.238-32.39 13.187-2.317 2.606-4.051 5.598-5.442 8.777V81.836l.176-.254c3.664-5.398 9.781-14.43 10.453-23.387C95.992 49 91.48 38.246 83.78 30.801c-1.101-1.078-2.875-1.078-3.992 0-7.312 7.082-12.039 18.328-11.52 27.347.485 8.086 5.231 15.348 9.395 21.758.426.656.852 1.305 1.273 1.95V98.94c-1.386-3.164-3.124-6.144-5.437-8.738-7.063-7.95-20.395-13.379-32.395-13.187a2.865 2.865 0 0 0-2.816 2.824c-.191 12.418 5.133 25.437 13.234 32.402 7.7 6.625 19.774 9.145 27.414 10.633v21.16h-7.62c-3.376 0-6.133 2.75-6.133 6.133v3.281a6.125 6.125 0 0 0 3.84 5.684v20.25c0 .96-.196 1.726-.676 2.554L48.57 216.145c-1.949 3.398-1.949 7.457 0 10.851 1.95 3.39 5.48 5.414 9.418 5.414h47.653c3.933 0 7.445-2.023 9.414-5.414 1.949-3.39 1.949-7.453-.02-10.851Zm0 0"
      />
    </g>
    <path d="M22.779 303.766c4.406 0 7.015-2.074 7.015-5.57 0-2.937-1.898-4.66-6.203-5.621-2.281-.508-3.117-1.066-3.117-1.977 0-.863.762-1.394 1.95-1.394 1.417 0 2.23.734 2.23 2.078h4.812c0-3.648-2.785-6.004-7.144-6.004-4.176 0-6.762 2.078-6.762 5.422 0 2.988 1.953 4.836 5.953 5.598 2.152.43 3.191 1.086 3.191 2.101 0 .887-.761 1.39-2 1.39-1.468 0-2.332-.784-2.332-2.152h-4.937c0 3.825 2.734 6.13 7.344 6.13ZM40.885 303.766c4.887 0 8.586-2.96 9.344-7.468h-5.192c-.632 1.671-2.125 2.734-4.05 2.734-2.485 0-4.204-1.848-4.204-4.508 0-2.683 1.747-4.508 4.254-4.508 1.848 0 3.395 1.04 3.926 2.633h5.164c-.91-4.484-4.558-7.371-9.293-7.371-5.472 0-9.246 3.773-9.246 9.246 0 5.469 3.774 9.242 9.297 9.242ZM52.912 303.387h5.113v-17.726h-5.113ZM61.774 303.387h12.434v-4.18h-7.371v-2.734h6.41v-4.101h-6.41v-2.586h7.094v-4.125H61.774ZM77.22 303.387h5.063v-9.043l6.738 9.043h4.153v-17.726h-5.04v8.988l-6.734-8.988h-4.18ZM105.228 303.766c4.886 0 8.586-2.96 9.343-7.468h-5.191c-.633 1.671-2.125 2.734-4.05 2.734-2.485 0-4.204-1.848-4.204-4.508 0-2.683 1.746-4.508 4.254-4.508 1.848 0 3.394 1.04 3.926 2.633h5.164c-.91-4.484-4.559-7.371-9.293-7.371-5.473 0-9.246 3.773-9.246 9.246 0 5.469 3.773 9.242 9.297 9.242ZM117.254 303.387h12.434v-4.18h-7.371v-2.734h6.41v-4.101h-6.41v-2.586h7.094v-4.125h-12.157ZM144.273 303.766c1.847 0 3.52-.453 4.937-1.238l.836.86h4.988l-3.09-3.266c1.09-1.446 1.723-3.242 1.75-5.242h-3.953a5.19 5.19 0 0 1-.582 2.277l-1.847-1.977c2.304-1.214 3.547-2.937 3.547-5.062 0-2.938-2.383-4.84-6.078-4.84-3.649 0-6.028 1.852-6.028 4.61 0 1.292.504 2.433 1.871 4.003-2.074 1.137-3.238 2.836-3.238 4.864 0 3.039 2.707 5.011 6.887 5.011Zm-2.153-5.394c0-.684.38-1.215 1.215-1.645l2.863 2.961a5.68 5.68 0 0 1-1.75.281c-1.492 0-2.328-.582-2.328-1.597Zm1.141-8.078c0-.758.582-1.215 1.52-1.215.988 0 1.57.48 1.57 1.316 0 .809-.531 1.469-1.672 1.977-1.164-1.242-1.418-1.598-1.418-2.078ZM163.264 303.387h5.063v-9.043l6.738 9.043h4.152v-17.726h-5.039v8.988l-6.734-8.988h-4.18ZM181.24 303.387h5.422l.96-2.507h6.055l.961 2.507h5.446l-6.887-17.726h-5.067Zm7.449-6.253 1.973-5.497 1.976 5.497ZM206.313 303.387h5.09v-12.992h5.394v-4.734h-15.879v4.734h5.395ZM226.998 303.766c4.79 0 7.75-2.91 7.75-7.672v-10.433h-5.09v10.101c0 2.106-.886 3.22-2.66 3.22-1.773 0-2.656-1.114-2.656-3.22v-10.101h-5.117v10.433c0 4.762 2.988 7.672 7.773 7.672ZM238.368 303.387h5.114v-5.039h1.926l2.535 5.04h5.797l-3.266-5.977c1.875-1.04 2.937-2.914 2.937-5.395 0-3.925-2.66-6.355-6.964-6.355h-8.079Zm5.012-9.117v-4.433h2.383c1.621 0 2.508.785 2.508 2.203 0 1.422-.887 2.23-2.508 2.23ZM256.6 303.387h12.434v-4.18h-7.371v-2.734h6.41v-4.101h-6.41v-2.586h7.093v-4.125H256.6Zm0 0" />
  </svg>
    </button>
  );
};

//export component
export default ScienceNatureCard;
