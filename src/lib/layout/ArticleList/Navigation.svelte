<script lang="ts">
	import type { ArticleMetaData, ArticlesMetaData, ArticleMetaSorted } from '$types';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import { clickOutside } from '$lib/functions/utils';
	import List from './NestedList.svelte';

	let expanded = false;
	let articlesMeta: ArticlesMetaData = [];
	let nestedArticles: ArticleMetaSorted[] = [];

	$: articlesMeta = $page.data.articlesMeta as ArticlesMetaData;
	$: articleSlug = $page.params.article;
	// $: console.log(articlesMeta);
	// console.log($page.data);

	afterNavigate(() => {
		expanded = false;
	});

	onMount(() => {
		nestedArticles = convertToNestedArticles(articlesMeta);
		removeEmptyChildren(nestedArticles);
	});

	// $: console.log(JSON.stringify(articlesMeta, null, 2));
	// $: console.log(JSON.stringify(nestedArticles, null, 2));

	function focusFirstDropdownLink(e: any) {
		// const node = e.target as any;
		// console.log(e);
		// console.log(node);
		// node.focus();
		// console.log(target);
		// if ((target.firstElementChild as HTMLLinkElement).firstElementChild) {
		// target.firstElementChild.focus();
		// find the first link inside al list item
		// const link = target.firstElementChild.firstElementChild;
		// console.log(link);
		// }
	}

	function convertToNestedArticles(metadata: ArticlesMetaData) {
		const nested: [] = [];

		metadata.forEach((item) => {
			if (!item.articlePath) return;
			// console.log(item.articlePath);
			const pathSegments = item.articlePath
				// .replace('/src/articles/', '')
				// .replace('/+page.md', '')
				// if strts with "/" remove it
				.replace(/^\/+/, '')
				.split('/');
			let currentLevel = nested;
			// console.log(item.path);
			// console.log(pathSegments);
			pathSegments.forEach((segment, index) => {
				const node = findOrCreateNode(currentLevel, pathSegments.slice(0, index + 1));
				currentLevel = node.children || (node.children = []);
				// console.log('node', node);
				if (index === pathSegments.length - 1) {
					node.created = item.created;
					node.articleSlug = item.articleSlug;
					node.title = item.title;
				}
			});
		});

		return nested;
	}

	function findOrCreateNode(currentLevel: any[], pathSegments: any[]) {
		const articlePath = pathSegments.join('/');
		// console.log('articlePath', articlePath);
		let node = currentLevel.find((item) => item.articlePath === articlePath);
		// console.log('node', node);
		if (!node) {
			node = { articlePath };
			currentLevel.push(node);
		}

		return node;
	}

	// remove empty children
	function removeEmptyChildren(obj: any) {
		Object.keys(obj).forEach((key) => {
			if (Object.keys(obj[key].children).length === 0) {
				delete obj[key].children;
			} else {
				removeEmptyChildren(obj[key].children);
			}
		});
	}
</script>

<nav class="nav-wrapper">
	<button
		class="nav-toggle shadow"
		aria-expanded={expanded}
		aria-haspopup="true"
		aria-label="Nav toggle"
		use:clickOutside={() => {
			expanded = false;
		}}
		on:click={() => (expanded = !expanded)}
	>
		Articles
	</button>

	{#if expanded}
		<div
			class="nav shadow"
			class:expanded
			transition:fly={{ x: 200, duration: 500 }}
			role="doc-pagelist"
			aria-label="Page list"
		>
			<List items={nestedArticles} let:item>
				<!-- <h4 class="nav-cat-heading">{item.category}</h4> -->
				<a
					href="{base}/{item.articleSlug}"
					class="nav-link"
					title={item.title}
					aria-current={articleSlug === item.articleSlug ? 'page' : undefined}
				>
					{item.title}
					<!-- <small>{item.date}</small> -->
				</a>
			</List>
		</div>
	{/if}
</nav>

<style>
	.nav-wrapper {
		/* margin-top: 0.25rem; */
		/* height: 100%; */
		position: relative;
	}

	.nav {
		position: absolute;
		right: -2px;
		top: 0;
		/* top: 2.5rem; */
		background-color: var(--color-bg-sec);
		border-radius: var(--radius-m);
		padding: 0.5rem;
		padding-right: 1rem;
		padding-bottom: 0;
		max-height: 70vh;
		max-width: 90vw;
		overflow: scroll;
		z-index: 1;
	}

	:global(.nav > ul > li > a) {
		margin: 0;
		padding: 0rem;
		font-size: 1.2rem;
		line-height: 2;
		font-weight: 400;
		color: var(--color-text-sec);
	}

	.nav :global(ul) {
		padding: 0rem;
		padding-left: 0.3rem;
		margin: 0;
	}

	.nav :global(ul > li) {
		padding-bottom: 1rem;
	}

	.nav :global(ul ul > li) {
		line-height: 2;
		padding-bottom: 0rem;
	}

	.nav-link {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: all 0.2s ease-in-out;
	}
	.nav-link[aria-current='page'] {
		color: var(--color-text);
	}
	.nav-link:hover {
		color: var(--color-text);
	}
	.nav-link:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-link);
	}

	.nav-toggle {
		margin: 0;
		font-size: 1.3rem;
		background-color: var(--color-bg-sec);
		z-index: 1;
		cursor: pointer;
	}
</style>
