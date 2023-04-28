<script>
	import SettingsStore from '$lib/stores/settings';

	const showOrHideNav = () => {
		$SettingsStore.showNav = !$SettingsStore.showNav;
	};
</script>

<button class="nav-button" on:click={showOrHideNav} >
	<div class="nav-button-icon" class:nav-open={$SettingsStore.showNav}>
		<span /><span /><span /><span />
	</div>
</button>

<style>
	button {
		width: var(--nav-button-size);
		height: var(--nav-button-size);
		padding: 2.4rem 1.6rem;
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
		position: relative;
		width: 100%;
		height: 100%;
	}

	.nav-button-icon span {
		display: block;
		position: absolute;
		height: 15%;
		width: 100%;
		background-color: var(--color-white-primary);
		border-radius: 10px;
		left: 0;
		transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
	}

	.nav-button-icon span:nth-child(1) {
		top: 0px;
	}

	.nav-button-icon span:nth-child(2) {
		top: 50%;
	}

	.nav-button-icon span:nth-child(3) {
		top: 50%;
	}

	.nav-button-icon span:nth-child(4) {
		top: 100%;
	}

	button:hover .nav-button-icon {
		opacity: 0.7;
	}

	.nav-button-icon.nav-open span:nth-child(1) {
		top: 50%;
		width: 0%;
		left: 50%
	}

	.nav-button-icon.nav-open span:nth-child(4) {
		top: 50%;
		width: 0%;
		left: 50%
	}

	.nav-button-icon.nav-open span:nth-child(2) {
		transform: rotate(45deg);
	}

	.nav-button-icon.nav-open span:nth-child(3) {
		transform: rotate(-45deg);
	}
</style>
