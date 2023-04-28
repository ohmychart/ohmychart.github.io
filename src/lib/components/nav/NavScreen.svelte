<script>
	import SettingsStore from '$lib/stores/settings';
	import NavFeatureCard from '$lib/components/nav/NavFeatureCard.svelte';

	export let features;
</script>

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

<aside>
	<nav class="nav-screen" class:show={$SettingsStore.showNav}>
        <div class="nav-container">
            <ul class="nav-features">
                {#each features as feature}
                    <li>
						<NavFeatureCard {feature} />
					</li>
                {/each}
            </ul>

        </div>
	</nav>
</aside>

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
        overflow-y: scroll;
	}

    .nav-container {
		max-width: 1200px;
		margin-left: var(--site-container-margin);
		margin-right: var(--site-container-margin);
		padding-top: var(--main-screen-padding);
		padding-bottom: var(--main-screen-padding);
    }

    .nav-features {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
		list-style: none;
		grid-column-gap: 3.6rem;
		grid-row-gap: 4rem;
    }
</style>
