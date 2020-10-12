<script>
	import { tick } from 'svelte';
	import { toggleEpisodesMenu, playerError } from '../stores/stores.js';
	import { timeToMiliSeconds } from '../utils/formatTime.js';
	import { 
		saveItemOnLocalStorage,
		getItemOnLocalStorage, 
		currentVideoTimeAlreadyExist,
		clearVideoTime
		} from '../utils/videoMemory.js';

	import NetworkStatus from './NetworkStatus.svelte'
	import PlayButtonScreen from './PlayScreenButton.svelte';
	import Loading from './Loading.svelte';
	import Error from './Error.svelte';
	import SkipTime from './SkipTime.svelte';

	import Overview from './Overview.svelte';
	import Controls from './Controls.svelte';
	import Episodes from './Episodes.svelte';

	export let videos = [];

	let currentVid = videos[0];

 // Controls
	let paused = true;
	let currentTime = 0;
	let duration = 0;
	let buffered = [];
	let volume = 1;
	let muted = false;
	let loading = false;
	let error = false;
	let loadStart = false;

	let delayControls = null;
	let hideControls = false;
	let fsContainer = null;
	let videoContainer = null;

	let skipEndingOrNextEpisode = currentTime - 3 <= timeToMiliSeconds(currentVid.skipTime.endingTime.end);

	const togglePlay = () => {
		if($playerError) return
		paused = !paused
		toggleControls()
	}

	const handleError = (e) => { 
		error = e.target.error;
		loading = false;
		playerError.set(true);
	}

	const toggleLoading = (isLoading) => {
		loading = !!isLoading && loadStart
	};

	function toggleControls() {
		delayControls = clearTimeout(delayControls)
		hideControls = false;

		if (!paused && !$toggleEpisodesMenu) {
			delayControls = setTimeout(() => {
				hideControls = true;
			},1000)
		}	
	}

	const isVideoStart = () => {
		const savedTime = JSON.parse(localStorage.getItem('videos')) || [];
		const exist = savedTime.find((vid) => vid.id === currentVid.id);
		if (exist) {
			paused = true;
			loading = true;
			currentTime = exist.time
		}
		loadStart = true;
		paused = false;
	}

	const resetPlayerState = () => {
		duration = 0;
		currentTime = 0;
		buffered = [];
		error = false;
	}

	const saveTimeOnLeave = () => {
		if(currentTime < 1) return;

		const actualTime = {
			id: currentVid.id,
			time: currentTime,
		}

		let getVideos = getItemOnLocalStorage('videos') || [];
		const exist = currentVideoTimeAlreadyExist(getVideos, actualTime.id);

		if (exist === -1) {
			getVideos = [...getVideos, actualTime];
			saveItemOnLocalStorage('videos', getVideos);
		}else {
			getVideos[exist] = actualTime;
			saveItemOnLocalStorage('videos', getVideos);
		}
	}

	const nextEpisode = async () => {
		const idx = videos.findIndex((vid) => vid.id === currentVid.id );
		paused = true;
		await tick()
		clearVideoTime(currentVid.id);
		currentVid = videos[idx+1 >= videos.length ? idx : idx + 1];
		paused = false;
	}

	const forwardTenSeconds = async () => {
		if (currentTime + 10 >= duration ) currentTime = duration;
		else if(paused) currentTime += 10;
		else {
			paused = true;
			await tick();
			currentTime += 10;
			paused = false;
		}
	}

	const handleKeyShortcuts = ({ keyCode }) => {
		switch(keyCode){ 
			case 80: togglePlay(); break;
			case 39: forwardTenSeconds(); break;
			case 32: togglePlay(); break;
		}
	} 
	
</script>

<svelte:window 
	on:unload={saveTimeOnLeave}
	on:keydown={handleKeyShortcuts}
	 />
	

<div 
	class="player"
	bind:this={fsContainer}
	>
	{#if $playerError}
		<Error {error} />
	{:else}
		<NetworkStatus />
		<Loading {loading}/>
		<PlayButtonScreen {paused} bind:loadStart />
		{#if currentVid.skipTime}
			<SkipTime
				bind:paused 
				bind:currentTime 
				time={currentVid.skipTime.introTime} />
			<SkipTime
				bind:paused 
				bind:currentTime
				startOrEnd="end"
				buttonMessage={ skipEndingOrNextEpisode ? "Next" : 'Skip'}
				slideMessage={ skipEndingOrNextEpisode ? "EPISODE" : 'ENDING'}
				on:action={ skipEndingOrNextEpisode  && nextEpisode}
				time={currentVid.skipTime.endingTime} />
		{/if}
	{/if}
	<video
		preload={loadStart ? 'true': 'none'}
		class:hideCursor={hideControls}
		on:mousemove|self={toggleControls}
		poster={currentVid.poster}
		src={currentVid.src}
		bind:currentTime
		bind:buffered
		bind:paused
		bind:duration
		bind:volume
		bind:muted
		bind:this={videoContainer}
		on:emptied={resetPlayerState}
		on:loadedmetadata={isVideoStart}
		on:click={togglePlay}
		on:canplay={() => toggleLoading(false) }
		on:waiting={() => toggleLoading(true) }
		on:error={handleError}
	>
	<track kind="captions"> 
	</video>
	<Controls 
		bind:paused
		bind:currentTime 
		bind:buffered 
		bind:duration
		bind:volume
		bind:muted
		bind:hideControls
		bind:delayControls
		bind:currentVid
		title={currentVid.title}
		{videos}
		{videoContainer}
		{fsContainer}
		 />
	<Episodes {videos} bind:currentVid bind:paused />
</div>


<style>

	.player {
		background: #000;
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	.hideCursor {
		cursor: none;
		transition: 300ms cursor;
	}

</style>