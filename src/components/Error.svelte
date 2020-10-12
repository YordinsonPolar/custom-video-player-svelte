<script>
	export let error;
</script>

<div class="error">
	<div class="error-wrapper">
		<div class="icon"></div>
		<div class="code">CODE: {error.code}</div>
		<div class="message">
			 {error.message ? error.message : "INTERNAL ERROR" }
		</div>
	</div>
</div>

<style>
	.error {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.error-wrapper {
		border-radius: 10px;
		padding: 20px;
		line-height: 2rem;
		background: rgba(0,0,0, .6);
		font-size: 1.2rem;
		text-align: center;
		margin-bottom: 50px;
	}

	.icon {
		background-image: url(/icons/tools-error.svg);
		background-size: cover;
		width: calc(var(--icon-size) * 3.5);
		height: calc(var(--icon-size) * 3.5);
		margin: 0 auto;
	}

	.code {
		margin-top: 5px;
		margin-bottom: 10px;
		font-size: 2rem;
	}


</style>