<script>
	import StaticFeature from '$lib/components/StaticFeature.svelte';
	export let features;
</script>

<section class="features-feed">
	{#each features as feature}
		<StaticFeature slug={feature.slug} color={feature.color} />
	{/each}
</section>

<style>
	.features-feed {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: 10rem;
	}
</style>
