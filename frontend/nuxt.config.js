require('dotenv').config()

const isDev = process.env.NODE_ENV !== 'production'

const locales = [
  {
    code: 'uk',
    iso: 'uk-UA',
    name: 'UA',
    file: 'uk.json',
  },
  {
    code: 'en',
    iso: 'en-US',
    name: 'EN',
    file: 'en.json',
  },
  {
    code: 'ru',
    iso: 'ru-UA',
    name: 'RU',
    file: 'ru.json',
  },
]
const defaultLocale = 'uk'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'demoLend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/custom.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/i18n', '@/plugins/typed'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/svg',
  ],
  toast: {
    position: 'top-center',
    singleton: true,
    duration: 5000,
  },
  i18n: {
    locales,
    defaultLocale,
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'language',
      alwaysRedirect: true,
      // fallbackLocale: 'uk'
    },
    seo: false,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? process.env.API_PRODUCTION || 'http://localhost:8000'
        : process.env.API_LOCALHOST || 'http://localhost:8000',
    // https: process.env.NODE_ENV === 'production',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendors: ['@nuxtjs/axios'],
    publicPath: '/app/',
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]',
    },
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    optimization: {
      minimize: !isDev,
    },
    extractCSS: !isDev,
    // transpile: [
    //   'vue-lazy-hydration',
    //   'intersection-observer',
    //   'vee-validate/dist/rules',
    // ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true,
          },
        })
      }
    },
  },
}
