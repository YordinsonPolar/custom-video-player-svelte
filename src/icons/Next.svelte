<script>
  export let enable = true;
</script>

<svg  class:enable class:disabled={!enable} width="100%" height="100%"viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="next" gradientUnits="userSpaceOnUse" fy="90%">
      <stop offset="0" style="stop-color:#4dadfe" />
      <stop offset="0.5" style="stop-color:#03f0fe" />
      <stop offset="1" style="stop-color:#41b9fe" />
    </linearGradient>
    <mask id="next-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
 <path d="M396.456,213.569L200.434,17.547c-23.397-23.397-61.466-23.397-84.862,0C104.238,28.881,97.996,43.95,97.996,59.978    v392.044c0,16.028,6.242,31.096,17.576,42.431C127.27,506.15,142.636,512,158.003,512c15.366,0,30.732-5.85,42.431-17.547    c7.812-7.811,7.811-20.475,0-28.287c-7.811-7.812-20.475-7.812-28.287,0c-7.799,7.799-20.488,7.799-28.287,0    c-3.777-3.778-5.859-8.801-5.859-14.144V59.978c0-5.343,2.081-10.365,5.859-14.144c7.799-7.799,20.488-7.799,28.287,0    l196.022,196.022c7.799,7.799,7.799,20.488,0,28.287l-126.73,126.73c-7.812,7.811-7.811,20.475,0,28.287    c7.811,7.812,20.475,7.812,28.287,0l126.731-126.729C419.853,275.034,419.853,236.966,396.456,213.569z" fill="#ffffff" data-original="#000000" style=""/>
    </mask>
  </defs>
  <g mask="url(#next-icon-mask)">
    <rect x="0" y="0" width="512" height="512" fill="white" />
    <rect id="next-gradient" x="0" y="0" width="512" height="512" fill="url(#next)" />
  </g>
</svg>



<style>

  svg {
    width: 100%;
    height: 100%
  }

  #next-gradient {
    opacity: 0.0;
    display: inline-block;
    transition: opacity 300ms ease;
  }

  .enable:hover #next-gradient {
    opacity: 1.0;
  }

  .disabled {
    opacity: .4;
    cursor: default;
  }

</style>