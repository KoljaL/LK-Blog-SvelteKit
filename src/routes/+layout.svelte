<script lang="ts">
	import '@fontsource/overpass';
	import '@fontsource/overpass/200.css';
	import '@fontsource/overpass/400.css';
	import '@fontsource/jetbrains-mono';
	// import '$lib/style/gfm.css';
	import '$lib/style/main.css';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	// import DebugBar from '$lib/components/Debug/DebugBar.svelte';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		const main = document.querySelector('main') as HTMLElement;
		main.scrollTo(0, 0);
	});
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<!-- <DebugBar /> -->

<style>
	:global(.svelte > header),
	:global(.svelte > main),
	:global(.svelte > footer) {
		width: var(--content-width);
		max-width: 100vw;
		margin-inline: auto;
		padding-inline: 1rem;
		background-color: var(--color-bg-prim);
	}

	:global(.svelte > header) {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: var(--header-height);
	}

	:global(.svelte > main) {
		/* height: calc(100dvh - var(--header-height) - var(--footer-height)); */
		margin-top: var(--header-height);
		margin-bottom: var(--footer-height);
		padding-top: 2rem;
		padding-bottom: 2rem;
		padding-inline: 1rem;
		/* overflow-y: scroll; */
		/* overflow-x: hidden; */
	}

	:global(.svelte > footer) {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: var(--footer-height);
	}
</style>
