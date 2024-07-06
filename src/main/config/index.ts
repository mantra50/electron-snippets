import { BrowserWindow } from 'electron'
import { createWindow } from './window'

let win = null as null | BrowserWindow
export const createConfigWindow = (): void => {
  if (!win) win = createWindow()
  win.on('close', () => {
    win = null
  })
}
