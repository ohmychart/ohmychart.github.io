<script>
    export let lang;

    import logoEn from '$lib/svg/logo-title-en.svg?raw';
	import logoRu from '$lib/svg/logo-title-ru.svg?raw';
</script>

<div class="logo">
    {#if lang === 'ru'}
        {@html logoRu}
    {:else}
        {@html logoEn}
    {/if}
</div>

<style>
	.logo {
		opacity: 1;
        display: inline-block;
	}

    .logo:hover {
        opacity: 0.7;
        cursor: pointer;
    }
</style>