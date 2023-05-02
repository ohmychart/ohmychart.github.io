import { loadAppData } from '$lib/utils/data-load-utils';

export const load = async({params}) => {
    const appData = loadAppData('ru', params.slug);
    console.log(params.slug);

    return appData;
}

export const prerender = true;