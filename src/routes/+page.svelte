<script>
	export let data;

	import TextWithImage from '../components/TextWithImage.svelte';
</script>

<div class="lg:p-20">
	{#if data.homepageData[0].textWithImage}
		<TextWithImage textWithImage={data.homepageData[0].textWithImage} imageOnLeft />
	{/if}
</div>
