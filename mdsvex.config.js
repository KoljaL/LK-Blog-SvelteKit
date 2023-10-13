// import remarkGithub from 'remark-github';
// import remarkAbbr from 'remark-abbr';
// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import highlighter from './src/lib/mdsvexplugins/codeHighlighter.js';
// import mdsvexFormatterToImport from './src/lib/mdsvexplugins/mdsvex-formatter-to-import.js';
// import mdsvexUrlToImport from './src/lib/mdsvexplugins/mdsvex-url-to-import.js';

const config = defineConfig({
	extensions: ['.md'], //'.svelte', 
	layout: {
		default: './src/lib/layouts/defaultLayout.svelte',
	},
	smartypants: {
		dashes: 'oldschool'
	},
	highlight: {
		highlighter
	},
	// remarkPlugins: [
		// mdsvexFormatterToImport
		// mdsvexUrlToImport
		// 	[
		// 		remarkGithub,
		// 		{
		// 			// TODO: Replace with your own repository
		// 			repository: 'https://github.com/mvasigh/sveltekit-mdsvex-blog.git'
		// 		}
		// 	],
		// 	remarkAbbr
		// ],
		// rehypePlugins: [
		// 	rehypeSlug,
		// 	[
		// 		rehypeAutolinkHeadings,
		// 		{
		// 			behavior: 'wrap'
		// 		}
		// 	]
	// ]
});

export default config;
