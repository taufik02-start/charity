<script>
	import Navigation from '../components/Navigation.svelte';

	let title = "Taufik";
	let mahasiswa = ['taufik','diki'];
</script>

<div>
	<h1>{title}</h1>
	<Navigation mahasiswa={mahasiswa}/>
</div>
<style>
	h1{
		color:black;
		size:20px;
	}
</style>
<svelte:head>
	<!-- <link rel="stylesheet" href="https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css" /> -->
</svelte:head>