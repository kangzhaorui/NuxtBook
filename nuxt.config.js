/*
 * @Author: your name
 * @Date: 2021-03-06 23:25:14
 * @LastEditTime: 2021-03-08 20:59:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /localProject/iviewShuyuan/nuxt.config.js
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iviewShuyuan',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {
        src:"/js/flexible.js", type: 'text/javascript', charset: 'utf-8'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'iview/dist/styles/iview.css'
  ],
  // styleResources: {
  //   // scss: './assets/variables.scss',
  //   // less: './assets/**/*.less',
  //   // sass: ... 需要什么配置什么，这里是全局的
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/iview',
    '@/plugins/axios',
  ],
    // }
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    postcss:[
      require("postcss-px2rem")({
        remUnit: 37.5
      })
      // require('autoprefixer')
    ],
  },
  env: {
    api: process.env.api || 'http://api.shuyuansy.xyz'
  }
}
