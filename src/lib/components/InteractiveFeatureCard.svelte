<script>
	import SettingsStore from '$lib/stores/settings';

    import externalIcon from "$lib/svg/external-icon.svg?raw";

	export let title;
	export let color;
	export let slug;
	export let desc;
    export let url;

	const src = `/features/${$SettingsStore.lang}/${slug}/cover.jpg`;
	const highlightStyle = `background: linear-gradient(120deg, ${color} 0%, ${color} 100%);
        background-repeat: no-repeat;
        background-size: 100% 16%;
        background-position: 0 97%;`;
</script>

<article>
	<a href="{url}" rel="external">
		<div class="card-container" style="background-image: url({src});">
			<h2 class="title"><span class="highlight" style={highlightStyle}>{title}</span></h2>
			<div class="description">{desc}</div>
            <div class="external-icon">{@html externalIcon}</div>
		</div>
		<div class="description-mobile">
			{desc}
		</div>
	</a>
</article>

<style>
    
	.card-container {
		padding-left: var(--feature-card-padding-side);
		padding-right: var(--feature-card-padding-side);
		padding-top: var(--feature-card-padding-top);
		padding-bottom: var(--feature-card-padding-bottom);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom;
		width: 100%;
		border-radius: 8px;
		color: var(--color-background);
        position: relative;
	}

	.title {
		font-size: var(--feature-title-text-size);
		line-height: 100%;
		font-weight: var(--feature-title-text-weight);
	}

	.description {
		font-size: var(--feature-desc-text-size);
		line-height: var(--feature-desc-line-height);
		margin-top: var(--feature-title-gap);
		max-width: var(--feature-desc-text-width);
		display: var(--feature-display);
	}

	.description-mobile {
		display: var(--feature-display-mobile);
		font-size: var(--feature-desc-text-size);
		line-height: var(--feature-desc-line-height);
		margin-top: var(--feature-title-gap);
		max-width: var(--feature-desc-text-width);
	}

    a:hover .card-container .title {
        opacity: 0.7;
    }

    .external-icon {
        position: absolute;
        top: var(--feature-external-icon-top);
        right: var(--feature-external-icon-right);;
        display: inline-block;
        width: var(--feature-external-icon-size);
        height: var(--feature-external-icon-size);
        fill: var(--color-dark-secondary);
    }

    a:hover .external-icon {
        opacity: 0.7;
    }
</style>
