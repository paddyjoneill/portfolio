<script>
	import '$lib/styles/style.css';
	import Header from '$lib/components/header/Header.svelte';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import About from '$lib/components/about/About.svelte';
	import Services from '$lib/components/services/Services.svelte';
	import PreviousWork from '$lib/components/previouswork/PreviousWork.svelte';
import Head from '$lib/components/head/Head.svelte';
</script>

<Head />
<Header />
<About />
<Services />
<PreviousWork />
<ContactForm />

<style>
	@import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
</style>
