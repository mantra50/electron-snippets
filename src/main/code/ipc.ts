import { BrowserWindow, ipcMain } from 'electron'

export const registerIpcMain = (win: BrowserWindow): void => {
  ipcMain.on('hidenWindow', () => {
    win.hide()
  })
}
