<script>
	import { toggleEpisodesMenu } from '../stores/stores.js';

	import EpisodesMenu from '../icons/EpisodesMenu.svelte';

	const ToggleMenu = () => {
		$toggleEpisodesMenu = !$toggleEpisodesMenu;
	}

</script>

<div class="show-episodes">
	<button 
		on:click={ToggleMenu}
		class="button"
	>	
		<span class="icon" class:toggleEpisodesMenu={$toggleEpisodesMenu}>
			<EpisodesMenu active={$toggleEpisodesMenu} />
		</span>
	</button> 
</div>


<style>
	.show-episodes {
		position: relative;
		width: 55px;
		height: var(--controls-height);
		z-index: 10;
	}

	.button {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 150px;
		height: 170px;
		border-radius: 50%;
		background: var(--bg-color);
		transform: translate(-10%,52%);
	}

	.icon {
		position: absolute;
		top: 38px;
		left: 35px;
		width: var(--icon-size);
		height: var(--icon-size);
		transition: transform 300ms;
	}

	
	.toggleEpisodesMenu {
		transform: rotate(360deg);
	}
</style>