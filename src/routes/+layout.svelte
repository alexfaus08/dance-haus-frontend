<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="#top">
					<strong
						class="lg:pl-32 text-lg md:text-xl uppercase bg-gradient-to-br from-primary-700 to-primary-600 bg-clip-text text-transparent box-decoration-clone"
						>The Dance Haus</strong
					>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="lg:pr-32 flex flex-row items-center gap-4">
					<a class="btn btn-sm md:btn-lg bg-initial" href="#events"> Events </a>
					<a class="btn btn-sm md:btn-lg bg-initial" href="#classSchedule"> Classes </a>
					<a class="btn btn-sm md:btn-lg bg-initial" href="#contactUs"> Contact Us </a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
