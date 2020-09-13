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
	div{
		border:'solid' 0.5em black;
		padding: 1em;
	}
</style>