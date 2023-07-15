<script>
	export let bgColor = 'bg-initial';
</script>

<section class={bgColor}>
	<div class="max-w-7xl mx-auto p-8 lg:p-14">
		<slot />
	</div>
</section>
