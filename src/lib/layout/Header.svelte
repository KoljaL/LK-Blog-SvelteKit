<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import Logo from '$lib/icons/Logo.svelte';
	import Navigation from '$lib/layout/ArticleList/Navigation.svelte';

	afterNavigate((navigation) => {
		// console.log(navigation);
		if (headerHeight >= 4) return;
		headerHeightIntervall = setInterval(() => {
			headerHeight = headerHeight + 0.25;
			if (headerHeight >= 4) {
				clearInterval(headerHeightIntervall);
			}
		}, 20);
	});

	let logo_element: HTMLElement;
	let logo_interval: NodeJS.Timeout | false = false; //ReturnType<typeof setInterval>;
	let logo_hue = 0;

	let headerHeight: number = 4;
	let headerHeightIntervall: ReturnType<typeof setInterval>;

	let logoScale: number = 0.8;

	onMount(() => {
		shrinkHeader();
	});

	function shrinkHeader() {
		const contentElement = document.querySelector('html') as HTMLElement;
		const mainWidth = contentElement.offsetWidth;
		const scrollTop = contentElement.scrollTop;
		// if (scrollTop < 100) return;
		if (mainWidth > 660) {
			logoScale = Math.max(1.3 - (scrollTop + 120) / 1000, 0.8);
		} else if (scrollTop < 100) {
			// logoScale = 1;
			logoScale = Math.max(1 - (scrollTop - 50) / 300, 0.8);
			headerHeight = Math.max(3 - (scrollTop - 100) / 100, 2.5);
		}
		// round to 2 decimals
		headerHeight = Math.round(headerHeight * 1000) / 1000;
		logoScale = Math.round(logoScale * 1000) / 1000;
	}

	const rainbow = () => {
		if (!logo_interval) {
			logo_interval = setInterval(() => {
				logo_hue = (logo_hue + 1) % 360;
				logo_element.style.filter = `hue-rotate(${logo_hue}deg)`;
			}, 10);
		} else {
			clearInterval(logo_interval);
			logo_interval = false;
			return;
		}
	};
</script>

<svelte:window on:scroll={shrinkHeader} />

<header style="--header-height: {headerHeight}rem; --logo-scale: {logoScale}">
	<a
		href="{base}/"
		class="logo"
		aria-label="Home"
		title="Home"
		bind:this={logo_element}
		on:mouseover={() => {
			rainbow();
		}}
		on:mouseout={() => {
			rainbow();
		}}
		on:focus={() => {
			rainbow();
		}}
		on:blur={() => {
			rainbow();
		}}
	>
		<Logo />
	</a>
	<div class="title">LK.Blog</div>
	<Navigation />
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0px 15px 15px -5px var(--color-bg-prim);
		/* border-bottom: 1px solid var(--color-link); */
		z-index: 2;
		/* margin-top: 1px; */
		--logo-scale: 1.3;
		--header-height: calc(var(--logo-scale) * 4rem) !important;
	}

	/* header > :global(nav),
	header > * {
		outline: 1px solid red;
	} */

	.title {
		font-size: 2rem;
		font-weight: 400;
		margin-top: 0.4rem;
		line-height: 1;
	}

	a {
		display: block;
		height: 100%;
		width: 4rem;
	}
	a.logo :global(svg) {
		--logo-size: calc(var(--header-height) * 1);
		--padding-size: calc(var(--header-height) * 0.1);
		padding-block: var(--padding-size);
		width: var(--logo-size);
		height: var(--logo-size);
		margin-left: calc(var(--padding-size) * -2);
		/* outline: 1px solid blue; */
	}

	a.logo :global(svg path) {
		fill: var(--color-link);
		stroke: black;
		stroke-width: 1px;
	}

	/* @media (width > 65rem) {
		header {
			--logo-scale: 1.3;
			--header-height: calc(var(--logo-scale) * 4rem) !important;
		}
		a.logo :global(svg) {
			--logo-scale: 1.3;
			transform: scale(var(--logo-scale));
			transform-origin: top left;
		}
	} */
</style>
