import { BrowserWindow, ipcMain } from 'electron'
import { openConfigWindow } from '../config'

export const registerIpcMain = (win: BrowserWindow): void => {
  ipcMain.on('hidenWindow', () => {
    win.hide()
  })

  ipcMain.on('openConfigWindow', () => {
    openConfigWindow()
  })
}
