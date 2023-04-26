export function handle({ event, resolve }) {
    let lang = event.url.pathname.startsWith('/en') ? 'en' : 'ru';
    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', lang)
    });
}