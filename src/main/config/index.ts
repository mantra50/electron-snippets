import { BrowserWindow } from 'electron'
import { createWindow } from './window'

let win = null as null | BrowserWindow
export const openConfigWindow = (): void => {
  if (!win) win = createWindow()
  win.on('close', () => {
    win = null
  })
}
