<script>
	import SettingsStore from '$lib/stores/settings.js';

    export let data;

    import StaticFeatureScreen from '$lib/components/StaticFeatureScreen.svelte';
    import NavButton from '$lib/components/nav/NavButton.svelte';
	import NavScreen from '$lib/components/nav/NavScreen.svelte';

	$SettingsStore.lang = 'ru';
	
</script>

<svelte:head>
	<title>{data.currentFeature.title} — OhMyChart! — Инфографика и визуальные истории</title>
	<meta
		name="description"
		content="{data.currentFeature.desc}"
	/>
</svelte:head>

<StaticFeatureScreen data={data.currentFeature} />
<NavButton />
<NavScreen features={data.features} />