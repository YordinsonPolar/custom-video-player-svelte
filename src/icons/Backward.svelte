<div class="svg-container">
  <svg width="100%" height="100%"viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="backward" gradientUnits="userSpaceOnUse" fy="90%">
      <stop offset="0" style="stop-color:#4dadfe" />
      <stop offset="0.5" style="stop-color:#03f0fe" />
      <stop offset="1" style="stop-color:#41b9fe" />
    </linearGradient>
    <mask id="backward-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
    <path d="M367.585,458.394c-5.307-9.686-17.462-13.236-27.149-7.929c-25.712,14.088-54.909,21.534-84.436,21.534    c-97.047,0-176-78.953-176-176.004c0-11.046-8.954-19.998-20-19.998s-20,8.956-20,20.002c0,57.696,22.468,111.938,63.265,152.735    S198.304,511.999,256,511.999c36.226,0,72.07-9.148,103.656-26.455C369.343,480.236,372.893,468.081,367.585,458.394z" fill="#ffffff" data-original="#000000" style=""/>
      <path d="M408.735,143.264C367.938,102.467,313.696,79.999,256,79.999h-73.261l45.473-45.928c7.771-7.85,7.708-20.513-0.141-28.284    c-7.85-7.771-20.512-7.708-28.284,0.141l-51.4,51.915c-22.961,23.191-23.094,61.058-0.296,84.411l50.487,51.717    c3.919,4.015,9.113,6.029,14.313,6.029c5.037,0,10.08-1.892,13.97-5.688c7.904-7.716,8.056-20.378,0.34-28.282l-44.934-46.031H256    c97.047,0,176,78.953,176,176c0,30.425-7.881,60.403-22.792,86.691c-5.45,9.608-2.079,21.814,7.529,27.264    c3.116,1.768,6.505,2.607,9.849,2.607c6.966,0,13.733-3.645,17.415-10.136C462.318,370.13,472,333.329,472,295.999    C472,238.303,449.532,184.061,408.735,143.264z" fill="#ffffff" data-original="#000000" style=""/>
    </mask>
  </defs>
  <g mask="url(#backward-icon-mask)">
    <rect x="0" y="0" width="512" height="512" fill="white" />
    <rect id="backward-gradient" x="0" y="0" width="512" height="512" fill="url(#backward)" />
  </g>
</svg>
  <p class="text">10</p>
</div>



<style>

  .svg-container {
    position: relative;
  }
  svg {
   
    width: 100%;
    height: 100%
  }

  #backward-gradient {
    opacity: 0.0;
    display: inline-block;
    transition: opacity 300ms ease;
  }
  .svg-container:hover #backward-gradient {
    opacity: 1.0;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: 700;
    text-align: center;
    font-size: .650rem;
    color: #fff;
    transform: translate(-55%,-40%);
    transition: color 300ms;
  }

  .svg-container:hover .text {
    color: #03f0fe;
  }

</style>