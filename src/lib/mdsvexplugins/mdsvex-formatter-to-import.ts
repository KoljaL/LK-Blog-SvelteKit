// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { visit } from 'unist-util-visit';
// forgive me
const RE_SCRIPT_START =
	/<script(?:\s+?[a-zA-z]+(=(?:["']){0,1}[a-zA-Z0-9]+(?:["']){0,1}){0,1})*\s*?>/i;

const ARTICLE_PATH = 'src/articles/';
const FILE_NAME = '+page.md';

// look for coverImageUrl in formatter part of the markdown xx
// if it exists we create manual import of image for vite
// and export it to page metadata (that is available in layout)
// that allows to use imagetools plugin for thumbnail generation
export default function formatterToImport() {
	console.log('\n\n\nMDsvex-formatter-to-import\n\n\n');
	return function transformer(tree: unknown, vFile: unknown) {
		if (vFile.filename.endsWith('.md') && vFile.data.fm?.image) {
			const filename = vFile.filename;
			// console.log('vFile.filename: ', filename);
			// console.log('vFile Data\n', vFile.data.fm);
			// console.log('tree', tree);
			// get everything after "articles" in the path
			const path = filename.split(ARTICLE_PATH)[1].split(FILE_NAME)[0];
			// remove leading slash
			// console.log('path: ', path);

			const image = vFile.data.fm.image;

			const image_url = `/src/articles/${path}${image}`;
			// console.log('image_url: ', image_url);

			const scripts = `import thumbnail from "${image_url}";\n
      metadata.thumbnail=thumbnail;\n`;
			let is_script = false;
			visit(tree, 'html', (node) => {
				if (RE_SCRIPT_START.test(node.value)) {
					is_script = true;
					node.value = node.value.replace(RE_SCRIPT_START, (script) => `${script}\n${scripts}`);
				}
			});

			if (!is_script) {
				tree.children.push({
					type: 'html',
					value: `<script>\n${scripts}</script>`
				});
			}
		}
		if (vFile.filename.endsWith('.md')) {
			visit(tree, ['yaml', 'toml'], (node) => {
				const path = vFile.filename.split(ARTICLE_PATH)[1].split(FILE_NAME)[0];
				node.value += `\nabsPath: ${path}\n`;
				// console.log(node);
			});
			// console.log('tree:', tree);
		}
	};
}
