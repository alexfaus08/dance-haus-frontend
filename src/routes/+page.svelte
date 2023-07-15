<script lang="ts">
	import Section from '../components/Section.svelte';

	export let data;

	const textWithImage = data.homepageData.pageData.textWithImage;
	const events = data.homepageData.eventsData;
	const danceClasses = data.homepageData.classesData;

	import TextWithImage from '../components/TextWithImage.svelte';
	import { default as imageFor } from '$lib/imageFor.ts';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import DanceClassListItem from '../components/DanceClassListItem.svelte';
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
	<Section bgColor="bg-gradient-to-br variant-gradient-primary-secondary" id="classSchedule">
		<h2 class="text-center text-4xl">Class Schedule</h2>
		<Accordion class="card p-4 mt-6">
			<AccordionItem open>
				<svelte:fragment slot="lead">
					<h3 class="text-2xl">Mondays</h3>
				</svelte:fragment>
				<!-- summary is required -->
				<svelte:fragment slot="summary">
					<div class="hidden" />
				</svelte:fragment>
				<svelte:fragment slot="content">
					<div>
						{#each danceClasses.get('Monday') as danceClass}
							<DanceClassListItem {danceClass} />
						{/each}
					</div>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<h3 class="text-2xl">Tuesdays</h3>
				</svelte:fragment>
				<!-- summary is required -->
				<svelte:fragment slot="summary">
					<div class="hidden" />
				</svelte:fragment>
				<svelte:fragment slot="content">
					<div>
						{#each danceClasses.get('Tuesday') as danceClass}
							<DanceClassListItem {danceClass} />
						{/each}
					</div>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</Section>
</div>
