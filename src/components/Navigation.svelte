<script>
    import { each } from "svelte/internal";
    export let data;   
</script>
<div>
    <!-- {#if mahasiswa !== undefined}
    <pre>{mahasiswa}</pre>
       
    {:else}
        <pre>Data tidak ada</pre>
    {/if} -->
    
    {#each data as r}
        {r.id}
    {/each}
    
    
</div>
<style>
    /* li{
        display: inline-block;
        padding: 1em;
        margin-left: auto;
    }
    li a{
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
    ul{
        background-color: black;
        margin-top: 1.5em;
    } */
</style>