<script lang="ts">
	// import src from '/src/articles/Code/Laravel/Laravel-Title.png?w=2048;500&invert';
	// import src from '/src/articles/Code/Laravel/Laravel-Title.png';
	export let path: string;
	console.log('\n\npath', path);
	export const alt: string = 'image';

	// const gallery = Object.values(
	// 	import.meta.glob('../../../articles/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' })
	// );

	const allImages = import.meta.glob('/src/articles/**/*.{png,jpg,jpeg,PNG,JPEG}', {
		// query: { width: '100,200,300', format: 'webp' },
		query: { w: '400;600;900' },
		eager: true
		// as: 'url'
	});
	// console.log('allImages', JSON.stringify(allImages, null, 2));
	// path = '/src/articles/Code/Laravel/Laravel-Title.png';
	const src = allImages[path];
	// const src = allImages['/src/articles/Code/Laravel/Laravel-Title.png'];
	$: console.log('SRC', src);

	// Object.entries(src.sources).forEach((element) => {
	// 	console.log(element);
	// });

	// console.log('src', JSON.stringify(src, null, 2));
</script>

<picture>
	{#each Object.entries(src.sources) as [format, images]}
		<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
	{/each}

	<img src={src.img.src} width={src.img.w} height={src.img.h} />
</picture>

<style>
	img {
		grid-area: image;
		height: var(--img-height);
		border-radius: 0.6rem;
		/* border-top-left-radius: var(--radius-m); */
		/* border-bottom-left-radius: var(--radius-m); */
		aspect-ratio: 1 / var(--img-ratio);
		object-fit: cover;
		object-position: top left;
		cursor: pointer;
		padding: 0.5rem;
	}
</style>
