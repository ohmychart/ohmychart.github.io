<script>
    import SettingsStore from '$lib/stores/settings';
</script>

<nav class="nav-screen" class:show={$SettingsStore.showNav} >
    <p>Navigation</p>
</nav>

<svelte:head>
   {#if $SettingsStore.showNav}
      <style>
         body {
            overflow-y: hidden;
            padding-right: 15px;
         }
      </style>
   {/if}
</svelte:head>	

<style>
	.nav-screen {
		background: var(--color-background);
		position: fixed;
        top: 100%;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 1;
        transition: var(--transition-nav);
	}

    .nav-screen.show {
        top: 0;
    }
</style>
