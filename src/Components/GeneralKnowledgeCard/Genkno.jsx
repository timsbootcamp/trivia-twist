import React, { useState } from 'react';
import './index.css'; 
import '../../Styles/cardSelection.css'

// Functional component GenKnoCards which renders a button representing the "General Knowledge" category.
// Accepts a prop onSelectCategory function to handle the selection of the category.
const GenKnoCards = ({ onSelectCategory }) => {
  // Function to handle the selection of the "General Knowledge" category.
  const handleSelectCategory = () => {
    onSelectCategory('General Knowledge'); 
  };

  return (
    // Button component representing the "General Knowledge" category.
    <button className='categoryBtn GenKno' onClick={handleSelectCategory}>
  <svg className='cardSelection'
      xmlns="http://www.w3.org/2000/svg"
      version="1"
      viewBox="0 0 299.25 341.25"
    >
      <defs>
        <filter id="a75df7db7b" width="100%" height="100%" x="0%" y="0%">
          <feColorMatrix
            colorInterpolationFilters="sRGB"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          ></feColorMatrix>
        </filter>
        <mask id="c861d5a377">
          <g filter="url(#a75df7db7b)">
            <path
              fillOpacity="0.41"
              d="M-29.925 -34.125H329.175V375.375H-29.925z"
            ></path>
          </g>
        </mask>
        <clipPath id="2ce3c41834">
          <path d="M.633.98h281.555v259.274H.632zm0 0"></path>
        </clipPath>
        <clipPath id="ccd36da1e7">
          <path d="M38.785.98h205.61a38.152 38.152 0 0138.156 38.157v182.965a38.152 38.152 0 01-38.156 38.152H38.785a38.16 38.16 0 01-26.98-11.176A38.156 38.156 0 01.633 222.102V39.137a38.165 38.165 0 0111.172-26.98A38.16 38.16 0 0138.785.98zm0 0"></path>
        </clipPath>
        <linearGradient
          id="74e2b8d6c6"
          x1="0"
          x2="278"
          y1="0"
          y2="0"
          gradientTransform="matrix(1.01279 0 0 1.01279 .631 .981)"
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
        <clipPath id="54f16f128b">
          <path d="M0 0H284V261H0z"></path>
        </clipPath>
        <clipPath id="aa5a692fe7">
          <path d="M7 1.164h277V334H7zm0 0"></path>
        </clipPath>
        <clipPath id="6466152527">
          <path d="M11.84 333.527h267.18a4.758 4.758 0 004.796-4.797V6.262a4.756 4.756 0 00-4.796-4.797H11.84a4.756 4.756 0 00-4.797 4.797V328.73a4.758 4.758 0 004.797 4.797zm0 0"></path>
        </clipPath>
        <clipPath id="8982a0a9f6">
          <path d="M5.633.05h284.25v339.774H5.633zm0 0"></path>
        </clipPath>
        <clipPath id="01c824fbf9">
          <path d="M285.086 4.992c-.563-2.824-3.102-4.941-6.066-4.941H11.84c-3.387 0-6.207 2.824-6.207 6.21v322.47c0 2.96 1.972 5.359 4.797 6.066.562 2.82 3.101 4.937 6.066 4.937h267.18c3.387 0 6.207-2.82 6.207-6.207V11.06c0-2.965-1.973-5.364-4.797-6.067zM7.043 328.73V6.262a4.756 4.756 0 014.797-4.797h267.18a4.756 4.756 0 014.796 4.797V328.73a4.758 4.758 0 01-4.796 4.797H11.84a4.758 4.758 0 01-4.797-4.797zm0 0"></path>
        </clipPath>
        <clipPath id="cbbe1ebbf8">
          <path d="M211 97h28.793v12H211zm0 0"></path>
        </clipPath>
      </defs>
      <g mask="url(#c861d5a377)">
        <g clipPath="url(#54f16f128b)" transform="translate(5 1)">
          <g clipPath="url(#2ce3c41834)">
            <g clipPath="url(#ccd36da1e7)">
              <path
                fill="url(#74e2b8d6c6)"
                d="M.633.98v259.274h281.555V.98zm0 0"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#aa5a692fe7)">
        <g clipPath="url(#6466152527)">
          <path fill="#ed80ff" d="M5.633.05h284.25v339.774H5.633zm0 0"></path>
        </g>
      </g>
      <g clipPath="url(#8982a0a9f6)">
        <g clipPath="url(#01c824fbf9)">
          <path fill="#231f20" d="M5.633.05h284.25v339.774H5.633zm0 0"></path>
        </g>
      </g>
      <path d="M150.504 74.336c-27.258.027-49.43 22.176-49.43 49.402.028 13.996 5.989 27.395 16.692 36.934.058.055 4.152 3.047 3.476 8.125-.086.93-.226 1.836-.367 2.707-.875 5.672-2.09 13.488 7.879 16.027.367.114.734.168 1.16.254v13.035c0 .594-.027 1.184-.059 1.836-.113 2.114-.253 4.485.653 6.856 1.469 3.808 5.222 6.8 10.254 8.265.168 1.383.648 3.133 1.949 4.63 1.07 1.269 3.133 2.734 6.777 2.734 3.559 0 5.676-1.438 6.836-2.653 1.356-1.41 1.95-3.074 2.23-4.398.876-.227 1.723-.453 2.571-.82 3.191-1.325 5.734-3.836 7.121-7.083 1.664-3.921 1.524-8.324 1.356-12.16a71.39 71.39 0 01-.086-3.5l.086-6.629c.875-.14 1.55-.308 2.003-.48 7.598-2.961 10.48-8.746 8.872-17.606-1.301-7.195 4.12-10.523 4.406-10.69.226-.145.449-.286.62-.481 9.349-9.313 14.49-21.754 14.49-34.93-.028-27.227-22.2-49.375-49.49-49.375zm8.277 137.289c-2.117.875-4.828.906-7.543.96h-1.101c-2.09.028-4.067.06-5.989-.28-3.671-.68-6.55-2.371-7.625-4.43h26.043a7.124 7.124 0 01-3.785 3.75zm-22.793-9.844c.055-.34.055-.648.055-.96v-2.2h27.426c.086 1.043.113 2.086.113 3.129zm27.82-98.808c1.329.648 2.91.28 3.786-.903.254-.367.761-.566 1.3-.539 2.317.172 4.747 3.051 5.34 5.278.141.789.223 2.879.141 4.457-1.98-.254-4.266-.141-6.188.875-2.257-1.778-4.519-2.567-4.886-2.68-1.555-.563-3.278.312-3.84 1.918-.512 1.582.336 3.3 1.918 3.867.059 0 2.715.957 4.21 2.906.563.762.876 1.524.903 2.371a3.055 3.055 0 003.051 2.848h.227a3.078 3.078 0 002.824-3.273c-.055-.989-.281-1.918-.594-2.82.172-.028.367-.028.54-.028.76 0 1.608.113 2.257.309.988.875 3.137 2.82 3.418 3.105 2.148 2.367 2.91 4.063 2.484 5.613-.195.79-.62 1.664-1.242 2.567-.45.426-2.484 1.441-4.266 2.09-1.183.449-1.949 1.609-1.949 2.879 0 1.41.793 2.507 1.469 3.468.312.422.879 1.184.906 1.524.34 1.976-.027 3.922-1.074 5.332-.875 1.156-2.063 1.836-3.559 2.058-.367-2-1.382-4.257-3.39-6.035a22.888 22.888 0 001.695-3.332c.707-1.523 0-3.328-1.523-4.031-1.555-.652-3.364.027-4.07 1.578-.903 2.059-1.778 3.469-2.544 4.484l-.027.086c-.113.086-.168.2-.254.282-.055.03-.113.058-.113.085-1.328 1.497-2.317 1.75-2.738 1.61-1.442-.734-3.223-.227-4.012 1.156-.875 1.465-.395 3.3 1.074 4.176.281.195 1.441.789 3.191.789a7.28 7.28 0 002.29-.367c1.128-.336 2.171-.93 3.19-1.778 1.497 1.47 1.384 3.387 1.329 3.868-.059.168-.059.308-.059.507-.34.676-.675 1.325-.988 1.946-1.043 2.09-1.637 3.273-3.531 4.148-2.738 1.27-5.734-.453-7.23-1.523v-21.781c2.117 2.085 4.519 3.128 7.144 3.128.172 0 .398-.027.594-.027a3.042 3.042 0 002.457-1.465c.48-.875.539-1.918.113-2.824-.45-1.043-1.918-5.445-.281-7.703.988-1.352.68-3.27-.676-4.258-1.414-.988-3.309-.648-4.266.703-1.527 2.145-2.007 4.602-1.922 6.86a21.95 21.95 0 01-2.316-4.067l-.281-.59c-.172-.312-.34-.566-.594-.761v-26.41c2.512-2.512 5.875-1.297 6.75-.93 2.57 1.918 2.738 3.695 2.203 5.699-.394 1.437.281 2.934 1.61 3.555zm-.34 85.601l-.027 3.953h-27.398v-4.035c4.18.336 9.348.477 14.434.477 4.66 0 9.238-.14 12.992-.395zm17.997-34.504c-1.867 1.211-8.871 6.516-7.008 16.817 1.414 7.644-1.723 9.535-5.082 10.86-1.496.538-8.332.96-16.016 1.073 1.836-4.234 3.586-11.203 2.032-21.273a12.29 12.29 0 003.082.367c1.468 0 3.047-.254 4.574-.988 3.84-1.805 5.226-4.543 6.469-6.996.226-.48.48-1.016.789-1.555.398 0 .847-.055 1.414-.113 3.136-.422 5.875-2 7.738-4.512 2.035-2.71 2.824-6.379 2.203-10.016-.168-.933-.562-1.808-.988-2.543 1.582-.761 2.969-1.691 3.672-2.68.734-1.07 1.781-2.734 2.289-4.71 1.242-4.824-1.61-8.719-3.871-11.23-.989-1.13-1.864-1.946-2.57-2.622.765-3.527-.028-8.465-.028-8.55-1.129-4.57-5.508-9.536-10.789-9.962h-1.047c-.594-2.593-2.258-4.878-5.027-6.828a1.218 1.218 0 00-.395-.254c-2.742-1.382-8.644-2.652-13.219 1.215-2.203-1.129-5.652-2.37-9.351-1.496-3.531.875-6.441 3.442-8.559 7.59-3.023.594-8.644 2.484-10.93 8.438-1.5 3.863-1.273 6.882-.398 9.027-2.539 1.976-5.816 5.418-6.156 10.27-.367 5.503 1.102 9.593 4.547 12.445-.676 2.62-1.102 6.969 1.387 11.34 2.312 4.148 6.015 5.472 9.007 5.644.68 2.82 2.457 6.688 7.09 8.832 1.5.649 3.024.93 4.438.93 3.191 0 6.07-1.324 8.218-2.567 2.625 13.372-.933 20.454-2.515 22.797-6.836-.058-13.219-.422-16.156-1.187-4.239-1.07-4.407-2.594-3.391-9.196.14-.933.312-1.89.398-2.851 1.102-8.66-5.68-13.656-5.707-13.656a43.277 43.277 0 01-14.406-32.192c-.027-23.84 19.434-43.281 43.3-43.281 23.9-.027 43.36 19.41 43.36 43.254 0 11.453-4.406 22.23-12.398 30.36zm-46.156-48.25c1.382 2.625 5.168 6.97 10.48 6.97.45 0 .902-.056 1.356-.083v41.137c-1.723 1.297-5.395 3.554-8.278 2.258-3.926-1.809-3.926-6.266-3.926-6.434v-.086l5.536-7.39s0-.028.03-.087c.255-.085 1.102.114 1.692.454 1.414.843 3.305.394 4.184-1.047.875-1.41.422-3.301-1.02-4.176-1.355-.844-3.078-1.352-4.715-1.324-.48-2.344-1.386-4.938-3.304-6.348-1.356-.96-3.278-.707-4.266.621-1.02 1.383-.734 3.3.621 4.29.535.507 1.043 2.706 1.242 4.823l-5.48 7.336c-1.188-.086-2.852-.62-3.926-2.539-2.23-3.98-.394-8.07-.312-8.21.707-1.47.172-3.16-1.211-3.981-2.008-1.156-3.957-2.988-3.617-8.18.199-3.3 3.39-5.699 4.886-6.633 2.035.34 4.719 1.13 6.469 2.371-1.215 1.184-2.148 2.54-2.656 3.614a3.067 3.067 0 001.496 4.062c.426.196.847.282 1.3.282 1.157 0 2.231-.649 2.77-1.75.195-.422 1.95-3.95 5.281-2.594 1.555.59 3.36-.145 3.98-1.696.653-1.578-.14-3.355-1.69-3.976-1.696-.68-3.25-.875-4.665-.793-2.964-3.695-8.754-5.106-11.296-5.527-.368-.649-.82-2.118.253-4.883 1.696-4.371 7.23-4.797 7.457-4.797a3.084 3.084 0 002.657-1.832c1.383-3.246 3.133-5.137 5.113-5.645 1.89-.48 4.04.368 5.395 1.13V106.5c-.086 0-.172 0-.282.027-3.644.989-6.047-3.328-6.16-3.582-.762-1.468-2.598-2.062-4.125-1.242-1.496.762-2.031 2.594-1.27 4.117zm0 0M86.328 109.46c-.34 0-.676-.054-.988-.167l-21.805-7.535c-1.613-.563-2.43-2.285-1.894-3.89.566-1.583 2.289-2.458 3.898-1.891l21.805 7.53c1.613.567 2.43 2.286 1.894 3.895a3.087 3.087 0 01-2.91 2.059zm0 0M106.27 71.598a3.165 3.165 0 01-2.317-1.043L88.785 53.172a3.046 3.046 0 01.313-4.317 3.054 3.054 0 014.32.313l15.168 17.379a3.049 3.049 0 01-.309 4.316c-.566.508-1.3.735-2.007.735zm0 0M148.586 55.348c-1.695 0-3.05-1.356-3.05-3.02l-.145-23.055c0-1.691 1.359-3.046 3.05-3.074h.032c1.695 0 3.05 1.356 3.05 3.02l.141 23.05c-.027 1.696-1.387 3.079-3.078 3.079zm0 0M192.96 72.047c-.651 0-1.3-.195-1.835-.617-1.355-1.016-1.61-2.938-.594-4.29l13.953-18.367c1.016-1.355 2.938-1.609 4.293-.593 1.356 1.015 1.61 2.933.594 4.289l-13.953 18.367a3.04 3.04 0 01-2.457 1.21zm0 0"></path>
      <g clipPath="url(#cbbe1ebbf8)">
        <path d="M214.23 108.98c-1.382 0-2.628-.93-2.964-2.312-.399-1.637.59-3.3 2.23-3.695l22.399-5.559c1.64-.394 3.304.594 3.699 2.23.398 1.633-.59 3.301-2.23 3.696l-22.4 5.558c-.253.055-.48.082-.734.082zm0 0"></path>
      </g>
      <path
        d="M10.832.398c6.398 0 10.41-4.648 9.824-11.18H9.902v3.774h5.125c-.53 1.567-2.015 2.625-4.14 2.625-2.973 0-4.7-2.094-4.7-4.91 0-2.922 1.883-4.91 4.645-4.91 1.648 0 3.055.715 3.77 1.883h5.71c-1.09-4.063-4.859-6.664-9.558-6.664C4.91-18.984.902-15 .902-9.293c0 5.734 4.035 9.691 9.93 9.691zm0 0"
        transform="translate(84.251 270.883)"
      ></path>
      <path
        d="M1.965 0H15v-4.383H7.273V-7.25h6.72v-4.3h-6.72v-2.708h7.438v-4.328H1.965zm0 0"
        transform="translate(105.807 270.883)"
      ></path>
      <path
        d="M1.965 0h5.308v-9.48L14.336 0h4.355v-18.586h-5.28v9.426l-7.067-9.426h-4.38zm0 0"
        transform="translate(122 270.883)"
      ></path>
      <path
        d="M1.965 0H15v-4.383H7.273V-7.25h6.72v-4.3h-6.72v-2.708h7.438v-4.328H1.965zm0 0"
        transform="translate(142.68 270.883)"
      ></path>
      <path
        d="M1.965 0h5.363v-5.285h2.02L12 0h6.082l-3.426-6.266c1.965-1.09 3.078-3.054 3.078-5.656 0-4.113-2.785-6.664-7.3-6.664h-8.47zm5.258-9.559v-4.644h2.496c1.699 0 2.629.82 2.629 2.308 0 1.489-.93 2.336-2.63 2.336zm0 0"
        transform="translate(158.874 270.883)"
      ></path>
      <path
        d="M.133 0h5.683l1.008-2.629h6.344L14.18 0h5.707l-7.223-18.586H7.355zm7.804-6.559l2.07-5.761 2.075 5.761zm0 0"
        transform="translate(177.987 270.883)"
      ></path>
      <path
        d="M1.965 0h12.957v-4.965H7.328v-13.62H1.965zm0 0"
        transform="translate(198.004 270.883)"
      ></path>
      <path
        d="M1.965 0h5.363v-7.035h2.336L13.223 0h6.21l-4.882-9.027c.558-.664 1.062-1.54 1.484-2.63l2.762-6.929h-5.813l-1.671 4.648c-.56 1.618-1.172 2.016-3.083 2.016h-.902v-6.664H1.965zm0 0"
        transform="translate(57.576 307.541)"
      ></path>
      <path
        d="M1.965 0h5.308v-9.48L14.336 0h4.355v-18.586h-5.28v9.426l-7.067-9.426h-4.38zm0 0"
        transform="translate(77.645 307.541)"
      ></path>
      <path
        d="M11.02.398c5.921 0 10.113-4.007 10.113-9.691 0-5.684-4.192-9.691-10.113-9.691-5.922 0-10.118 4.007-10.118 9.691C.902-3.609 5.098.398 11.02.398zM6.344-9.293c0-2.789 1.941-4.727 4.676-4.727 2.761 0 4.671 1.938 4.671 4.727 0 2.79-1.91 4.727-4.671 4.727-2.735 0-4.676-1.938-4.676-4.727zm0 0"
        transform="translate(98.325 307.541)"
      ></path>
      <path
        d="M6.105 0h5.34l3.371-10.328L18.187 0h5.336L29.5-18.586h-5.629l-1.305 4.14-1.91 5.95-3.293-10.09h-5.097l-1.38 4.14L9-8.655l-1.883-5.79-1.3-4.14H.132zm0 0"
        transform="translate(120.385 307.541)"
      ></path>
      <path
        d="M1.965 0h12.957v-4.965H7.328v-13.62H1.965zm0 0"
        transform="translate(150.011 307.541)"
      ></path>
      <path
        d="M1.965 0H15v-4.383H7.273V-7.25h6.72v-4.3h-6.72v-2.708h7.438v-4.328H1.965zm0 0"
        transform="translate(165.594 307.541)"
      ></path>
      <path
        d="M1.965 0h7.887c6 0 9.98-3.691 9.98-9.293 0-5.574-3.98-9.293-9.98-9.293H1.965zm5.363-4.805v-8.976h2.363c2.84 0 4.672 1.754 4.672 4.488 0 2.734-1.832 4.488-4.672 4.488zm0 0"
        transform="translate(181.788 307.541)"
      ></path>
      <path
        d="M10.832.398c6.398 0 10.41-4.648 9.824-11.18H9.902v3.774h5.125c-.53 1.567-2.015 2.625-4.14 2.625-2.973 0-4.7-2.094-4.7-4.91 0-2.922 1.883-4.91 4.645-4.91 1.648 0 3.055.715 3.77 1.883h5.71c-1.09-4.063-4.859-6.664-9.558-6.664C4.91-18.984.902-15 .902-9.293c0 5.734 4.035 9.691 9.93 9.691zm0 0"
        transform="translate(202.52 307.541)"
      ></path>
      <path
        d="M1.965 0H15v-4.383H7.273V-7.25h6.72v-4.3h-6.72v-2.708h7.438v-4.328H1.965zm0 0"
        transform="translate(224.077 307.541)"
      ></path>
    </svg>

    </button>
  );
};

export default GenKnoCards;
