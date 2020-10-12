

<svg width="100%" height="100%" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%">
      <stop offset="0" style="stop-color:#4dadfe" />
      <stop offset="0.5" style="stop-color:#03f0fe" />
      <stop offset="1" style="stop-color:#41b9fe" />
    </linearGradient>
    <mask id="clock-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
     <path fill="white" d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041    v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909    c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064    c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636    l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945    c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852    c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z" data-original="#000000" style=""/>
    </mask>
  </defs>
  <g mask="url(#clock-icon-mask)">
    <rect x="0" y="0" width="512" height="512" fill="white" />
    <rect id="clock-gradient" x="0" y="0" width="512" height="512" fill="url(#gradient)" />
  </g>
</svg>


<style>
  svg {
    width: 100%;
    height: 100%
  }
	#clock-gradient {
    opacity: 0.0;
    display: inline-block;
    transition: opacity 300ms ease;
  }
  svg:hover #clock-gradient {
    opacity: 1.0;
  }
</style>