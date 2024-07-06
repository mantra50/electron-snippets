import { BrowserWindow, ipcMain } from 'electron'
import { createConfigWindow } from '../config'

export const registerIpcMain = (win: BrowserWindow): void => {
  ipcMain.on('hidenWindow', () => {
    win.hide()
  })

  ipcMain.on('createConfigWindow', () => {
    createConfigWindow()
  })
}
