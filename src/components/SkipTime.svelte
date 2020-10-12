<script>
	import { tick, onMount } from 'svelte';
	import { timeToMiliSeconds } from '../utils/formatTime.js';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let startOrEnd = 'start';
	export let buttonMessage = "Skip";
	export let slideMessage = "INTRO";
	export let time = {};
	export let currentTime;
	export let paused;

	const action = () => {
		dispatch('action')
	};

	$: start = timeToMiliSeconds(time.start);
	$: end = timeToMiliSeconds(time.end);

	let opacityShowSkip = false;

	const handleSkipTime = async () => {
			paused = true;
			await tick();
			currentTime = end;
			paused = false;
	}

	
</script>

<div
	class="skip-container" 
	class:start={startOrEnd === 'start'}
	class:end={startOrEnd === 'end'}
	class:showSkip={currentTime >= start && currentTime <= end}
	>
	<button
		on:mouseup={handleSkipTime}
		on:click={action}
		class="skip-button"
	>{buttonMessage}</button>
	<div class="slide-container">
		<span class="slide-text">{slideMessage}</span>
	</div>
</div>


<style>
	.skip-container {
		position: absolute;
		bottom: 80px;
		font-weight: 500;
		opacity: 0;
		visibility: hidden;
		transition: 300ms opacity;
		z-index: 1;
	}
	
	.skip-button {
		position: relative;
		width: 65px;
		height: 65px;
		display: flex;
		font-size: 1.3rem;
		font-weight: 500;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 3px solid #fff;
		color: #fff;
		background: rgba(0,0,0,.7);
		cursor: pointer;
		transition: 300ms transform;
		z-index: 10;
	}

	
	.slide-container {
		position: absolute;
		top: 50%;
		min-width: 70px;
		height: 32px;
		overflow: hidden;
	}
	
	.slide-text {
		position: absolute;
		text-transform: uppercase;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		font-size: 1rem;
		align-items: center;
		justify-content: center;
		border-radius: 2px;
		background: rgba(0,0,0,.7);
		border-left-color: transparent; 
		z-index: 1;
		transition: 300ms transform;
	}
	
	.start {
		left: 30px;
	}
	
	.start .slide-container {
		right: 4px;
		transform: translate(100%, -50%);
		
	}
	
	.start .slide-container .slide-text {
		transform: translate(-100%);
	}
	
	.start:hover .skip-button {
		transform: rotate(360deg);
	}
	
	.start:hover .slide-container .slide-text{
		transform: translateX(0);
	}
	
	.end {
		right: 30px;
	}

	.end .slide-container {
		left: 4px;
		transform: translate(-100%, -50%);
	}
	
	.end .slide-container .slide-text {
		transform: translate(100%);
		
	}
	
	.end:hover .skip-button {
		transform: rotate(-360deg);
	}
	
	.end:hover .slide-container .slide-text{
		transform: translateX(0);
	}

	.showSkip {
		opacity: .2;
		visibility: visible;
		animation: delay 2s ease-in-out;
	}

	@keyframes delay {
		0% {
			opacity: 1;
		}
		80%{
			opacity: 1;
		}
		100% {
			opacity: .2;
		}
	}


	.showSkip:hover {
		opacity: 1;
	}

</style>