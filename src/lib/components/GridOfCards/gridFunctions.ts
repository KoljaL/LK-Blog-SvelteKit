import type { ArticlesMetaData, ArticleMetaSorted } from '$types';
// import { page } from '$app/stores';
// import { formatDate } from '$lib/functions/utils';

export function sortedByDate(articles: ArticlesMetaData) {
	const sortedByYearMonth: ArticleMetaSorted[] = [];
	const yearMonthMap = new Map();

	// console.log('articles', articles);

	sortByDate(articles).forEach((article) => {
		const date = new Date(article.created);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const formattedMonth = month < 10 ? `0${month}` : `${month}`;
		const sorted = `${year}-${formattedMonth}`;

		if (!yearMonthMap.has(sorted)) {
			yearMonthMap.set(sorted, []);
		}

		yearMonthMap.get(sorted).push(article);
	});

	yearMonthMap.forEach((articles, sorted) => {
		sortedByYearMonth.push({ sorted, articles });
	});

	return sortedByYearMonth;
}

export function sortedByTags(articles: ArticlesMetaData) {
	const sortedByTag: ArticleMetaSorted[] = [];
	const tagMap = new Map();

	sortByDate(articles).forEach((article) => {
		article.tags.split(', ').forEach((sorted: string) => {
			if (!tagMap.has(sorted)) {
				tagMap.set(sorted, []);
			}
			tagMap.get(sorted).push(article);
		});
	});

	tagMap.forEach((articles, sorted) => {
		sortedByTag.push({ sorted, articles });
	});

	return sortedByTag;
}

export function sortedByCategory(articles: ArticlesMetaData) {
	const sortedByCategory: ArticleMetaSorted[] = [];
	const catMap = new Map();

	sortByDate(articles).forEach((article) => {
		// console.log('article.category', article.category);
		const cat = article.category;
		if (!catMap.has(cat)) {
			catMap.set(cat, []);
		}
		catMap.get(cat).push(article);
	});

	catMap.forEach((articles, sorted) => {
		sortedByCategory.push({ sorted, articles });
	});

	return sortedByCategory;
}

/**
 * @description Sorts articles by date
 *
 * @param {ArticlesMetaData} articles
 *
 * @returns {ArticlesMetaData}
 */
function sortByDate(articles: ArticlesMetaData) {
	return articles;
	// return articles.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
