import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import { version } from './package.json';
import { imagetools } from 'vite-imagetools';
const supportedExtensions = ['png', 'jpg', 'jpeg'];
export default defineConfig({
	plugins: [
		// imagetools(),
		imagetools({
			defaultDirectives: new URLSearchParams({
				format: 'avif;webp',
				as: 'picture'
			})
		}),
		// imagetools({
		// 	defaultDirectives: (url) => {
		// 		const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);
		// 		if (supportedExtensions.includes(extension)) {
		// 			return new URLSearchParams({
		// 				format: 'avif;webp;' + extension,
		// 				picture: true
		// 			});
		// 		}
		// 		return new URLSearchParams();
		// 	}
		// }),
		sveltekit()
	]
	// define: {
	// 	__APP_VERSION__: `"${version}"`,
	// 	__BUILD_TIME__: `${JSON.stringify(new Date().toISOString())}`
	// }
});

// sveltekit({
// 	// onwarn(warning, handler) {
// 	// 	if (!IGNORED_WARNINGS.includes(warning.code)) handler(warning);
// 	// }
// })
// const IGNORED_WARNINGS = [
// 	'a11y-aria-attributes',
// 	'a11y-incorrect-aria-attribute-type',
// 	'a11y-unknown-aria-attribute',
// 	'a11y-hidden',
// 	'a11y-misplaced-role',
// 	'a11y-unknown-role',
// 	'a11y-no-abstract-role',
// 	'a11y-no-redundant-roles',
// 	'a11y-role-has-required-aria-props',
// 	'a11y-accesskey',
// 	'a11y-autofocus',
// 	'a11y-misplaced-scope',
// 	'a11y-positive-tabindex',
// 	'a11y-invalid-attribute',
// 	'a11y-missing-attribute',
// 	'a11y-img-redundant-alt',
// 	'a11y-label-has-associated-control',
// 	'a11y-media-has-caption',
// 	'a11y-distracting-elements',
// 	'a11y-structure',
// 	'a11y-mouse-events-have-key-events',
// 	'a11y-missing-content',
// 	'unused-export-let',
// 	'a11y-click-events-have-key-events',
// 	'a11y-no-noninteractive-tabindex'
// ];
