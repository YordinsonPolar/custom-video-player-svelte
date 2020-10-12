  <script>
    export let active = false;
  </script>

  <svg class:active width="100%" height="100%"viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="menu" gradientUnits="userSpaceOnUse" fy="90%">
      <stop offset="0" style="stop-color:#4dadfe" />
      <stop offset="0.5" style="stop-color:#03f0fe" />
      <stop offset="1" style="stop-color:#41b9fe" />
    </linearGradient>
    <mask id="menu-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
<path d="M432,0h-76c-44.112,0-80,35.888-80,80v76c0,44.112,35.888,80,80,80h76c44.112,0,80-35.888,80-80V80    C512,35.888,476.112,0,432,0z M472,156c0,22.056-17.944,40-40,40h-76c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h76    c22.056,0,40,17.944,40,40V156z" fill="#ffffff" data-original="#000000" style=""/>
<path d="M156,0H80C35.888,0,0,35.888,0,80v76c0,44.112,35.888,80,80,80h76c44.112,0,80-35.888,80-80V80    C236,35.888,200.112,0,156,0z M196,156c0,22.056-17.944,40-40,40H80c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h76    c22.056,0,40,17.944,40,40V156z" fill="#ffffff" data-original="#000000" style=""/>
<path d="M156,276H80c-44.112,0-80,35.888-80,80v76c0,44.112,35.888,80,80,80h76c44.112,0,80-35.888,80-80v-76    C236,311.888,200.112,276,156,276z M196,432c0,22.056-17.944,40-40,40H80c-22.056,0-40-17.944-40-40v-76c0-22.056,17.944-40,40-40    h76c22.056,0,40,17.944,40,40V432z" fill="#ffffff" data-original="#000000" style=""/>
  <path d="M492,412c-11.046,0-20,8.954-20,20c0,22.056-17.944,40-40,40h-76c-22.056,0-40-17.944-40-40v-76c0-22.056,17.944-40,40-40    h76c15.905,0,30.301,9.419,36.675,23.996c4.425,10.121,16.218,14.736,26.338,10.312c10.121-4.426,14.737-16.218,10.312-26.338    C492.582,294.829,463.8,276,432,276h-76c-44.112,0-80,35.888-80,80v76c0,44.112,35.888,80,80,80h76c44.112,0,80-35.888,80-80    C512,420.954,503.046,412,492,412z" fill="#ffffff" data-original="#000000" style=""/>
    </mask>
  </defs>
  <g mask="url(#menu-icon-mask)">
    <rect x="0" y="0" width="512" height="512" fill="white" />
    <rect id="menu-gradient" x="0" y="0" width="512" height="512" fill="url(#menu)" />
  </g>
</svg>



<style>

  svg {
   
    width: 100%;
    height: 100%
  }

  #menu-gradient {
    opacity: 0.0;
    display: inline-block;
    transition: opacity 300ms ease;
  }
  svg:hover #menu-gradient {
    opacity: 1.0;
  }

  .active #menu-gradient {
    opacity: 1.0;
  }

</style>