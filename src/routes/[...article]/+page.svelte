<script lang="ts">
	import type { ArticleMetaData } from '$types';
	import type { CustomToTheRescueComponent } from './+page';
	import Meta from '$lib/components/Meta.svelte';
	export let data;
	$: comp = data.articleComponent; //as CustomToTheRescueComponent;
	$: articleMeta = data.articleMeta as ArticleMetaData;
	// $: meta = data.ArticleMeta as ArticleMetadata;
	// $: console.log('+page.svelte meta', meta);
	// console.log('+page.svelte data', data);
	// console.log('Code page', { ...$$restProps });
</script>

<!-- {#await data.articleMeta then ArticleMeta} -->
<!-- {#if ArticleMeta} -->
<Meta {articleMeta} />
<!-- {/if} -->
<!-- {/await} -->

<svelte:component this={comp} />
