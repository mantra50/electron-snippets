import { app } from 'electron'
import { createWindow } from './window'
import { registerIpcMain } from './ipc'
import { registerShortCut } from './shortCut'
import setIgnoreMouseEvents from './ignorMousEvents'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpcMain(win)
  registerShortCut(win)
  setIgnoreMouseEvents(win)
})
