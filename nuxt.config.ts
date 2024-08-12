// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  alias: {
    '@config': '~/config'
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/mono-grass'},
        { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/poppins'}
      ]
    }
  }
})