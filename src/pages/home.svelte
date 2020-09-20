<script>
    // import Navigation from '../components/Navigation.svelte';
    import Charitylist from '../components/Charitylist.svelte';
    import Header from '../components/Header.svelte';
    import Welcome from '../components/Welcome.svelte';
    import Promo from '../components/Promo.svelte';
    import Footer from '../components/Footer.svelte';
    import {data} from "../data/data.js"
    let conten ={
        title:'Home',
        deskripsi:'Simple blog with svelte',
        
    }
</script>
    <Header />
    <Welcome />
	<Charitylist data={data}/>
    <Promo/>
    <Footer/>
<style>
	
</style>
<svelte:head>
    <!-- <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"> -->
	<!-- <link rel="stylesheet" href="https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css" /> -->
</svelte:head>