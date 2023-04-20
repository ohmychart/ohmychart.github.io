<script>
	import SettingsStore from '$lib/stores/settings.js';
	import MainScreen from '$lib/components/MainScreen.svelte';
	import NavButton from '$lib/components/nav/NavButton.svelte';
	import NavScreen from '$lib/components/nav/NavScreen.svelte';
	
	export let data;
	$SettingsStore.lang = 'ru';

</script>

<svelte:head>
	<title>OhMyChart! — Инфографика и визуальные истории</title>
	<meta
		name="description"
		content="Визуализация данных, инфографика и визуальные истории на экономические, исторические и социальные темы"
	/>
</svelte:head>

<MainScreen lang="ru" features={data.features} />
<NavButton />
<NavScreen />