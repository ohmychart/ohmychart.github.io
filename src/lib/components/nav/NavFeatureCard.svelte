<script>
	import SettingsStore from '$lib/stores/settings';

	export let feature;

    let url;
    if(feature.isExternal) {
        url = feature.url;
    } else {
        url = $SettingsStore.lang === 'ru' ? `/${feature.slug}` : `/${$SettingsStore.lang}/${feature.slug}`;
    }

	const src = `/features/${$SettingsStore.lang}/${feature.slug}/thumbnail.jpg`;

</script>

<a href={url} rel={feature.isExternal ? "external": undefined} on:click={() => $SettingsStore.showNav = false}>
	<article class="nav-card">
		<img {src} alt="" class="nav-cover" />
		<h3 class="nav-card-title">{feature.title}</h3>
	</article>
</a>

<style>
    .nav-card {
        display: flex;
        flex-direction: column;
        row-gap: 0.8rem;
    }
	.nav-cover {
		width: 100%;
		border-radius: 12px;
		object-fit: cover;
		aspect-ratio: 4/3;
	}

	.nav-card-title {
		font-size: var(--feature-desc-text-size);
		line-height: 120%;
		font-weight: 400;
	}

	a:hover {
		opacity: 0.7;
	}
</style>
