export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      title: "The Golden Age blog",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Blog",
        },
        {
          name: "keywords",
          content:
            "travel reports, technologoy articles, poetry, poems, tech, reports, poem, vuejs, nuxt, javascript, cocoa, ios, development, software",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      base: { href: "/" },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        ...i18nHead.link,
      ],
    };
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "bulma/bulma.sass",
    "buefy/dist/buefy.css",
    "~/assets/scss/global.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/fontawesome",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/markdownit",
    "nuxt-buefy",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/image",
    "nuxt-highlightjs",
    "@nuxtjs/i18n",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },

  router: {
    base: "/",
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "layouts/error.vue"),
      });
    },
  },

  fontawesome: {
    component: "font-awesome-icon",
    addCss: false,
    icons: {
      solid: ["faBars", "faArrowRight", "faCalendarDays", "faRss"],
      brands: [
        "faFacebookF",
        "faInstagram",
        "faTwitter",
        "faLinkedin",
        "faXing",
        "faGithub",
      ],
    },
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"],
      },
    ],
  },

  markdownit: {
    runtime: true, // Support `$md()`
  },

  buefy: {
    css: false,
    materialDesignIcons: false,
    defaultIconPack: "fas",
    defaultIconComponent: "font-awesome-icon",
  },

  sitemap: {
    hostname: "https://eglador.de",
    gzip: true,
    exclude: ["/old"],
    defaults: {
      changefreq: "weekly",
      priority: 1,
      lastmod: new Date(),
    },
  },

  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: "/sitemap.xml",
  },

  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    dir: "assets/img",
  },

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "de",
        name: "Deutsch",
        file: "de.json",
      },
    ],
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      silentFallbackWarn: true,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
    },
    vueI18nLoader: true,
    langDir: "~/locales/",
  },
};
