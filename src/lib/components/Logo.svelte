<script>
	export let lang;

	import logoEn from '$lib/svg/logo-title-en.svg?raw';
	import logoRu from '$lib/svg/logo-title-ru.svg?raw';
	import logoSm from '$lib/svg/logo-sm.svg?raw';
</script>

<div class="logo">
	<div class="logo-with-title">
		{#if lang === 'ru'}
			{@html logoRu}
		{:else}
			{@html logoEn}
		{/if}
	</div>
    <div class="logo-no-title">
        {@html logoSm}
    </div>
</div>

<style>
	.logo {
		opacity: 1;
		display: inline-block;
	}

    .logo-no-title {
        display: none;
    }

	.logo:hover {
		opacity: 0.7;
		cursor: pointer;
	}

    @media (max-width: 640px) {
        .logo-with-title {
            display: none;
        }

        .logo-no-title {
            display: inline-block;
        }
    }
</style>
