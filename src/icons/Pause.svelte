

<svg width="96px" height="96px" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="pause" gradientUnits="userSpaceOnUse" fy="90%">
      <stop offset="0" style="stop-color:#4dadfe" />
      <stop offset="0.5" style="stop-color:#03f0fe" />
      <stop offset="1" style="stop-color:#41b9fe" />
    </linearGradient>
    <mask id="pause-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
    <path d="M124.5,0h-35c-44.112,0-80,35.888-80,80v352c0,44.112,35.888,80,80,80h35c44.112,0,80-35.888,80-80V80    C204.5,35.888,168.612,0,124.5,0z M164.5,432c0,22.056-17.944,40-40,40h-35c-22.056,0-40-17.944-40-40V80    c0-22.056,17.944-40,40-40h35c22.056,0,40,17.944,40,40V432z" fill="#ffffff" data-original="#000000" style="" class=""/>
    <path d="M482.5,352c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80h-34c-44.112,0-80,35.888-80,80v352    c0,44.112,35.888,80,80,80h34c44.112,0,80-35.888,80-80c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20    c0,22.056-17.944,40-40,40h-34c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h34c22.056,0,40,17.944,40,40v252    C462.5,343.046,471.454,352,482.5,352z" fill="#ffffff" data-original="#000000" style="" class=""/>
    </mask>
  </defs>
  <g mask="url(#pause-icon-mask)">
    <rect x="0" y="0" width="512" height="512" fill="white" />
    <rect id="pause-gradient" x="0" y="0" width="512" height="512" fill="url(#pause)" />
  </g>
</svg>


<style>
  svg {
    width: 100%;
    height: 100%;
    animation: vanish 300ms ease;
  }

  @keyframes vanish {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  #pause-gradient {
    opacity: 0.0;
    display: inline-block;
    transition: opacity 300ms ease;
  }
  svg:hover #pause-gradient {
    opacity: 1.0;
  }
</style>