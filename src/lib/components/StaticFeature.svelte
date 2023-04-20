<script>
    import SettingsStore from '$lib/stores/settings';

    export let color;
    export let slug;
    export let alt="Visualization image";

    const src = `/features/${$SettingsStore.lang}/${slug}/viz.jpg`;
</script>

<article>
    <!-- <div class="placeholder" style="background: {color}; box-shadow: 0px 0px 90px 5px {color};">
        
    </div> -->
    <img class="feature-viz" {src} {alt} loading="lazy" style="box-shadow: 0px 0px 55px 5px {color};"/>
</article>

<style>
    .placeholder {
        width: 100%;
        height: 800px;
        border-radius: 8px;
        filter: blur(45px);
    }

    .feature-viz {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }
</style>