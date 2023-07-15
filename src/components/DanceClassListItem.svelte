<script>
	export let danceClass;
</script>

<div class="p-2 md:p-4 flex flex-row items-center justify-between">
	<div>
		<h3 class="text-secondary-300 text-xl">
			{danceClass.name}
		</h3>
		<h4 class="text-secondary-400">
			Taught by {danceClass.instructor}
		</h4>
		<span>
			{danceClass.startTime} - {danceClass.endTime}
		</span>
	</div>
	<div
		class={`p-2 text-sm rounded h-fit ${
			danceClass.haus === 'Haus 1' ? 'bg-primary-400' : 'bg-tertiary-700'
		}`}
	>
		{danceClass.haus}
	</div>
</div>
