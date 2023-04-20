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
		width: 80px;
		height: 80px;
		border-radius: 20px;
		border: none;
		background-color: var(--color-dark-secondary);
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 44px;
		left: calc(50vw + 644px);
		z-index: 2;
	}

	@media (max-width: 1500px) {
		button {
			left: auto;
			left: calc(100vw - 112px);
			bottom: 12px;
		}
	}

	button:hover {
		cursor: pointer;
	}

	.nav-button-icon {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	button:hover .nav-button-icon {
		opacity: 0.7;
	}
</style>
