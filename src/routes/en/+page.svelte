<script>
	import SettingsStore from '$lib/stores/settings.js';

	import MainScreen from '$lib/components/MainScreen.svelte';
	import NavButton from '$lib/components/nav/NavButton.svelte';
	import NavScreen from '$lib/components/nav/NavScreen.svelte';
	
	export let data;

	$SettingsStore.lang = 'en';

</script>

<svelte:head>
	<title>OhMyChart! — Data-driven visualizations & visual stories</title>
	<meta
		name="description"
		content="Data visualizations, infographics and visual stories on economy, history and other social topics"
	/>
</svelte:head>

<MainScreen features={data.features} />
<NavButton />
<NavScreen />

