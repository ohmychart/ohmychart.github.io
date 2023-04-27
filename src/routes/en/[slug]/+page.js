import { loadAppData } from '$lib/utils/data-load-utils';

export const load = async({params}) => {
    const appData = loadAppData('en', params.slug);
    return appData;
}