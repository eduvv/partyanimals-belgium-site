// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
      "@nuxtjs/tailwindcss",
      '@nuxtjs/i18n',
      'nuxt-splide',
      '@nuxt/image',
      '@vesp/nuxt-fontawesome'
    ],
    alias: {
        '@config': '~/config'
    },
    app: {
        head: {
            link: [
                {rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/mono-grass'},
                {rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/poppins'}
            ]
        }
    },
    i18n: {
        vueI18n: './i18n.config.ts',
        locales: [
            {
                code: 'nl',
                iso: 'nl-BE'
            },
            {
                code: 'en',
                iso: 'en-US'
            },
            {
                code: 'fr',
                iso: 'fr-FR'
            }],
        defaultLocale: 'nl',
        detectBrowserLanguage: false
    },
    vite: {
        server: {
            watch: {
                usePolling: true
            }
        }
    },
    nitro: {
        preset: 'netlify-edge'
    },
    image: {
        quality: 80,
        provider: 'ipx',
        ipx: {
            modifiers: {
                format: 'webp'
            }
        }
    },
    fontawesome: {
        icons: {
            solid: ['envelope', 'phone', 'percent', 'map-marker-alt', 'file-pdf'],
        },
    },
})