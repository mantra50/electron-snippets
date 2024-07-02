import { BrowserWindow, app, dialog, globalShortcut } from 'electron'

export const registerShortCut = (win: BrowserWindow): void => {
  app.whenReady().then(() => {
    // 注册一个'CommandOrControl+X' 快捷键监听器
    const ret = globalShortcut.register('Alt+Shift+;', () => {
      win.show()
    })
    globalShortcut.register('Esc', () => {
      win.hide()
    })
    if (!ret) {
      dialog.showErrorBox('提示', '快捷键冲突 注册失败')
    }

    // 检查快捷键是否注册成功
    console.log(globalShortcut.isRegistered('Alt+Shift+;'))
  })

  app.on('will-quit', () => {
    // 注销所有快捷键
    globalShortcut.unregisterAll()
  })
}
