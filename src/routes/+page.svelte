<script>
	export let data;

	import imageUrlBuilder from '@sanity/image-url';
	import { default as client } from '$lib/sanity.ts';

	console.log(data);
	const builder = imageUrlBuilder(client);

	function imageFor(imgSrc) {
		console.log(imgSrc);
		return builder.image(imgSrc);
	}
</script>

<div class="p-20">
	<div class="flex flex-row items-center">
		<div
			class="flex flex-col items-center gap-4 card p-8 card-hover w-1/2 m-5 variant-filled-surface"
		>
			<p>
				{data.homepageData[0].textWithImage.text}
			</p>

			<button type="button" class="btn bg-gradient-to-br variant-gradient-primary-secondary"
				>See Our Class Schedule</button
			>
		</div>
		{#if data.homepageData[0].textWithImage.image && data.homepageData[0].textWithImage.image.asset}
			<img class="rounded" src={imageFor(data.homepageData[0].textWithImage.image)} alt="" />
		{/if}
	</div>
</div>
