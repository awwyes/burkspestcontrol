// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', process.env.GOOGLE_ANALYTICS_MEASURE_ID, {
        page_path: url,
    })
}

// * This is to track certain events on website Ex: search queries * //
// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}