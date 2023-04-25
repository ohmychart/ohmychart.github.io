<script>
	import SettingsStore from '$lib/stores/settings';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FeaturesFeed from '$lib/components/FeaturesFeed.svelte';

	export let features;
</script>

<div class="main-screen" class:hide={$SettingsStore.showNav}>
	<Header />
	<main>
		<FeaturesFeed {features} />
	</main>
	<Footer />
</div>

<style>
	.main-screen {
		padding-top: var(--main-screen-padding);
		padding-bottom: var(--main-screen-padding);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: var(--main-screen-row-gap);
		transition: var(--transition-nav);
	}

	.main-screen.hide {
		transform: translateY(-100vh);
	}
</style>
