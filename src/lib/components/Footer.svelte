<script>
	import SettingsStore from '$lib/stores/settings';

    import Logo from "$lib/components/Logo.svelte";
</script>

<footer>
    <Logo lang={$SettingsStore.lang}/>
    <div class="email">dmitrii@ohmychart.com</div>
</footer>

<style>
	footer {
        color: var(--color-white-primary);
        font-size: 1.4rem;
        line-height: 100%;
	}

    .email {
        margin-top: 2.4rem;
    }

</style>