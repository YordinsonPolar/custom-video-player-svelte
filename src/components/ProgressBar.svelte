<script>
	import { playerError } from '../stores/stores.js';
	import { format } from '../utils/formatTime.js';

	export let duration = 0;
	export let buffered = [];
	export let currentTime = 0;

	$: setBufferPosition = () => {
		if(buffered.length > 0){
			for(let i = 0; i < buffered.length; i++){
				if(currentTime >= buffered[i].start && currentTime <= buffered[i].end){
					return buffered[i].end
				} 
			}  
		}
		return 0
	}

	function currentTimeToolTip({ offsetX }) {
		if ($playerError) return;
		const tooltip  = this.childNodes[2];
		const skipTo = (offsetX / this.offsetWidth);
		if (skipTo <= 0 || skipTo >= 1) return;
		tooltip.innerText = format(skipTo * duration);
		tooltip.style.left = skipTo * 100 + '%' ;
	}

</script>

<div 
	class="custom-slider" 
	on:mousemove={currentTimeToolTip}>
	<input
		disabled={$playerError}
		class="slider"
		type="range"
		min='0' 
		step="0.01" 
		max={duration} 
		bind:value={currentTime}
		/>
		<div hidden={$playerError}  class="tooltip top-left-tooltip"></div>
	<progress class="buffer" min="0" value={setBufferPosition()} max={duration}>
	</progress>
	<div 
		style={`width: ${(( currentTime / duration) * 100) + "%"}`}
		class="progress"  ></div>
</div>


<style>

	.tooltip {
		opacity: 0;
	  position: absolute;
		background: rgba(0,0,0, .7);
    padding: 2px 5px;
	}

	.custom-slider:hover .tooltip{
		opacity: 1;
	}

	.top-left-tooltip {
    left: 0;
		bottom: 100%;
    transform: skewX(-10deg) translate(-50%, -40%);	
	}

	.top-right-tooltip {
		right: 0;
		bottom: 100%;
    transform: translate(10px, -30%);	
	}

	.custom-slider {
		position: relative;
		width: 100%;
		z-index: 1;
	}
	

	progress {
		display: block;
		width: 100%;
		height: 5px;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		transition: padding 300ms;
	}

	.buffer {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
		transform: skewX(-15deg);
		pointer-events: none;
	}
	
	.buffer::-webkit-progress-value {
		margin: 0;
		padding: 0;
		background-color: rgba(255,255,255,.33);
	}
	
	.buffer::-webkit-progress-bar {
		background-color: rgba(255,255,255,.2);
	}

	.slider[type="range"] {
		background: transparent;
		padding: 0;
		display: block;
		width: 100%;
		appearance: none;
		-webkit-appearance: none;
		overflow:hidden;
		height: 5px;
		outline: none;
		cursor: pointer;
	}
	
	.slider::-webkit-slider-thumb {
		appearance: none;
		width: 0;
		height: 0;
	}
	
	.progress {
		position: absolute;
		top:0;
		left: 0;
		pointer-events: none;
		height: 100%;
		background: var(--icon-color);
		z-index: 10;
		transform: skewX(-15deg);
	}
	
</style>