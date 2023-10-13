<script lang="ts" context="module">
	// import { formatDatetime } from '$lib/functions';
	// declare const __BUILDTIME__: string;
	// declare const __VERSION__: string;
	// const __BUILD_TIME__ = import.meta.env.__BUILD_TIME__;
	// const __VERSION__ = import.meta.env.VITE_APP_VERSION;
	// const __APP_VERSION__ = import.meta.env.VITE_APP_VERSION;
	// console.log('Footer', import.meta.env);
</script>

<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	// console.log('Footer', import.meta.env);
</script>

<footer>
	<span class="theme_toggle">
		<ThemeToggle />
	</span>
	<span>Footer</span>
	<!-- <time>{formatDatetime(__BUILDTIME__)}</time> -->
	<!-- <span>&copy;LK v{__VERSION__}</span> -->
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: end;
		padding-inline: var(--padding-page);
		gap: 1rem;
		padding-inline: var(--padding-page);
		box-shadow: 0px -15px 15px -5px var(--color-bg-prim);
		/* border-top: 1px solid var(--color-link); */
		z-index: 2;
	}

	.theme_toggle {
		margin: 0.25rem;
	}
	.theme_toggle :global(svg) {
		--logo-size: 1.7rem;
		width: var(--logo-size);
		height: var(--logo-size);
	}
</style>
