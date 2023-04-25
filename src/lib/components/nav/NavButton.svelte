<script>
	import SettingsStore from '$lib/stores/settings';
	import navHamburger from '$lib/svg/nav-hamburger.svg?raw';

	const showOrHideNav = () => {
		$SettingsStore.showNav = !$SettingsStore.showNav;
	};
</script>

<button class="nav-button" on:click={showOrHideNav} class:nav-open={$SettingsStore.showNav}>
	<div class="nav-button-icon">
		{@html navHamburger}
	</div>
</button>

<style>
	button {
		width: var(--nav-button-size);
		height: var(--nav-button-size);
		padding: 24px 16px;
		border-radius: var(--nav-button-radius);
		border: none;
		background-color: var(--color-dark-secondary);
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: var(--nav-button-bottom);
		left: var(--nav-button-left);
		z-index: 2;
	}

	button:hover {
		cursor: pointer;
	}

	.nav-button-icon {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}

	button:hover .nav-button-icon {
		opacity: 0.7;
	}
</style>
