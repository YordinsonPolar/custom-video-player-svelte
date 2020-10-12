<script>
	import { tick } from 'svelte';
	import { playerError } from '../stores/stores.js';

	import Backward from '../icons/Backward.svelte';

	export let currentTime;
	export let paused;

	const backwardTenSeconds = async () => {
		if (currentTime - 10 < 1) currentTime = 0;
		else if(paused) currentTime -= 10;
		else {
			paused = true;
			await tick();
			currentTime -= 10;
			paused = false;
		}
	}

	const handleBackwardOnKeyPress = ({ keyCode }) => {
		if (keyCode === 37) backwardTenSeconds();
	}
</script>

<svelte:window on:keydown={handleBackwardOnKeyPress} />

<div class="backward">
	<button
		disabled={$playerError}
	 	class="icon"
	 	on:mouseup={backwardTenSeconds}>
		<Backward />
	</button>
</div>


<style>

	.backward {
		margin-left: 20px;
		transform: translateY(-1px);
	}

	.icon {
		width: var(--icon-size);
		height: var(--icon-size);
		transition: background-image 300ms;
	}
	
</style>