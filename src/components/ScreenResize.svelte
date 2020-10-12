<script>
	import FullScreen from '../icons/FullScreen.svelte';
	import LeaveFullScreen from '../icons/LeaveFullScreen.svelte';
	import ExternalWindow from '../icons/ExternalWindow.svelte';

	export let fsContainer;
  export let videoContainer;

	let isFull = false;

	const fullscreenSupport = !!(
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled ||
    false
  );

	const requestFullscreen = () => {
    const requestFS = (
      fsContainer.requestFullscreen ||
      fsContainer.mozRequestFullScreen ||
      fsContainer.webkitRequestFullscreen ||
      fsContainer.msRequestFullscreen ||
      noop
    ).bind(fsContainer);
    requestFS();
  };

  const exitFullscreen = (
    document.exitFullscreen ||
    document.mozCancelFullScreen ||
    document.webkitExitFullscreen ||
    document.msExitFullscreen ||
    noop
  ).bind(document);


  const fsToggle = () => {
    if (!fullscreenSupport) return;

    if (isFull) {
      exitFullscreen();
    } else {
      requestFullscreen(fsContainer);
    }
  };

  const checkFullScreen = () => {
  	if(document.fullscreenElement){
  		isFull = true;
  	}
  	else {
  		isFull = false;
  	}
  }

  const fullScreenOnKeyPress = ({ key }) => {
    if (!fullscreenSupport) return;
    if (key === 'f' || key === "F") fsToggle();
  }

  async function togglePip() {
    try {
      if (videoContainer !== document.pictureInPictureElement) {
        await videoContainer.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (error) {
      console.error(error)
    }
  }

</script>

<svelte:window
  on:keypress={fullScreenOnKeyPress} 
  on:fullscreenchange={checkFullScreen} />

<div class="screen">
	<button class="icon modal" on:click={togglePip} >
		<ExternalWindow />
	</button>
		<button
			disabled={ !fullscreenSupport || !fsContainer }
			on:click={fsToggle}
			class="icon" 
			>
			{#if isFull}
				<LeaveFullScreen />
			{:else}
				<FullScreen />
			{/if}
		</button>
</div>

<style>
	.screen {
		margin-left: auto;
		margin-right: 20px;
	}

	.icon {
		width: 1.210rem;
		height: 1.210rem;
	}

	.modal {
		margin-right: 5px;
	}



</style>