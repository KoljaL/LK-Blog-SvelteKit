import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
let dev = process.env.NODE_ENV === 'development';

if (process.env.NODE_DEV === 'development') {
	dev = true;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) {
			return;
		}
		// console.log('\x1b[36m%s\x1b[0m', 'I am cyan'); //cyan
		console.log('\n\nsvelte:warnings:\x1b[31m%s\x1b[0m', JSON.stringify(warning, null, 2));
		handler(warning);
	},

	kit: {
		paths: {
			base: dev ? '' : '/LK-Blog-SvelteKit'
			// base: dev ? '' : '/blog'
		},
		prerender: {
			handleMissingId: 'ignore'
		},

		alias: {
			$components: './src/components',
			$lib: './src/lib',
			$stores: './src/stores',
			$styles: './src/styles',
			$utils: './src/utils',
			$types: './src/types.d.ts'
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: '200.html',
			precompress: false,
			strict: true
		})
	}
};

export default config;
