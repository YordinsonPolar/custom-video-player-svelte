<script>
	import { tick } from 'svelte';
	import { playerError } from '../stores/stores.js';

	import Next from '../icons/Next.svelte';

	export let currentVid;
	export let videos;
	export let paused;

	const nextEpisode = async () => {
		const idx = videos.findIndex((vid) => vid.id === currentVid.id );
		$playerError = false;
		paused = true;
		await tick()
		currentVid = videos[idx+1 >= videos.length ? idx : idx + 1];
		paused = false;
	}
</script>

<div class="next">
	<button
		disabled={currentVid.id === videos[videos.length - 1].id}
	 	class="icon"
	 	on:mouseup={nextEpisode}>
		<Next enable={currentVid.id !== videos[videos.length - 1].id} />
	</button>
</div>

<style>
	.next {
		margin-left: 5px;
		margin-right: 5px;
	}

	.icon {
		width: var(--icon-size);
		height: var(--icon-size);
		transition: background-image 300ms;
	}
	
</style>