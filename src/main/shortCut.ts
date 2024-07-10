import { IpcMainInvokeEvent, app, dialog, globalShortcut, ipcMain } from 'electron'
import { getWindowByName } from './windows'


ipcMain.handle(
  'shortCut',
  (_event: IpcMainInvokeEvent, shortCut: string): boolean => {
    globalShortcut.unregisterAll()
    if (globalShortcut.isRegistered(shortCut)) {
      dialog.showErrorBox('快捷键冲突', `快捷键 ${shortCut} 已经被注册`)
      return false
    }
    return ShortCutSearchRegister(shortCut)
  },
)

function ShortCutSearchRegister(shortCut: string): boolean {
  const win = getWindowByName('search')
  return globalShortcut.register(shortCut, () => {
    win.isVisible() ? win.hide() : win.show()
  })
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})

export const registerGlobalShortcut = () => {

}
