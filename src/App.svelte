<script>
	import Player from './components/Player.svelte';
		let videos = [
		{
			title: 'Zuku Owarimono 1',
			id: 1,
			src:  "https://firebasestorage.googleapis.com/v0/b/realtime-chat-app-3547a.appspot.com/o/zukuOwarimono%2FZokuOwarimonogatari_1.mp4?alt=media&token=013341dc-e74a-4e76-a644-244b9626b2db",
			poster: 'https://images7.alphacoders.com/698/thumb-1920-698766.png',
			skipTime: {
				introTime: { start: "1:26", end: "2:26" },
				endingTime: { start: "23:06", end: "24:38" }
			}
		},  
		 { 
			 title: 'Zuku Owarimono 2', 
			 id: 2,
			 src: "https://firebasestorage.googleapis.com/v0/b/realtime-chat-app-3547a.appspot.com/o/zukuOwarimono%2FZokuOwarimonogatari_2.mp4?alt=media&token=397618de-f4d9-4a5e-9f26-328424199012",
		 	 poster: "https://images4.alphacoders.com/654/thumb-1920-654826.jpg",
		 	 skipTime: {
		 	 	introTime: { start: "0:00", end: "0:57" },
			 	endingTime: { start: "23:06", end: "24:37" }
		 	 },
		 },

		 { 
			 title: 'Zuku Owarimono 3',
			 id: 3,
			src: "https://firebasestorage.googleapis.com/v0/b/realtime-chat-app-3547a.appspot.com/o/zukuOwarimono%2FZokuOwarimonogatari_3.mp4?alt=media&token=5855bbdf-8eb7-4c96-9ebe-d154a2713a6f",
		  poster: 'https://images5.alphacoders.com/759/thumb-1920-759200.jpg',
		  skipTime: {
		 	 	introTime: { start: "6:14", end: "7:13" },
			 	endingTime: { start: "24:35", end: "26:07" }
		 	 },
		 }, 
		 { 
			 title: 'Zuku Owarimono 4', 
			 id: 4,
			 src: "https://firebasestorage.googleapis.com/v0/b/realtime-chat-app-3547a.appspot.com/o/zukuOwarimono%2FZokuOwarimonogatari_4.mp4?alt=media&token=adcc73e1-25a0-4a96-ad22-ec10e73a9880",
		 	 poster: "https://images4.alphacoders.com/244/thumb-1920-244418.png",
		 	 skipTime: {
		 	 	introTime: { start: "0:00", end: "0:59" },
			 	endingTime: { start: "23:06", end: "24:38" }
		 	 },
		 },
		 { 
			 title: 'Zuku Owarimono 5', 
			 id: 5,
			 src: "https://firebasestorage.googleapis.com/v0/b/realtime-chat-app-3547a.appspot.com/o/zukuOwarimono%2FZokuOwarimonogatari_5.mp4?alt=media&token=5c074178-ea2b-4552-b73e-2ea1e074866d",
		 	 poster: "https://images3.alphacoders.com/116/thumb-1920-116357.jpg",
		 	 skipTime: {
		 	 	introTime: { start: "0:00", end: "0:59" },
			 	endingTime: { start: "24:35", end: "26:07" }
		 	 },
		 },
		  { 
			 title: 'Zuku Owarimono 6', 
			 id: 6,
			 src: "https://firebasestorage.googleapis.com/v0/b/realtime-chat-app-3547a.appspot.com/o/zukuOwarimono%2FZokuOwarimonogatari_6.mp4?alt=media&token=062cbf28-48c1-4b40-b075-117cc5db98b4",
		 	 poster: "https://images.alphacoders.com/219/thumb-1920-219363.jpg",
		 	 skipTime: {
		 	 	introTime: { start: "0:00", end: "0:59" },
			 	endingTime: { start: "30:40", end: "32:12" }
		 	 },
		 },
		 { 
			 title: 'Testing Error', 
			 id: 7,
			 src: "Testing Error",
		 	 poster: "https://images3.alphacoders.com/807/thumb-1920-807591.jpg",
		 },

	] 

</script>


<Player {videos}  />

<style>
	
</style>