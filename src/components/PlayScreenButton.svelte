<script>
	import Play from '../icons/Play.svelte';
	import Pause from '../icons/Pause.svelte';


	export let paused = false;
	export let loadStart;
</script>

{#key paused}
	<div class="button" class:onStart={!loadStart}>
		<div class="icon" >
			{#if paused && loadStart}
				<Pause />
			{:else}
				<Play />
			{/if}
		</div>
	</div>
{/key}



<style>
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 80px;
		height: 80px;
		background: rgba(0,0,0, .3);
		transform: translate(-50%,-50%);
		z-index: 1;
		border-radius: 50%;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		animation: vanish 500ms backwards;
	}

	@keyframes vanish {
		0%{
			visibility: visible;
			opacity: 1;
		}
		100% {
			visibility: hidden;
			opacity: 0;
		}
	}

	.icon {
		width: calc(var(--icon-size) * 1.6);
		height: calc(var(--icon-size) * 1.6);
	}

	.onStart {
		visibility: visible;
		opacity: 1;
	}

</style>