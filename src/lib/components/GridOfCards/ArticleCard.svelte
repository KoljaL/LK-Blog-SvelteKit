<script lang="ts">
	import { formatDate } from '$lib/functions/utils';
	import type { ArticleMetaData } from '$types';
	import { base } from '$app/paths';
	// import TagLinks from '$lib/components/TagLinks.svelte';
	import { goto } from '$app/navigation';
	export let meta: ArticleMetaData;
	import Image from './Image.svelte';

	// function gotoArticle() {
	// 	goto(`${base}/${meta.path}`);
	// }
	// console.log(JSON.stringify(meta, null, 2));
	// const gallery = Object.values(
	// 	import.meta.glob('../../../articles/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' })
	// );
	// $: console.log(gallery);
	// const imagePath = meta.articlePath + meta.imagePath;
	// console.log(imagePath);
</script>

<div class="card shadow">
	<h3 class="card_title">
		<!-- <a href="{base}/{meta.articleSlug}"> -->
		{meta.title}
		<!-- </a> -->
	</h3>
	<div class="card_meta">
		<div class="card_date">
			{formatDate(meta.created)}
		</div>
		<div class="card_category">
			<!-- in<a href="{base}/c/{meta.category}">&nbsp;{meta.category}</a> -->
		</div>
		<div class="card_tags">
			<!-- <TagLinks tags={meta.tags} /> -->
		</div>
	</div>
	<p class="card_content">{meta.excerpt}</p>
	<!-- 		on:click={gotoArticle}
		on:keypress={gotoArticle} -->
	<Image path={'/src/articles' + meta.articlePath + meta.imagePath} />
	<!-- <img class="card_image" src={meta.imageDesc} alt={meta.title} /> -->
</div>

<style>
	.card {
		--img-height: 105px;
		--img-ratio: 1;
		/* --img-ratio: 0.618; */
		--padding-outer: 0.5rem;
		border-radius: var(--radius-m);
		background-color: var(--color-bg-sec);
		padding-right: var(--padding-outer);
		display: grid;
		height: var(--img-height);
		grid-template-areas:
			'image title'
			'image meta'
			'image content';
	}

	.card_image {
		grid-area: image;
		height: var(--img-height);
		border-radius: 0.6rem;
		/* border-top-left-radius: var(--radius-m); */
		/* border-bottom-left-radius: var(--radius-m); */
		aspect-ratio: 1 / var(--img-ratio);
		object-fit: cover;
		object-position: top left;
		cursor: pointer;
		padding: 0.5rem;
	}

	.card_title {
		grid-area: title;
		font-size: 1.2rem;
		font-weight: bold;
		line-height: 1.2;
		margin: 0;
		padding: var(--padding-outer) 0.5rem 0rem var(--padding-outer);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.card_meta {
		grid-area: meta;
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
		color: var(--color-text-sec);
		flex-wrap: nowrap;
		font-size: 0.8rem;
		margin: 0.2rem var(--padding-outer) 0rem var(--padding-outer);
	}
	.card_date {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.card_category {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.card_tags {
		display: none;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.card_content {
		grid-area: content;
		overflow: hidden;
		font-size: 1rem;
		text-align: left;
		line-height: 1.3;
		hyphens: auto;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		margin: 0.2rem var(--padding-outer) var(--padding-outer) var(--padding-outer);
		padding: 0;
	}

	/*
		FIRST CARD
	*/
	@media (width > 660px) {
		.card:first-of-type {
			--img-height: 140px;
			grid-column: span 2;
			/* min-width: 450px; */
			height: calc(var(--img-height) * calc(1 / var(--img-ratio)));
		}

		.card:first-of-type .card_image {
			height: calc(var(--img-height) * calc(1 / var(--img-ratio)));
		}

		.card:first-of-type .card_title {
			font-size: 2rem;
			margin: 0;
		}

		.card:first-of-type .card_content {
			-webkit-line-clamp: 4;
		}
	}
</style>
