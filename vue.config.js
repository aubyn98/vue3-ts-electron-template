const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('.src/assets'))
      .set('comp', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('router', resolve('./src/router'))
      .set('store', resolve('./src/store'))
      .set('styles', resolve('./src/common/styles'))
      .set('utils', resolve('./src/common/utils'))
      .set('apis', resolve('./src/common/apis'))
      .set('plugins', resolve('./src/common/plugins'))
      .set('mixins', resolve('./src/common/mixins'))
      .set('config', resolve('./src/common/config'))
  },
  pluginOptions: {
    electronBuilder: {
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
