export const GTM_ID = 'GTM-N8GVWKR'

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}