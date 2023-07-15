<script>
	export let danceClass;
</script>

<div class="p-2 md:p-4 flex flex-row items-center justify-between">
	<div>
		<h3 class="text-secondary-300 text-xl flex flex-col lg:flex-row lg:items-center">
			<span>
				{danceClass.name}
			</span>
			{#if danceClass.ageGroup}
				<span class="text-sm lg:text-lg text-primary-300">
					(Ages {danceClass.ageGroup})
				</span>
			{/if}
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
