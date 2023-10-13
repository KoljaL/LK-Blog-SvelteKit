<script lang="ts">
	import type { GridSort } from '$types';
	import GridOfCards from '$lib/components/GridOfCards/Grid.svelte';
	// import Quotes from '$lib/components/Quotes.svelte';
	import { balancer } from '$lib/functions/balancer';
	let sortBy: GridSort = 'Recent';

	// export let data;
	// console.log(JSON.stringify(data, null, 2));
</script>

<h1 use:balancer={{ enabled: true, ratio: 0.7 }}>
	Just another blog, made with SvelteKit for my personal use or for anyone who wants to use it.
</h1>

<!-- <Quotes /> -->

Click the button below to sortBy articles by year and month or by tag.

<button
	class="shadow"
	on:click={() => {
		// tripple switch statement
		switch (sortBy) {
			case 'Category':
				sortBy = 'Recent';
				break;
			case 'Recent':
				sortBy = 'Tags';
				break;
			case 'Tags':
				sortBy = 'Category';
				break;

			default:
				break;
		}
		// sortBy = sortBy === 'Category' ? 'Recent' : 'Category';
	}}
>
	{sortBy}
</button>

<GridOfCards {sortBy} />

<style>
</style>
