<script lang="ts">
	import Section from '../components/Section.svelte';

	export let data;

	const homepageData = data.homepageData.pageData;
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
	<Section bgColor="bg-surface-700" id="events">
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
	<Section bgColor="bg-surface-600">
		<h2 class="text-center text-4xl text-primary-400">{homepageData.registrationTagline}</h2>
		<p class="p-4 text-lg md:text-2xl mb-4">
			{homepageData.registrationDescription}
		</p>
		<div class="flex flex-col md:flex-row items-center justify-center gap-6">
			<a
				class="btn variant-filled-primary"
				href={homepageData.registrationDocumentUrl}
				download="TheDanceHausRegistration"
				target="_blank"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 mr-1"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
					/>
				</svg>

				Registration Document
			</a>
			<a
				class="btn variant-filled-secondary"
				href={homepageData.studioRegulationsDocumentUrl}
				download="TheDanceHausStudioRegulations"
				target="_blank"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 mr-1"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
					/>
				</svg>
				Studio Regulations Document
			</a>
		</div>
	</Section>
	<footer>
		<div class="max-w-7xl mx-auto p-8 lg:p-14">The Dance Haus</div>
	</footer>
</div>
