import type { PageLoad } from './$types';
import type { ArticleMetaData } from '$types';
// import type { ComponentType } from 'svelte';
import type { SvelteComponent } from 'svelte';
export type CustomToTheRescueComponent = new (options: { target: HTMLElement }) => SvelteComponent;
export const load = (async ({ params, parent }) => {
	// console.log(params);
	const urlSlug = params.article;
	const { articlesMeta } = await parent();

	const articleMeta: ArticleMetaData | undefined = articlesMeta.find((article: ArticleMetaData) => {
		return article.articleSlug === urlSlug;
	});

	// console.log(articleMeta);
	if (!articleMeta) {
		// to-do add errorpage
		console.error('make an error page');
		return {
			status: 404
		};
	}

	// const ArticlePath = articleMeta.path || '';
	// // WORKS :-)
	const articleFile: string | undefined = articleMeta?.articleFile;
	if (!articleFile) {
		// to-do add errorpage
		console.error('make an error page');
		return {
			status: 404
		};
	}
	const articleFileReplaced = articleFile.replace('/src', '../..');
	// const articleComponents = import.meta.glob('../../articles/**/**/*.md');
	// const articleComponent: unknown = await articleComponents[`${articleFileReplaced}`]();
	// to-do find better types for the imported Component
	const articleComponents = await import.meta.glob('../../articles/**/**/*.md');
	const articleComponentModule = (await articleComponents[articleFileReplaced]()) as {
		default: CustomToTheRescueComponent;
	};
	const articleComponent: CustomToTheRescueComponent = articleComponentModule.default;

	// console.log(articleFile);
	// console.log('articleComponent', articleComponent);
	// console.log('ArticlePathStripped', ArticlePathStripped);
	// console.log('articleMeta', articleMeta);
	// console.log('articleComponents', articleComponents);
	// console.log('articleComponents', JSON.stringify(articleComponents, null, 2));
	// console.log('xxx', `../../articles${ArticlePathStripped}/${articleFilename}`);

	return {
		articlesMeta,
		articleMeta,
		articleComponent: articleComponent
	};
}) satisfies PageLoad;
