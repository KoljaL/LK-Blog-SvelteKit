# Rasal Blog

> Just another blog, made with SvelteKit.  
> Just for my personal use or for anyone who wants to use it.  
> MIT License 


## Used technologies
- [SvelteKit](https://kit.svelte.dev/) web development, streamlined
- SvelteKit adapter-static for static site generation
- [MDSvex](https://mdsvex.com/) for markdown rerndering
- vite-Imagetools for image optimization
- Svelte-DebugBar for debugging like in Laravel
- Dark & Light Mode
- Code Highlighting & copy to clipboard



## Components
- Nested menu with endless depth, based on folder structure.
- Grid of card with article excerpt and image, sortable by date, category, tags or tag.
- Meta Tags for SEO



## Files & Folder Structure
- All articles are stored in `src/articles` as markdown files
- The folder structre is just for grouping the articles and has no effect on the url
- The file name of each article has to be `index.md`
- All article related images are stored in the same folder as the article
- Routes for article (`[...article]`), tags (`[t]`) and categories (`[c]`).
- Layout templates for articles are stored in `src/lib/layouts`.
- They are defined in the frontmatter of the article and declared in `mdsvex.config.js`.


## Data Structure
- `+layout.ts`: reads all `ìndex.md` files inside the `src/articles` folder and creates an array of all articles meta data.
- `$page.data.ArtilcesMetaData`: stores this array, so it can be used in any component.
- `+layout.svelte`: is the main layout file and contains the header, footer and the main content.
- `+page.svelte`: is the starting point for all pages and contains a welcome text and the grid of cards.
- `lib/Components/GridOfCards/Grid.svelte` creates a nested array from the articles meta data, based on the folder structure and displays the cards (`ArticleCard.svelte`) as a grid.
- - The Grid-Component has a `sort` prop, which can be used to sort the cards by date, category, tags or tag.
- `[...article]/+page.ts`: Uses the `slug` from the url to find the article in the `ArticlesMetaData` and imports the article content.
- - It returns `ArticlesMetaData` (all), `ArticleMeta`(current) and `ArticleComponent`(content).
- `+page.svelte`: uses the `ArticleComponent` to render the article content and sends the `ArticleMeta` to `<Meta />` to create the meta tags.
- `c/[category]` and `t/[tag]` are almost identically. They use the `category` or `tag` from the url to filter the `ArticlesMetaData` and send the filtered array to `<Grid />` to display the cards.
- `src/lib/layouts/default.svelte` is the default layout and will be used for all pages, which don't have a layout defined in the frontmatter.

## Frontmatter
**Required Frontmatter**
- `published`
- `layout`
- `title`
- `tags` 
- `category` 
- `description` 
- `excerpt`
- `created` 
- `edited`  
- `imagePath` 
- `imageAlt` 
- `imageDescription`   

**Generated Frontmatter**
- `articlePath`
- `articleSlug`
- `articleUrl`
- `imageUrl`
- `siteName`
- `siteUrl`
- `author` 
- `authorTwitter` 


## Types
```ts
export type ArticleMetaData = {
	published: boolean;         // only published articles will be rendered
	layout?: string;            // default, Code, Planet, ...
	title: string;              // must be unique for each article
	author?: string;            // from blog.config.js
	authorTwitter?: string;     // from blog.config.js
	tags: string;               // comma separated
	description: string;        // short description for meta tags and hover
	excerpt: string;            // for GridOfCards
	created: any;               // dd.mm.yyyy
	edited?: any;               // dd.mm.yyyy
	imagePath: string;          // relative path to the image without dot: /Jupiter.jpg 
	imageUrl?: string;          // for meta tags
	imageAlt: string;           // for meta tags
	imageDescription: string;   // for meta tags and hover
	articlePath?: string;       // generated: /src/articles/Code/
	articleSlug?: string;       // generated from title
	articleUrl?: string;        // generated: for meta tags
	siteName?: string;          // from blog.config.js
	siteUrl?: string;           // from blog.config.js
	// category: string;        // not used yet
};

export type GridSort = 'Recent' | 'Category' | 'Tag' | 'Tags';

export type ArticleMetaSorted = {
	sorted: GridSort;
	articles: ArticleMetaData[];
};
```
 

## Links I used through the development
- [Nice Svelte Starter with many components](https://github.com/the-pudding/svelte-starter/tree/main)
- [simple Blog](https://www.josean.com/posts/yabai-setup)
- [simple Blog](https://svhighlight.vercel.app/)
- [Colophon • Sidney Alcantara](https://sidney.me/colophon)
- [component Docs](https://mono-doc.vercel.app/1-Motivation)
- [josh-collinsworth/sveltekit-blog-starter](https://github.com/josh-collinsworth/sveltekit-blog-starter)
- [MDSvex and Svelte Kit](https://www.furudean.com/blog/svelte-kit-mdsvex)
- [MDSvex SEO](https://github.com/rodneylab/sveltekit-seo/blob/main/src/lib/utilities/blog.js)
- [MDSvex Highlight](https://johnhooks.io/projects/highlighter)
- [MarkMap](https://markmap.js.org/docs/markmap)
- [Dark Mode](https://scriptraccoon.dev/blog/darkmode-toggle-sveltekit)
- [Vite import.meta.glob](https://vitejs.dev/guide/features.html#glob-import)
- [SveltePress](https://github.com/SveltePress/sveltepress)
- [Store Guide](https://dev.to/jdgamble555/the-unwritten-svelte-stores-guide-47la)
- [forgeUI](https://github.com/merhmerh/merh-forge-ui/tree/main/src/lib/components)
- https://svelte.dev/docs/special-tags#const
- https://svelte.dev/repl/daa482983cd84a199f34895cdd3a08f6?version=3.38.2
- https://github.com/metonym/svelte-dark-mode
- https://github.com/metonym/svelte-img
- https://www.npmjs.com/package/@fusionary/keyword-extractor
- https://rodneylab.com/mdsvex-rehype-plugins/
- https://github.com/navneetsharmaui/sveltekit-blog
- https://github.com/KylerJohnsonDev/blog
- https://github.com/mattjennings/sveltekit-blog-template/tree/main/src
- [horizontal Cards](https://codepen.io/kenoldb/pen/byLLJd)
- https://github.com/rchrdnsh/kit-blog
- [Button component](https://svelte.dev/repl/534789091c394390905371c503bf0eae?version=3.37.0)
- dynamic Import
- - [use both load()](https://github.com/sveltejs/kit/issues/9775) find path from slug in server.ts and send it to page.ts
- - https://stackoverflow.com/questions/56431848/dynamically-loading-component-using-import-or-fetch
- - https://github.com/MailCheck-co/mailcheck.site
- - [mailcheck.site/mdsvexplugins/mdsvex-url-to-import.js at master · MailCheck-co/mailcheck.site](https://github.com/MailCheck-co/mailcheck.site/blob/master/mdsvexplugins/mdsvex-url-to-import.js)
- - [mdsvex-relative-images/index.js at main · mattjennings/mdsvex-relative-images](https://github.com/mattjennings/mdsvex-relative-images/blob/main/index.js)
- - [URLs relative to the markdown file · pngwn/MDsveX · Discussion #246](https://github.com/pngwn/MDsveX/discussions/246#discussioncomment-720947)
- - [imagetools/docs/directives.md at main · JonasKruckenberg/imagetools](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#height)
- - [Preprocessing of frontmatter · Issue #455 · pngwn/MDsveX](https://github.com/pngwn/MDsveX/issues/455)
- - [Getting the frontmatter in sveltekit __layout.svelte · Issue #313 · pngwn/MDsveX](https://github.com/pngwn/MDsveX/issues/313)
- - [Can the frontmatter be dynamic? · Issue #287 · pngwn/MDsveX](https://github.com/pngwn/MDsveX/issues/287)
- - [Injecting variables / including static assets (ie. images) · Issue #475 · pngwn/MDsveX](https://github.com/pngwn/MDsveX/issues/475)
- - [Dynamic import · Issue #5 · JonasKruckenberg/imagetools](https://github.com/JonasKruckenberg/imagetools/issues/5#issuecomment-1522596146)
- - [How to use vite-imagetools with import.meta.glob · vitejs/vite · Discussion #8695](https://github.com/vitejs/vite/discussions/8695)
- ImageTools alternative: [xiphux/svimg: Svelte image component with image preprocessing and lazy loading](https://github.com/xiphux/svimg)
- 
  

 
```js
// https://github.com/JonasKruckenberg/imagetools/issues/5#issuecomment-1522596146
const images = import.meta.glob('../example/path/*.png', {
	query: { width: '100,200,300' },
	eager: true,
});

return {
	image: images[`../example/path/${myVar}.png`]?.default || null,
};
```