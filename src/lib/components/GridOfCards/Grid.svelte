<script lang="ts">
	import type { ArticleMetaData, ArticleMetaSorted, ArticlesMetaData, GridSort } from '$types';
	import { page } from '$app/stores';
	import { sortedByDate, sortedByTags, sortedByCategory } from './gridFunctions';
	import ArticleCard from './ArticleCard.svelte';

	export const sortBy: GridSort = 'Recent';

	let ArticlesMetadata: ArticlesMetaData = $page.data.articlesMeta;
	let tagFilter: string = $page.params.tag || '';
	let catFilter: string = $page.params.category || '';
	let sortedArticles: ArticleMetaSorted[] = [];

	$: if (catFilter == '') {
		try {
			catFilter = $page.data.articleMeta.category;
		} catch (error) {
			catFilter = '';
		}
	}

	$: if (tagFilter == '') {
		try {
			tagFilter = $page.data.articleMeta.tags;
		} catch (error) {
			tagFilter = '';
		}
		// tagFilter = $page.data.articleMeta.tags;
	}

	$: {
		if (sortBy === 'Recent') {
			sortedArticles = sortedByDate(ArticlesMetadata);
		} else if (sortBy === 'Tags') {
			sortedArticles = sortedByTags(ArticlesMetadata);
		} else if (sortBy === 'Category') {
			sortedArticles = sortedByCategory(ArticlesMetadata);
			if (catFilter) {
				sortedArticles = sortedArticles.filter(
					(group: ArticleMetaSorted) => group.sorted === catFilter
				);
				// sortedArticles = sortedArticles.filter(
				// 	(group: { group: ArticleGroup }) => group.group === catFilter
				// );
			}
		} else if (sortBy === 'Tag') {
			sortedArticles = sortedByTags(ArticlesMetadata);
			if (tagFilter) {
				sortedArticles = sortedArticles.filter(
					(group: ArticleMetaSorted) => group.sorted === tagFilter
				);
				// sortedArticles = sortedArticles.filter(
				// 	(group: { group: string }) => group.group === tagFilter
				// );
			}
		}
	}
	$: {
		// console.log(sortBy);
		// 	console.log(tagFilter);
		// console.log(catFilter);
		// console.log($page.data.ArticleMeta);
		// console.log($page.params);
	}
</script>

<!-- <Image path={'/src/articles/Code/Laravel/Laravel-Title.png'} /> -->
<!-- <pre>{JSON.stringify(sortedArticles, null, 2)}</pre> -->
<!-- <img src={IMG} alt="" /> -->

{#each sortedArticles as articleGroup}
	<h2>{articleGroup.sorted}</h2>
	<section class="card_wrapper">
		{#each articleGroup.articles as article (article)}
			<ArticleCard meta={article} />
		{/each}
	</section>
{/each}

<style>
	.card_wrapper {
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); */
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 1.5rem;
	}

	h2 {
		text-align: center;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
</style>
