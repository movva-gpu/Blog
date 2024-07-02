<script lang="ts">
	import '$lib/fonts.css';
	import '../app.css';

	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import { keywords } from '$lib/config';
</script>

<svelte:head>
	<meta name="keywords" content={keywords} />
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />

<style></style>
