<script lang="ts">
	import '$lib/fonts.css';
	import '../app.css';
	import Header from './Header.svelte';
	import * as en from '$lib/lang/en';
	import Footer from './Footer.svelte';

	export const lang = en;
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style></style>
