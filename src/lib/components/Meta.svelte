<script lang="ts">
	import { page } from '$app/stores';
	import type { ArticleMetaData } from '$types';
	export let articleMeta: ArticleMetaData;

	// console.log('Meta.svelte', { ArticleMeta });
	// console.log('Meta.svelte', $page);

	// to-do get global settings from .env
	let defaultMeta: ArticleMetaData = {
		published: true,
		title: '',
		author: 'LK',
		authorTwitter: '@LK',
		tags: '',
		description: '',
		excerpt: '',
		created: '',
		imagePath: '',
		imageUrl: $page.data.ArticleMeta?.imageUrl || '',
		imageAlt: '',
		imageDesc: '',
		articlePath: '',
		articleFile: '',
		articleSlug: '',
		articleUrl: $page.url.href,
		siteName: 'LK.blog',
		siteUrl: $page.url.origin,
		category: $page.data.ArticleMeta?.category || ''
	};

	$: meta = { ...defaultMeta, ...articleMeta };
</script>

<svelte:head>
	<title>{meta.siteName} - {meta.title}</title>

	<meta name="description" content={meta.description} />
	<meta name="author" content={meta.author} />
	<meta name="news_keywords" content={meta.tags} />

	<meta property="og:title" content={meta.title} />
	<meta property="og:site_name" content={meta.siteName} />
	<meta property="og:url" content={meta.articleUrl} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:image" content={meta.imageUrl} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={meta.siteUrl} />
	<meta name="twitter:creator" content={meta.authorTwitter} />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image:src" content={meta.imageUrl} />
	<meta name="twitter:image:alt" content={meta.description} />

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{meta.articleUrl}/" />
</svelte:head>
