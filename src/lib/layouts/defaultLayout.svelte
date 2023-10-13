<script context="module">
	// the generated keys ftrom ArticleMetaData are mot in the frontmatter
	// so we have to get them from the $page store
	// the store is empty in the component, so we have to get them in the module
	import { page } from '$app/stores';
	const contextPage = page;
</script>

<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { formatDate } from '$lib/functions/utils';
	import TagLinks from '$lib/components/TagLinks.svelte';
	import Image from '$lib/components/GridOfCards/Image.svelte';
	import GridOfCards from '$lib/components/GridOfCards/Grid.svelte';

	export let title;
	export let tags;
	export let imagePath;
	export let created;
	// console.log('$$restProps', { ...$$restProps });

	const category = $contextPage.data.articleMeta.category;
	const articlePath = $contextPage.data.articleMeta.articlePath;
	const headerImagePath = '/src/articles' + articlePath + imagePath;

	let sortedBy = 'Category';
	let showButtonText = 'Tag';
	function changeShow() {
		if (sortedBy === 'Category') {
			sortedBy = 'Tag';
			showButtonText = 'Category';
		} else {
			sortedBy = 'Category';
			showButtonText = 'Tag';
		}
	}

	onMount(() => {
		addCopyButton();
	});

	function addCopyButton() {
		document.querySelectorAll('pre.shiki').forEach((item) => {
			const code = item.innerText;
			const button = document.createElement('button');
			button.innerText = 'Copy';
			button.classList.add('copy-button');
			button.classList.add('shadow');
			item.appendChild(button);

			button.addEventListener('click', () => {
				// console.log('copy', item);
				navigator.clipboard.writeText(code);
				document.querySelectorAll('.copying').forEach((item) => {
					item.remove();
				});

				const div = document.createElement('div');
				div.id = 'copying';
				item.appendChild(div);
				setTimeout(() => {
					button.innerText = 'Copied';
					document.getElementById('copying').remove();
				}, 700);
			});
		});
	}
</script>

<div class="headerImage">
	<Image path={headerImagePath} />
</div>

<hgroup>
	<h1>{title}</h1>
	<div class="subheader">
		<date class="date">
			{formatDate(created)}
			<span> in </span>
			<a href="{base}/c/{category}">{category}</a>
		</date>
		<div class="tags">
			<TagLinks {tags} />
		</div>
	</div>
</hgroup>

<article class="markdown-body">
	<slot />
</article>

<div class="GridOfCardsTitle">
	Related Articles in the same category
	<!-- // to-do extend the GridOfCards component to accept multiple tags -->
	<!-- <button class="shadow" on:click={changeShow}>{showButtonText}</button> -->
</div>
<GridOfCards {sortedBy} />

<style>
	hgroup {
		padding-top: 2rem;

		margin: 0.5rem 0 0.5rem 0;
	}

	h1 {
		margin: 0.5rem 0 0.5rem 0;
	}

	.subheader {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.tags,
	.date {
		font-size: 0.9rem;
	}

	.headerImage :global(img) {
		width: 100%;
		height: auto;
		margin-top: 0.75rem;
		max-height: 300px;
		border-radius: var(--radius-m);
		/* aspect-ratio: 1 / 1.4; */
		object-fit: cover;
		object-position: top;
	}

	.markdown-body {
		margin: 0.5rem 0 0.5rem 0;
	}
	.GridOfCardsTitle {
		font-size: 2rem;
		width: 100%;
		text-decoration: underline;
		text-decoration-thickness: 1px;
		margin: 4rem 0 2rem 0;
	}
	:global(.copy-button) {
		position: absolute;
		top: 0;
		right: 0.75rem;
		background-color: var(--color-bg-sec);
		z-index: 3;
	}

	:global(#copying) {
		position: absolute;
		top: 0;
		right: 0;
		background: radial-gradient(
			var(--color-link),
			var(--color-link),
			var(--color-link),
			var(--color-link),
			var(--color-link),
			var(--color-link),
			rgba(0, 0, 0, 0)
		);
		border-radius: var(--radius-m);
		animation: slurp 0.65s ease-in-out;
		opacity: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}

	@keyframes slurp {
		0% {
			opacity: 0;
			width: 100%;
			height: 100%;
		}
		20% {
			opacity: 0.1;
			width: 100%;
			height: 100%;
		}
		50% {
			opacity: 0.1;
			width: 100%;
			height: 100%;
			top: 0;
			right: 0;
		}
		70% {
			top: 0.5rem;
			right: 0.7rem;
		}
		100% {
			opacity: 0;
			width: 0%;
			height: 0%;
			top: 1rem;
			right: 1rem;
		}
	}
</style>
