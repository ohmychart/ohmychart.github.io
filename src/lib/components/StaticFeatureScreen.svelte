<script>
	import SettingsStore from '$lib/stores/settings';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
    import StaticFeature from '$lib/components/StaticFeature.svelte';

    export let data;
</script>

<div class="feature-screen" class:hide={$SettingsStore.showNav}>
	<Header />
	<main class="feature-content">
        <div class="feature-header">
            <h1 class="feature-title">{data.title}</h1>
            <div class="feature-intro">{data.intro}</div>
        </div>
		<StaticFeature slug={data.slug} desc={data.desc} --ambi-color={data.color}/>
	</main>
	<Footer />
</div>

<style>
	.feature-screen {
		padding-top: var(--main-screen-padding);
		padding-bottom: var(--main-screen-padding);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: var(--main-screen-row-gap);
		transition: var(--transition-main-screen);
	}

    .feature-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: var(--main-screen-row-gap);
    }

    .feature-header {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: var(--feature-screen-header-gap);
    }

    .feature-title{
        font-size: var(--feature-title-text-size);
        line-height: 100%;
        font-weight: var(--feature-title-text-weight);
    }

    .feature-intro {
        font-size: var(--feature-desc-text-size);
        line-height: var(--feature-desc-line-height);
        max-width: var(--feature-desc-text-width);
    }

	.feature-screen.hide {
		transform: translateY(-100vh);
	}
</style>