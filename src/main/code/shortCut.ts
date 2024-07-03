import { BrowserWindow, IpcMainInvokeEvent, app, globalShortcut, ipcMain } from 'electron'
const config = {
  search: '',
}
export const registerShortCut = (win: BrowserWindow): void => {
  ipcMain.handle(
    'shortCut',
    (_event: IpcMainInvokeEvent, type: 'search', shortCut: string): Promise<boolean> => {
      if (config.search) globalShortcut.unregister(config.search)
      config.search = shortCut
      switch (type) {
        case 'search':
          return ShortCutSearchRegister(win, shortCut)
      }
    },
  )
  // 检查快捷键是否注册成功
  // console.log(globalShortcut.isRegistered('Alt+Shift+;'))
}

function ShortCutSearchRegister(win: BrowserWindow, shortCut: string): boolean {
  return globalShortcut.register(shortCut, () => {
    win.isVisible() ? win.hide() : win.show()
  })
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
