<script>
	import { tick } from 'svelte';
	import { toggleEpisodesMenu, playerError } from '../stores/stores.js';

	export let currentVid;
	export let paused;
	export let videos = [];
	export let indexStart = 1;

	const toggleEpisode = async (video) => {
		$toggleEpisodesMenu = false;
		$playerError = false;
		paused = true;
		await tick()
		currentVid = video;
		paused = false;
	}

</script>

<div 
	class="episodes" 
	class:toggleEpisodesMenu={$toggleEpisodesMenu}>
	{#each videos as video,idx}
		<a 
			href="#" 
			class="episode" 
			on:click={() => toggleEpisode(video)}
			>
			<div class="img-container" class:watching={currentVid.id === video.id}>
				<img class="img" src={video.poster} alt="episode" />
			</div>
			<div class="title">Episode {idx + indexStart}</div>
		</a>
	{/each}
</div>

<style>
	.episodes {
		position: absolute;
		bottom: var(--controls-height);
		left: 0;
		right: 0;
		background: rgba(0,0,0, 8);
		z-index: 2;
		display: flex;
		visibility: hidden;
		overflow-x: auto;
		padding: 15px;
		transform: translateY(120%);
		transition: 
			transform 300ms,
			visibility 300ms;
	}

	.episode {
		text-align: center;
		font-weight: 500;
		margin: 10px;
	}

	.img-container {
		position: relative;
		width: 130px;
		height: 90px;
	}

	.img {
		border-radius: 4px;
	}

	.title {
		margin-top: 5px;
	}

	.toggleEpisodesMenu {
		visibility: visible;
		transform: translateY(0);
	}

	.watching::after {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
		content: "WATCHING";
		background: rgba(0,0,0,.7);
		border-radius: 4px;
	}
</style>