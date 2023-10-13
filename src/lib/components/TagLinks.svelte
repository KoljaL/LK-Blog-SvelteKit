<script lang="ts">
	import { base } from '$app/paths';
	// console.log('Code page', { ...$$restProps });

	export let tags: string | undefined;
	let tagArray: string[] = [];
	if (tags) {
		tagArray = tags.split(',');
		tagArray = tagArray.map((tag) => tag.trim());
	}
</script>

{#if tags}
	{#each tagArray as tag (tag)}
		<a href="{base}/t/{tag}">#{tag}</a>
	{/each}
{/if}

<style>
	a:not(:last-child):after {
		content: ', ';
		color: var(--color-text);
		opacity: 0.7;
	}
</style>
