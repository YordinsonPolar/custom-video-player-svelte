
<script>
	export let loading;
</script>

<div class="loading-container">
	<div class:loading></div>
</div>

<style>
	.loading-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		pointer-events: none;
	}

	.loading {
		width: 84px;
		height: 84px;
		border: 3px solid rgba(255,255,255, .4);
		border-top-color: #fff;
		border-radius: 50%;
		animation: spinner 500ms infinite linear;
	}

	@keyframes spinner {
		0%{
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>