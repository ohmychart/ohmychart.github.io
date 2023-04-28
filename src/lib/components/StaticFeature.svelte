<script>
	import SettingsStore from '$lib/stores/settings';

	export let slug;
	export let desc = 'Visualization image';

	$: src = `/features/${$SettingsStore.lang}/${slug}/viz.jpg`;
</script>

<article>
	<img class="feature-viz" {src} alt={desc} loading="lazy" />
</article>

<style>
	.feature-viz {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0px 0px 55px 5px var(--ambi-color);
	}

	@media (max-width: 640px) {
		.feature-viz {
			box-shadow: none;
		}
	}
</style>
