<script lang="ts">
	// the honor of this code goes to
	// https://github.com/sveltejs/kit/issues/241#issuecomment-1596383596
	export let path: string;
	export let alt: string = '';
	export let draggable: boolean = false;
	export let decoding: 'async' | 'sync' | 'auto' = 'async';
	export let loading: 'lazy' | 'eager' = 'lazy';
	export let classes: string = '';
	export let width: number = 0;

	let imageFound = true;
	interface Picture {
		sources: {
			avif: {
				src: string;
				w: number;
			}[];
			webp: {
				src: string;
				w: number;
			}[];
		};
		img: {
			src: string;
			w: number;
			h: number;
		};
	}

	const allImages: Record<string, Picture> = import.meta.glob(
		'/src/articles/**/*.{png,jpg,jpeg,PNG,JPEG}',
		{
			query: { w: '400;600;900' },
			eager: true
		}
	);

	const src: Picture = allImages[path];

	if (!src) {
		// console.log('NF', path);
		// console.log('allImages', allImages);
		imageFound = false;
	}

	if (!width) {
		width = src.img.w;
	}

	// $: console.log('SRC', src);
	// console.log('allImages', JSON.stringify(allImages, null, 2));
	// console.log('src', JSON.stringify(src, null, 2));
	// console.log('src', JSON.stringify(path, null, 2));
</script>

{#if imageFound}
	<picture>
		{#each Object.entries(src.sources) as [format, images]}
			<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
		{/each}

		<img
			src={src.img.src}
			{loading}
			class={classes}
			{decoding}
			{draggable}
			{width}
			height={src.img.h}
			{alt}
		/>
	</picture>
{/if}

<style>
	img {
		width: 100%;
	}
</style>
