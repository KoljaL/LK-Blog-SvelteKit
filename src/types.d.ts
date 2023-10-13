// Type definitions for blog
export type ArticleMetaData = {
	published: boolean; // only published articles will be rendered
	layout?: string; // default, Code, Planet, ...
	title: string; // must be unique for each article
	author?: string; // from blog.config.js
	authorTwitter?: string; // from blog.config.js
	tags: string; // comma separated
	description: string; // short description for meta tags and hover
	excerpt: string; // for GridOfCards
	created: string; // dd.mm.yyyy
	edited?: string; // dd.mm.yyyy
	imagePath: string; // relative path to the image without dot: /Jupiter.jpg
	imageUrl?: string; // for meta tags
	imageAlt: string; // for meta tags
	imageDesc: string; // for meta tags and hover
	articlePath?: string; // generated: /src/articles/Code
	articleFile?: string; // generated: Code.md
	articleSlug?: string; // generated from title
	articleUrl?: string; // generated: for meta tags
	siteName?: string; // from blog.config.js
	siteUrl?: string; // from blog.config.js
	category?: string; // not used yet
};

export type ArticlesMetaData = ArticleMetaData[];

export type GridSort = 'Recent' | 'Category' | 'Tag' | 'Tags';

export type ArticleMetaSorted = {
	sorted: GridSort;
	articles: ArticlesMetaData;
};
