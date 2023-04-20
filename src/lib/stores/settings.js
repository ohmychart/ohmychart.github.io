import { writable } from "svelte/store";

const SettingsStore = writable({
    showNav: false,
    lang: 'ru',
});

export default SettingsStore;