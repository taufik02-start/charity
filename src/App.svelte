<script>
	import Navigation from './Navigation.svelte';

	let title = "Taufik";
	setTimeout(()=>{
		title = "Rubah"
	},2000);
</script>

<div>
	<h1>{title}</h1>
	<Navigation />
</div>
<style>
	h1{
		color:black;
		size:20px;
	}
	:global(div){
		border:'solid' 0.5em black;
		padding: 1em;
	}
</style>
<svelte:head>
	<link rel="stylesheet" href="https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css" />
</svelte:head>