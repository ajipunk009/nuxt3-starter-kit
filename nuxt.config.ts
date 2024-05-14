// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    viewer: true,
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/maplibre-gl@4.2.0/dist/maplibre-gl.css' }
      ]
    }
  }
})