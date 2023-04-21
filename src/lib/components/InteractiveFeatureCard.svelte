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
	</a>
</article>

<style>
    
	.card-container {
		padding-left: 3.6rem;
		padding-right: 3.6rem;
		padding-top: 8%;
		padding-bottom: 16%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom;
		width: 100%;
		border-radius: 8px;
		color: var(--color-background);
        position: relative;
	}

	.title {
		font-size: 7.2rem;
		line-height: 100%;
	}

	.description {
		font-size: 2rem;
		line-height: 130%;
		margin-top: 3.2rem;
		max-width: 82%;
	}

    a:hover .card-container .title {
        opacity: 0.7;
    }

    .external-icon {
        position: absolute;
        top: 3.2rem;
        right: 3.6rem;
        display: inline-block;
        width: 32px;
        height: 32px;
        fill: var(--color-dark-secondary);
    }

    a:hover .external-icon {
        opacity: 0.7;
    }
</style>
