<script>
	import { goto } from '$app/navigation';
	import SettingsStore from '$lib/stores/settings';

	import Logo from '$lib/components/Logo.svelte';

	import langSwitchRu from '$lib/svg/lang-switch-ru.svg?raw';
	import langSwitchEn from '$lib/svg/lang-switch-en.svg?raw';
</script>

<header>
	<a href={$SettingsStore.lang === 'ru' ? '/' : '/en'} title="OhMyChart!" aria-description="Go to OhMyChart.com">
		<Logo lang={$SettingsStore.lang} />
	</a>

	<div class="lang-switch">
		{#if $SettingsStore.lang === 'ru' }
			<a data-sveltekit-reload href="/en" title="OhMyChart! in English" aria-description="English version">
				{@html langSwitchRu}
			</a>
		{:else}
			<a data-sveltekit-reload href="/" title="OhMyChart! на русском" aria-description="Версия на русском языке">
				{@html langSwitchEn}
			</a>
		{/if}
	</div>
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.lang-switch {
		opacity: 1;
		width: var(--lang-switch-size);
	}

	.lang-switch:hover {
		opacity: 0.7;
		cursor: pointer;
	}
</style>
