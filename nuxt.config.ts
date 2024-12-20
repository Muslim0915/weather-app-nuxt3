// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: true,
  typescript: {
    shim: true,
    strict: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap' },
      ],
    },
  },
  components: true,
  css: ['~/assets/scss/global.scss'],
  runtimeConfig: {
    public: {
      weatherApiKey: process.env.NUXT_PUBLIC_WEATHER_API_KEY,
    }
  }
})
