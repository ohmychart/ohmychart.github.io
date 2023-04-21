<script>
	import StaticFeature from '$lib/components/StaticFeature.svelte';
	import InteractiveFeatureCard from '$lib/components/InteractiveFeatureCard.svelte';
	export let features;
</script>

<section class="features-feed">
	{#each features as feature}
		{#if feature.isStatic}
			<StaticFeature slug={feature.slug} color={feature.color} />
		{:else}
			<InteractiveFeatureCard title={feature.title} desc={feature.desc} slug={feature.slug} url={feature.url} color={feature.color}/>
		{/if}
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
