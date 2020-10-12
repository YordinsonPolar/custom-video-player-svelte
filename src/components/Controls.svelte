<script>
	import { toggleEpisodesMenu } from '../stores/stores.js';
	import { format } from '../utils/formatTime.js';

	import Overview from './Overview.svelte';
	import PlayButton from './PlayButton.svelte';
	import ProgressBar from './ProgressBar.svelte';
	import Backward from './Backward.svelte';
	import NextEpisode from './NextEpisode.svelte';
	import Volume from './Volume.svelte';
	import ScreenResize from './ScreenResize.svelte';
	import EpisodesMenuButton from './EpisodesMenuButton.svelte';

	export let title;
	export let paused;
	export let currentTime;
	export let duration;
	export let buffered;
	export let volume;
	export let muted;
	export let delayControls
	export let hideControls;

	export let currentVid;
	export let videos;

	export let fsContainer;
	export let videoContainer;

	const showControls = (show) =>{
		if(show) {
			clearTimeout(delayControls)
			hideControls = false;
		}
		else if (!paused && !show && !$toggleEpisodesMenu){
		 	hideControls = true
		};
	}

</script>

<div 
	class="controls-view"
	class:hideControls
	on:mouseenter={() => showControls(true)}
	on:mouseleave={() => showControls(false)}
	>
	<Overview {title}/>
	<div class="controls">
		<PlayButton bind:paused />
		<div class="actions-center">
			<ProgressBar 
				bind:currentTime 
				bind:duration
				{buffered}/>
			<div class="actions-bottom"> 
				<Backward bind:currentTime bind:paused />
				<NextEpisode bind:currentVid bind:paused {videos} />
				<Volume bind:volume bind:muted />
				<div class="timestamp">{format(currentTime)} / {format(duration)}</div>
				<ScreenResize
					{videoContainer}
					{fsContainer}
				 />
			</div>
		</div>
		<div class="actions right">
			<EpisodesMenuButton />
		</div>
	</div>
</div>

<style>

	.controls-view {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		opacity: 1;
		visibility: visible;
		transition: 
			opacity 500ms,
			visibility 500ms;
	}

	.controls {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		width: 100%;
		background-color: var(--bg-color);
		height: var(--controls-height);
		z-index: 10;
		pointer-events: all;
	}

	.actions-center {
		margin-left: 3px;
		width: 100%;
	}

	.actions-bottom {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.timestamp {
		font-size: .9rem;
		font-family: 'Roboto';
		font-weight: 460;
		margin-left: 6px;
	}


	.hideControls {
		transition-delay: 500ms;
		visibility: hidden;
		opacity: 0;
		cursor: none;
	}

</style>