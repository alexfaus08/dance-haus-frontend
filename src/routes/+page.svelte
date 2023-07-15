<script lang="ts">
	import Section from '../components/Section.svelte';

	export let data;

	const textWithImage = data.homepageData.pageData[0].textWithImage;
	const events = data.homepageData.eventsData;

	import TextWithImage from '../components/TextWithImage.svelte';
	import { default as imageFor } from '$lib/imageFor.ts';
</script>

<div>
	<Section>
		{#if textWithImage}
			<TextWithImage {textWithImage} />
		{/if}
	</Section>
	<Section bgColor="bg-surface-700">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-center text-4xl my-8 p-4 text-secondary-400">Upcoming Events</h2>
			<div class="grid lg:grid-cols-2 gap-8">
				{#each events as event}
					<div class="card card-hover">
						<a href={imageFor(event.flyer)} target="_blank">
							<img
								class="snap-center w-[1024px] rounded-container-token"
								src={imageFor(event.flyer)}
								alt="event flyer"
								loading="lazy"
							/>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</Section>
</div>
