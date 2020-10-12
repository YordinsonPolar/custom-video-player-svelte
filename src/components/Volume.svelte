<script>
	import Volume from '../icons/Volume.svelte';
	import Mute from '../icons/Mute.svelte';

	export let muted;
	export let volume;

	$: {
		if(volume < 0.05) muted = true;
		else if(volume > 0.05) muted = false;
	}
	
	const toggleVolume = () => muted = !muted;
	const handleInput = ({ target }) => volume = target.value;

</script>

<div class="volume">
	<button 
		on:click={toggleVolume} 
		class="icon" >
			{#if !muted}
				<Volume />
			{:else}
				<Mute />	
			{/if}
	</button>
	<div class="custom-slider">
		<input 
			class="slider" 
			type="range" 
			min="0" 
			max="1" 
			on:input={handleInput} 
			value={muted ? 0 : volume} 
			step="0.01" 
			/>
		<div
			style={`width: ${( muted ? 0 : volume * 100) + "%"}`} 
		 	class="progress"></div>
	</div>
</div>


<style>
	.volume {
		overflow: hidden;
		margin-left: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120px;
	}

	.custom-slider {
		margin-left: 10px;
		position: relative;
		width: 100%;
		margin-bottom: 1px;
	}

	.icon {
		width: var(--icon-size);
		height: var(--icon-size);
	}

	.slider[type="range"] {
		display: block;
		background: rgba(255,255,255, .5);
		width: 100%;
		outline: none;
		height: 2px;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
	}
	input[type=range] {
	  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
	  width: 100%; /* Specific width is required for Firefox. */
	  background: transparent; /* Otherwise white in Chrome */
	}

	input[type=range]::-webkit-slider-thumb {
	  -webkit-appearance: none;
	}

	input[type=range]:focus {
	  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
	}

	input[type=range]::-ms-track {
	  width: 100%;
	  cursor: pointer;

	  /* Hides the slider so custom styles can be added */
	  background: transparent; 
	  border-color: transparent;
	  color: transparent;
	}

	input[type=range]::-moz-range-thumb {
		position: relative;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		width: 10px;
		height: 10px;
		background: var(--icon-color);
		border-radius: 50%;
		z-index: 10;
		border: none;
	}

/* All the same stuff for IE */
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
	.slider::-webkit-slider-thumb {
		position: relative;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		width: 10px;
		height: 10px;
		background: var(--icon-color);
		border-radius: 50%;
		z-index: 10;
	}



	
	.progress {
		position: absolute;
		top:0;
		left: 0;
		pointer-events: none;
		height: 100%;
		background: linear-gradient(to left, #4dadfe, #03f0fe, #41b9fe);
		z-index: 1;
	}
	
</style>