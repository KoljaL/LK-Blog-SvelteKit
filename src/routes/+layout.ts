export const prerender = true;
// export const trailingSlash = 'ignore';

import { PUBLIC_ARTICLE_PATH } from '$env/static/public';
import type { ArticleMetaData, ArticlesMetaData } from '$types';

interface Post {
	metadata: ArticleMetaData;
}

export async function load() {
	const ArticlesMeta: ArticlesMetaData = await getArticlesMeta();
	return { ArticlesMeta };
}

/**
 * @description get articles metadata
 *
 * @returns {Promise<ArticleMetadata[]>}
 */
async function getArticlesMeta() {
	// console.log('+layouts.ts getArticlesMeta()');
	const articlesFiles = import.meta.glob('/src/articles/**/*.md');
	const postPromises: Promise<ArticleMetaData>[] = [];
	// console.log('articlesFiles', articlesFiles);
	for (const [path, resolver] of Object.entries(articlesFiles)) {
		const articlePath = getArticlePath(path);
		const category = articlePath.split('/')[1];
		const post: Post = (await resolver()) as Post;
		const articleSlug = slugFromTitle(post.metadata.title);
		// console.log('articlePath', articlePath);
		// const articleFile = path.split('/').pop();
		// console.log('post', post);
		postPromises.push(
			Promise.resolve({
				articleSlug,
				articlePath,
				category,
				articleFile: path,
				...post.metadata
			})
		);
	}

	const articles = await Promise.all(postPromises);
	articles.sort((a, b) => {
		const aDate = new Date(a.created);
		const bDate = new Date(b.created);
		return bDate.getTime() - aDate.getTime();
	});
	return articles;
}

/**
 * @description get slug from title
 * @param {string} title
 *
 * @returns {string} slug
 */
function slugFromTitle(title: string): string {
	return (
		title
			// .toLowerCase()
			.trim()
			.replace(/ /g, '-')
			.replace(/[^\w-]+/g, '')
			.replace(/--+/g, '-')
	);
}
function getArticlePath(path: string) {
	path = path.replace(PUBLIC_ARTICLE_PATH, '');
	const pathArray = path.split('/');
	pathArray.pop();
	return pathArray.join('/');
}
