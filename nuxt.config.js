const path = require('path')

module.exports = {
  server: {
    port: 8080,
    host: process.env.NODE_ENV === 'development' ? 'localhost' : '0.0.0.0'
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=5'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Arenum'
      },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/ms-icon-144x144.png'
      },
      { name: 'imagetoolbar', content: 'no' },
      { name: 'google', value: 'notranslate' },
      { name: 'cleartype', content: 'on' },
      { name: 'HandheldFriendly', content: 'True' }
    ]
  },
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  },
  modules: [
    '@nuxtjs/svg-sprite'
  ],
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    stylus: ['~/assets/css/resources.styl']
  },
  css: [
    '~/assets/css/core-styles/normalize.css',
    '~/assets/css/styles.styl',
    path.resolve(__dirname, 'node_modules/swiper/swiper-bundle.css')
  ],
  plugins: [
    {
      src: '~/plugins/swiper.js',
      ssr: false
    },
    {
      src: '~/plugins/marquee.js',
      ssr: false
    }
  ],
  svgSprite: {
    input: '~/assets/icons',
    output: '~/assets/sprite',
    defaultSprite: 'sprite',
    svgoConfig () {
      return {
        plugins: [
          {
            cleanupIDs: {
              minify: false
            }
          },
          {
            removeViewBox: false
          },
          {
            removeAttributesBySelector: {
              selectors: [
                {
                  selector: ['svg'],
                  attributes: ['width', 'height']
                },
                {
                  selector: ['svg:not(.goodFill) *'],
                  attributes: ['fill', 'stroke']
                },
                {
                  selector: ['svg:not(.goodFill)'],
                  attributes: ['fill', 'stroke']
                }
              ]
            }
          }
        ]
      }
    }
  }
}
