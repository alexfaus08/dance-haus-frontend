<script lang="ts">
	import Section from '../components/Section.svelte';

	export let data;

	const homepageData = data.homepageData.pageData;
	console.log(homepageData);
	const metaData = homepageData.metaInformation;
	const textWithImage = data.homepageData.pageData.textWithImage;
	const events = data.homepageData.eventsData;
	const danceClasses = data.homepageData.classesData;

	import TextWithImage from '../components/TextWithImage.svelte';
	import { default as imageFor } from '$lib/imageFor.ts';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import DanceClassListItem from '../components/DanceClassListItem.svelte';
</script>

<svelte:head>
	<title>
		{metaData.title}
	</title>
	<meta name="description" content={metaData.description} />
	<meta name="keywords" content={metaData.keywords.join(', ')} />
</svelte:head>
<div>
	<Section id="top">
		<div class="flex flex-col gap-4 pb-10">
			<h1
				class="text-center text-7xl bg-gradient-to-br from-primary-700 to-primary-600 bg-clip-text text-transparent box-decoration-clone"
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
			<a href="#documents" class="btn text-sm variant-filled-tertiary">
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
				Registration and Pricing Documents
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
			<AccordionItem>
				<svelte:fragment slot="lead">
					<h3 class="text-2xl">Wednesdays</h3>
				</svelte:fragment>
				<!-- summary is required -->
				<svelte:fragment slot="summary">
					<div class="hidden" />
				</svelte:fragment>
				<svelte:fragment slot="content">
					<div>
						{#each danceClasses.get('Wednesday') as danceClass}
							<DanceClassListItem {danceClass} />
						{/each}
					</div>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<h3 class="text-2xl">Thursdays</h3>
				</svelte:fragment>
				<!-- summary is required -->
				<svelte:fragment slot="summary">
					<div class="hidden" />
				</svelte:fragment>
				<svelte:fragment slot="content">
					<div>
						{#each danceClasses.get('Thursday') as danceClass}
							<DanceClassListItem {danceClass} />
						{/each}
					</div>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<h3 class="text-2xl">Fridays</h3>
				</svelte:fragment>
				<!-- summary is required -->
				<svelte:fragment slot="summary">
					<div class="hidden" />
				</svelte:fragment>
				<svelte:fragment slot="content">
					<div>
						{#each danceClasses.get('Friday') as danceClass}
							<DanceClassListItem {danceClass} />
						{/each}
					</div>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<h3 class="text-2xl">Saturday</h3>
				</svelte:fragment>
				<!-- summary is required -->
				<svelte:fragment slot="summary">
					<div class="hidden" />
				</svelte:fragment>
				<svelte:fragment slot="content">
					<div>
						{#each danceClasses.get('Saturday') as danceClass}
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
				download="TheDanceHausStudioPricingAndRegulations"
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
				Studio Pricing and Regulations Document
			</a>
		</div>
	</Section>
	<footer id="footer">
		<div class="flex flex-row items-center justify-between p-8 lg:w-2/3 mx-auto">
			<div class="flex flex-col gap-2">
				<span class="text-2xl text-primary-300">
					{homepageData.title}
				</span>
				<div class="grid-cols-3 gap-1 lg:hidden">
					<a
						class="btn btn-sm"
						href="https://www.facebook.com/people/The-Dance-Haus/100083590622990/"
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 512 512"
							fill="white"
							class="w-5 h-5"
							><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
							/></svg
						>
					</a>
					<a href="https://www.instagram.com/thedancehausfl/" target="_blank" class="btn btn-sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="white"
							height="1em"
							viewBox="0 0 448 512"
							class="w-5 h-5"
							><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
							/></svg
						>
					</a>
					<a class="btn btn-sm" href="https://www.tiktok.com/@thedancehausfl" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							stroke="currentColor"
							fill="white"
							stroke-width="1"
							class="w-5 h-5"
							height="1em"
							viewBox="0 0 448 512"
							><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
							/></svg
						>
					</a>
				</div>

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
			<div class="grid-cols-3 gap-1 hidden lg:grid">
				<a
					class="btn btn-sm lg:btn-lg"
					href="https://www.facebook.com/people/The-Dance-Haus/100083590622990/"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 512 512"
						fill="white"
						class="w-7 h-7"
						><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
						/></svg
					>
				</a>
				<a
					href="https://www.instagram.com/thedancehausfl/"
					target="_blank"
					class="btn btn-sm lg:btn-lg"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="white"
						height="1em"
						viewBox="0 0 448 512"
						class="w-7 h-7"
						><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
						/></svg
					>
				</a>
				<a
					class="btn btn-sm lg:btn-lg"
					href="https://www.tiktok.com/@thedancehausfl"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						stroke="currentColor"
						fill="white"
						stroke-width="1"
						class="w-7 h-7"
						height="1em"
						viewBox="0 0 448 512"
						><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
						/></svg
					>
				</a>
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
