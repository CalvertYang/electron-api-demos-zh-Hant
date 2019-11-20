const {app, dialog} = require('electron')

if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('electron-api-demos', process.execPath, [path.resolve(process.argv[1])])
  }
} else {
  app.setAsDefaultProtocolClient('electron-api-demos')
}

app.on('open-url', (event, url) => {
  dialog.showErrorBox('歡迎回來', `你來自：${url}`)
})
