<script>
	export let title = "";
	
</script>

<div class="overview" >
	<div class="title">{title}</div>
</div>


<style>
	.overview {
		position: relative;
		width: 100%;
		height: 100%;
		background: 
			linear-gradient(
				to top,
				rgba(0,0,0, .5),
				transparent,
				transparent,
				rgba(0,0,0, .2),
				rgba(0,0,0, .4),
				rgba(0,0,0, .8));
	}

	.title {
		padding: 10px;
    font-size: 1.5rem;
    animation: slide 1000ms backwards;

	}

	@keyframes slide {
		0%{
			transform: translateX(100%);
		}
		100%{
			transform: translateX(0);
		}
	}
</style>