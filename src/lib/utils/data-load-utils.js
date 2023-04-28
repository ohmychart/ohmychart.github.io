import featuresRu from '../../features/ru/all.json';
import featuresEn from '../../features/en/all.json';

const ALL_FEATURES = {
    'en': featuresEn,
    'ru': featuresRu,
}

export function loadAppData(lang, slug) {
    const features = ALL_FEATURES[lang];
    const featureIdx = slug ? features.findIndex(feature => feature.slug === slug) : undefined;

    let currentFeature = {};

    if (featureIdx !== undefined) {
        currentFeature = {
            title: features[featureIdx].staticTitle,
            intro: features[featureIdx].staticDesc,
            desc: features[featureIdx].desc,
            slug: features[featureIdx].slug,
            color: features[featureIdx].color
        }
    }

    return {
        features,
        currentFeature
    }
}