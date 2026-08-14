import { seoData } from './app/data'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-30',

  // devtools: { enabled: true },

  // 关键配置：确保监听所有网络接口
  vite: {
    server: {
      watch: {
        usePolling: true, // Docker 环境下必须启用轮询
        interval: 1000, // 轮询间隔（毫秒）
      },
      // hmr: {
      //   host: '0.0.0.0', // 允许外部访问 HMR
      //   port: 24678, // HMR 端口
      // },
    },
  },

  fonts: {
    providers: {
      google: false,
      bunny: false,
      fontshare: false,
      googleicons: false,
    },
    // 或者完全禁用字体模块
    // enabled: false
  },

  modules: [
    'nuxt-llms',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate',
    '@stefanobartoletti/nuxt-social-share',
  ],

  llms: {
    domain: seoData.mySite,
    title: seoData.title,
    description: seoData.description,
  },

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: seoData.title,
      titleTemplate: `%s - ${seoData.title}`,
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    sources: [seoData.mySite],
  },

  site: {
    url: seoData.mySite,
    name: 'ImpaCTFul',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: ['/', '/rss.xml'],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'dracula',
        },
      },
    },
    experimental: {
      nativeSqlite: true,
    },
  },
})
