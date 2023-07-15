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
	<Section id="top">
		<div class="flex flex-col gap-4 pb-10">
			<h1
				class="text-center text-7xl bg-gradient-to-br from-primary-600 to-primary-200 bg-clip-text text-transparent box-decoration-clone"
			>
				{homepageData.title}
			</h1>
			<h2 class="text-center text-3xl text-primary-200">{homepageData.tagline}</h2>
		</div>
		{#if textWithImage}
			<TextWithImage {textWithImage} />
		{/if}
	</Section>
	<Section bgColor="bg-gradient-to-t from-secondary-500 to-surface-initial" id="events">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-center text-4xl my-8 p-4 text-secondary-400">Upcoming Events</h2>
			<div class="grid lg:grid-cols-2 gap-8">
				{#each events as event}
					<div class="card card-hover">
						<a href={imageFor(event.flyer)} target="_blank">
							<img
								class="snap-center w-[1024px] h-full rounded-container-token"
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
	<Section bgColor="bg-surface-700" id="contactUs">
		<h2 class="text-center text-4xl text-tertiary-300 mb-2">Contact Us</h2>
		<p class="text-center text-xl text-tertiary-500">
			{homepageData.contactUsTagline}
		</p>
		<div class="lg:flex-row flex flex-col items-center justify-center gap-4 mt-6">
			<a class="btn variant-filled-primary" href={`tel:${homepageData.phoneNumber}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6 mr-1.5"
				>
					<path
						fill-rule="evenodd"
						d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
						clip-rule="evenodd"
					/>
				</svg>

				{homepageData.phoneNumber}
			</a>
			<a class="btn variant-filled-secondary" href={`mailto:${homepageData.email}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6 mr-1.5"
				>
					<path
						d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
					/>
					<path
						d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
					/>
				</svg>

				{homepageData.email}
			</a>
			<a href="#documents" class="btn variant-filled-tertiary">
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
						d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
					/>
				</svg>
				Registration Documents
			</a>
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
	<Section bgColor="bg-surface-600" id="documents">
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
	<footer id="footer">
		<div class="flex flex-row items-center justify-between p-8 lg:w-2/3 mx-auto">
			<div class="flex flex-col gap-2">
				<span class="text-2xl text-primary-300">
					{homepageData.title}
				</span>
				<a class="text-secondary-400 underline" href={`tel:${homepageData.phoneNumber}`}>
					{homepageData.phoneNumber}
				</a>
				<a class="text-secondary-400 underline" href={`mailto:${homepageData.email}`}>
					{homepageData.email}
				</a>
				<span>
					{homepageData.address}
				</span>
			</div>
			<div class="text-tertiary-700 flex flex-col items-center text-sm">
				<span> 2023 </span>
				<span>
					Website by <a class="underline" href="mailto:alexfaus08@gmail.com"> Alexander Faus </a>
				</span>
			</div>
		</div>
	</footer>
</div>
