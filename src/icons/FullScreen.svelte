  <svg width="100%" height="100%"viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="full-screen" gradientUnits="userSpaceOnUse" fy="90%">
      <stop offset="0" style="stop-color:#4dadfe" />
      <stop offset="0.5" style="stop-color:#03f0fe" />
      <stop offset="1" style="stop-color:#41b9fe" />
    </linearGradient>
    <mask id="full-screen-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
      <path d="M191.142,162.858L68.285,40H147c11.046,0,20-8.954,20-20s-8.954-20-20-20H60C26.916,0,0,26.916,0,60v87    c0,11.046,8.954,20,20,20s20-8.954,20-20V68.285l122.858,122.858C166.763,195.048,171.881,197,177,197s10.237-1.952,14.142-5.857    C198.953,183.332,198.953,170.668,191.142,162.858z" fill="#ffffff" data-original="#000000" style=""/>
<path d="M191.142,320.858c-7.811-7.81-20.474-7.811-28.284-0.001L40,443.715V365c0-11.046-8.954-20-20-20s-20,8.954-20,20v87    c0,33.084,26.916,60,60,60h87c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H68.285l122.857-122.857    C198.953,341.332,198.953,328.668,191.142,320.858z" fill="#ffffff" data-original="#000000" style=""/>
<path d="M492,345c-11.046,0-20,8.954-20,20v78.715L349.142,320.857c-7.811-7.811-20.474-7.811-28.284,0    c-7.81,7.811-7.811,20.475,0,28.285L443.715,472H365c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h87    c33.084,0,60-26.916,60-60v-87C512,353.954,503.046,345,492,345z" fill="#ffffff" data-original="#000000" style=""/>
<path d="M452,0h-87c-11.046,0-20,8.954-20,20s8.954,20,20,20h78.715L320.858,162.857c-7.811,7.811-7.811,20.475,0,28.285    C324.763,195.048,329.881,197,335,197c5.119,0,10.237-1.952,14.142-5.857L472,68.285V147c0,11.046,8.954,20,20,20    c11.046,0,20-8.954,20-20V60C512,26.916,485.084,0,452,0z" fill="#ffffff" data-original="#000000" style=""/>
    </mask>
  </defs>
  <g mask="url(#full-screen-icon-mask)">
    <rect x="0" y="0" width="512" height="512" fill="white" />
    <rect id="full-screen-gradient" x="0" y="0" width="512" height="512" fill="url(#full-screen)" />
  </g>
</svg>



<style>

  svg {
   
    width: 100%;
    height: 100%
  }

  #full-screen-gradient {
    opacity: 0.0;
    display: inline-block;
    transition: opacity 300ms ease;
  }
  svg:hover #full-screen-gradient {
    opacity: 1.0;
  }

</style>