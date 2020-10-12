<script>
	import { fly } from 'svelte/transition';
	let networkStatus = true;
</script>

<svelte:window 
	on:online={() => networkStatus = true}
	on:offline={() => networkStatus = false}
	/>

{#if !networkStatus}
	<div 
		class="network-status"
		transition:fly={{x : -100, duration: '300'}}>
		<p>Network disconnected</p>
	</div>
{/if}

<style>
	.network-status {
		position: absolute;
    top: 90px;
    left: 5px;
    text-align: center;
    background: rgba(0,0,0, .3);
    z-index: 20;
    padding: 4px 10px;
    font-size: .9rem;
    font-weight: bold;
    border-radius: 3px;
	}
</style>