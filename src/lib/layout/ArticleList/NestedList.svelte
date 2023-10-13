<script lang="ts">
	export let items: any = [];
	// console.log(' ');
	// items.forEach((item: any) => {
	// console.log('item', item.path);
	// });
	// console.log('NestedList items', items);
	// console.log('NestedList items', JSON.stringify(items, null, 2));
</script>

<ul>
	{#each items as item, index}
		<li>
			<!-- index: {index} -->
			<slot {item} />
			{#if item.children}
				<svelte:self items={item.children} let:item>
					<slot {item} />
				</svelte:self>
			{/if}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0.25rem;
	}
	/* li {
		padding: 0.25rem 0;
	} */
</style>
