import { BrowserWindow, IpcMainInvokeEvent, app, globalShortcut, ipcMain } from 'electron'
import { getWindowByName } from './windows'
const config = {
  search: '',
}

ipcMain.handle(
  'shortCut',
  (_event: IpcMainInvokeEvent, type: 'search', shortCut: string): boolean => {
    if (config.search) globalShortcut.unregister(config.search)
    config.search = shortCut
    switch (type) {
      case 'search':
        return ShortCutSearchRegister(getWindowByName('search'), shortCut)
    }
  },
)

function ShortCutSearchRegister(win: BrowserWindow, shortCut: string): boolean {
  return globalShortcut.register(shortCut, () => {
    win.isVisible() ? win.hide() : win.show()
  })
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
