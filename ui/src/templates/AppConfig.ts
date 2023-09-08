export const AppConfig = {
    site_name: 'Scoop Dogg Desserts',
    title: 'Scoop Dogg Desserts',
    description: 'Order management website for a dessert company',
    locale: 'en',
    apiUrl: process.env.API_URL || 'http://localhost:8000', //change this to point to your api,
    landingPageRedirect: '/orders',
    landingPageButtonLabel: 'Get the Scoop'
};