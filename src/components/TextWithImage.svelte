<script>
	export let textWithImage;
	export let imageOnLeft = false;

	import { default as imageFor } from '$lib/imageFor.ts';
	import { PortableText } from '@portabletext/svelte';
</script>

<div class="flex flex-col lg:flex-row items-center">
	{#if textWithImage.image && textWithImage.image.asset && imageOnLeft}
		<img
			class="hidden lg:flex rounded w-1/2"
			src={imageFor(textWithImage.image)}
			alt={textWithImage.alt}
		/>
	{/if}
	<div
		class="flex flex-col items-center gap-4 card lg:p-8 card-hover w-5/6 md:w-1/2 lg:m-5 variant-filled-surface"
	>
		<header>
			<img
				class="lg:hidden card flex w-full"
				src={imageFor(textWithImage.image)}
				alt={textWithImage.alt}
			/>
		</header>

		{#if textWithImage.text}
			<p class="p-4 lg:p-8">
				<PortableText value={textWithImage.text} />
			</p>
		{/if}

		<a
			href={textWithImage.buttonLink}
			class="mb-8 btn bg-gradient-to-br variant-gradient-primary-secondary"
		>
			{textWithImage.buttonText}
		</a>
	</div>
	{#if textWithImage.image && textWithImage.image.asset && !imageOnLeft}
		<img
			class="hidden lg:flex card w-1/2"
			src={imageFor(textWithImage.image)}
			alt={textWithImage.alt}
		/>
	{/if}
</div>
