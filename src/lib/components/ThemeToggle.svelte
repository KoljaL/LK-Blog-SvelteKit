<script lang="ts">
	import { onMount } from 'svelte';
	let currentTheme: string;
	onMount(() => {
		// document.documentElement.setAttribute('data-theme', currentTheme);
		window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
			console.log(`changed to ${e.matches ? 'dark' : 'light'} mode`);
			toggleTheme();
		});
	});

	function toggleTheme() {
		currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
		document.body.classList.add('notransition');

		if (currentTheme === 'light') {
			currentTheme = 'dark';
		} else {
			currentTheme = 'light';
		}
		document.documentElement.setAttribute('data-theme', currentTheme);
		setTimeout(() => {
			document.body.classList.remove('notransition');
		}, 500);

		localStorage.setItem('LK-theme', currentTheme);
	}
</script>

<button class="theme-toggle-wrapper" on:click={toggleTheme}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width="2rem"
		height="2rem"
		fill="currentColor"
		stroke-linecap="round"
		class="sun_to_moon theme-toggle"
		viewBox="0 0 32 32"
	>
		<clipPath id="sun_to_moon__cutout">
			<path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
		</clipPath>
		<g clip-path="url(#sun_to_moon__cutout)">
			<circle cx="16" cy="16" r="9.34" />
			<g stroke="currentColor" stroke-width="1.5">
				<path d="M16 5.5v-4" />
				<path d="M16 30.5v-4" />
				<path d="M1.5 16h4" />
				<path d="M26.5 16h4" />
				<path d="m23.4 8.6 2.8-2.8" />
				<path d="m5.7 26.3 2.9-2.9" />
				<path d="m5.8 5.8 2.8 2.8" />
				<path d="m23.4 23.4 2.9 2.9" />
			</g>
		</g>
	</svg>
</button>

<style>
	.theme-toggle-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: transparent;
		border: none;
		box-shadow: none;
		padding: 0;
		margin: 0;
	}
	.theme-toggle-wrapper::after {
		box-shadow: none;
	}

	.theme-toggle {
		--duration: 500ms;
		--duration-hover: 500ms;
		cursor: pointer;
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		margin-top: 0.25rem;
		/* width: 2rem; */
		/* height: 2rem; */
		color: var(--color-text-sec);
		transition: all var(--duration) ease-in-out;
		transition: color var(--duration-hover) ease-in-out;
	}
	/* .theme-toggle:hover {
		color: var(--color-svelte);
	} */

	@media (prefers-color-scheme: light) {
		.sun_to_moon g path {
			transform: scale(0.5) rotate(45deg);
			opacity: 0;
			transition-delay: 0s;
		}
		.sun_to_moon :first-child path {
			transform: translate3d(-12px, 10px, 0);
		}
	}

	@media (prefers-color-scheme: dark) {
		.sun_to_moon g path {
			transition-property: opacity, transform;
			transform: scale(1) rotate(0deg);
			opacity: 1;
			transition-delay: calc(var(--duration) * 0.2);
		}
		.sun_to_moon :first-child path {
			transition-property: transform, d;
		}
	}

	.sun_to_moon path {
		transition-timing-function: cubic-bezier(0, 0, 0.15, 1.25);
		transform-origin: center;
		transition-duration: calc(var(--duration) * 0.8);
	}
	[data-theme='dark'] .sun_to_moon g path {
		transition-property: opacity, transform;
		transform: scale(1) rotate(0deg);
		opacity: 1;

		transition-delay: calc(var(--duration) * 0.2);
	}
	[data-theme='dark'] .sun_to_moon :first-child path {
		transform: none;
		transition-property: transform, d;
	}
	[data-theme='light'] .sun_to_moon g path {
		transform: scale(0.5) rotate(45deg);
		opacity: 0;
		transition-delay: 0s;
	}
	[data-theme='light'] .sun_to_moon :first-child path {
		transform: translate3d(-12px, 10px, 0);
	}

	:global(.notransition:not(.theme-toggle-wrapper) *) {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		transition: none !important;
	}
</style>
