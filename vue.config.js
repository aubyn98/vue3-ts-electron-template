const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: (config) => {
    config.entry = { app: ['./src/renderer/main.ts'] }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src/renderer'))
      .set('assets', resolve('./src/renderer/assets'))
      .set('comp', resolve('./src/renderer/components'))
      .set('views', resolve('./src/renderer/views'))
      .set('router', resolve('./src/renderer/router'))
      .set('store', resolve('./src/renderer/store'))
      .set('styles', resolve('./src/renderer/common/styles'))
      .set('utils', resolve('./src/renderer/common/utils'))
      .set('apis', resolve('./src/renderer/common/apis'))
      .set('plugins', resolve('./src/renderer/common/plugins'))
      .set('mixins', resolve('./src/renderer/common/mixins'))
      .set('config', resolve('./src/renderer/common/config'))
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/main/index.ts',
      rendererProcessFile: 'src/renderer/main.ts',
      mainProcessWatch: ['src/main'],
      nodeIntegration: true,
      builderOptions: {
        productName: 'eletron-template',
        appId: 'eletron-template',
        extends: null,
        publish: [
          {
            provider: 'generic',
            url: 'http://ifile.360hwj.com/crm/',
          },
        ],
        nsis: {
          oneClick: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true,
          /* installerIcon: 'public/favicon.ico',
          uninstallerIcon: 'public/favicon.ico',
          installerHeaderIcon: 'public/favicon.ico', */
          createDesktopShortcut: true,
          createStartMenuShortcut: true,
        },
        dmg: {
          contents: [
            {
              x: 410,
              y: 150,
              type: 'link',
              path: '/Applications',
            },
            {
              x: 130,
              y: 150,
              type: 'file',
            },
          ],
        },
        mac: {
          //   icon: 'public/favicon.ico'
        },
        win: {
          //   icon: 'public/favicon.ico'
        },
        linux: {
          //   icon: 'public/favicon.ico'
        },
      },
    },
  },
}
