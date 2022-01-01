<script>
	import '$lib/styles/style.css';
	import Header from '$lib/components/header/Header.svelte';
	import DropdownMenu from '$lib/components/header/DropdownMenu.svelte';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import About from '$lib/components/about/About.svelte';
	import Services from '$lib/components/services/Services.svelte';
	import PreviousWork from '$lib/components/previouswork/PreviousWork.svelte';
</script>

<Header />
<DropdownMenu />
<About />
<Services />
<PreviousWork />
<ContactForm />

<style>
	@import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
</style>
