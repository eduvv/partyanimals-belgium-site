// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/tailwindcss",
        '@nuxtjs/i18n',
        'nuxt-splide',
        '@nuxt/image',
        '@vesp/nuxt-fontawesome',
        "@nuxtjs/sitemap",
        "@nuxtjs/robots"
    ],
    alias: {
        '@config': '~/config'
    },
    app: {
        head: {
            link: [
                {rel: 'preload', href: 'https://fonts.cdnfonts.com/css/mono-grass', as: 'style', type: 'text/css'},
                {rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/mono-grass'},
                {rel: 'preload', href: 'https://fonts.cdnfonts.com/css/poppins', as: 'style', type: 'text/css'},
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
        },
        build: {
            chunkSizeWarningLimit: 1500 // Raise chunk size warning for large builds
        }
    },
    nitro: {
        preset: 'netlify-edge',
        serveStatic: true
    },
    image: {
        quality: 80,
        provider: 'ipx',
        ipx: {
            dir: 'public',
            modifiers: {
                format: 'webp'
            }
        },
        presets: {
            carousel: {
                modifiers: {
                    format: 'webp',
                    width: 1200,
                    height: 800
                }
            }
        },
        screens: {
            sm: 320,
            md: 640,
            lg: 1024,
            xl: 1280,
            '2xl': 1536
        }
    },
    fontawesome: {
        icons: {
            solid: ['envelope', 'phone', 'percent', 'map-marker-alt', 'file-pdf'],
        },
    },
    tailwindcss: {
        viewer: false // Disable the Tailwind viewer in production
    },

})