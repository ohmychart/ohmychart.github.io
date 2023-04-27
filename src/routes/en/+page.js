import { loadAppData } from '$lib/utils/data-load-utils';

export const load = async() => {
    const appData = loadAppData('en');

    return appData;
}