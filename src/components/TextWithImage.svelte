<script>
	export let textWithImage;
	export let imageOnLeft = false;

	import { PortableText } from '@portabletext/svelte';
	import { default as client } from '$lib/sanity.ts';
	import imageUrlBuilder from '@sanity/image-url';

	const builder = imageUrlBuilder(client);

	function imageFor(imgSrc) {
		return builder.image(imgSrc);
	}
</script>

<div class="flex flex-col lg:flex-row items-center p-4">
	{#if textWithImage.image && textWithImage.image.asset && imageOnLeft}
		<img
			class="hidden lg:flex rounded w-1/2"
			src={imageFor(textWithImage.image)}
			alt={textWithImage.alt}
		/>
	{/if}
	<div
		class="flex flex-col items-center gap-4 card lg:p-8 card-hover w-3/4 md:w-1/2 lg:m-5 variant-filled-surface"
	>
		<header>
			<img
				class="lg:hidden rounded-t flex w-full"
				src={imageFor(textWithImage.image)}
				alt={textWithImage.alt}
			/>
		</header>

		{#if textWithImage.text}
			<p class="p-4 lg:p-8">
				<PortableText value={textWithImage.text} />
			</p>
		{/if}

		<button type="button" class="mb-8 btn bg-gradient-to-br variant-gradient-primary-secondary">
			{textWithImage.buttonText}
		</button>
	</div>
	{#if textWithImage.image && textWithImage.image.asset && !imageOnLeft}
		<img
			class="hidden lg:flex rounded w-1/2"
			src={imageFor(textWithImage.image)}
			alt={textWithImage.alt}
		/>
	{/if}
</div>
