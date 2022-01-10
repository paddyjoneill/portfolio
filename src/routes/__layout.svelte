<script>
	import '$lib/styles/style.css';
	import Head from '$lib/components/head/Head.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<Head />
<Header />
<main>
<slot />
</main>
<Footer />

<style>
	/* @import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One&display=swap'); */
	@import url('https://fonts.googleapis.com/css?family=Inter&display=swap');

</style>
