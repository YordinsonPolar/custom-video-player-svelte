<script>
	import Play from '../icons/Play.svelte';
	import Pause from '../icons/Pause.svelte';
	import { playerError }  from '../stores/stores.js';
	export let paused;

	const togglePlay = () => {
		paused = !paused
	}

</script>

<div class="play-button" >
	<button class="button" disabled={$playerError}  on:mouseup={togglePlay}>
		<div class=" icon" >
			{#if paused}
		 		<Play /> 
		 	{:else}
		 		<Pause />
			{/if}
		 </div>		
	</button>
</div>


<style>
	

	.play-button {
		position: relative;
		width: 70px;
		height: var(--controls-height);
		z-index: 10;
	}

	.button {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 170px;
		height: 190px;
		border-radius: 50%;
		background: var(--bg-color);
		transform: translate(10%,52%);
	}

	.icon {
		background-size: cover;
    position: absolute;
    top: 36px;
    right: 31px;
    width: calc(var(--icon-size) * 1.4);
    height: calc(var(--icon-size) * 1.4);
    transition: background-image 300ms, transform 300ms;
	}

	

</style>