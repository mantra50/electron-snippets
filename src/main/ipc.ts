import { IpcMainEvent, ipcMain } from 'electron'
import { getWindowByEvent, getWindowByName } from './windows'

ipcMain.on('openWindow', (_event: IpcMainEvent, name: windowNameType) => {
  getWindowByName(name).show()
})
ipcMain.on('closeWindow', (_event: IpcMainEvent, name: windowNameType) => {
  getWindowByName(name).hide()
})

ipcMain.on(
  'setIgnoreMouseEvents',
  (event: IpcMainEvent, ignore: boolean, options?: { forward: true }) => {
    getWindowByEvent(event).setIgnoreMouseEvents(ignore, options)
  },
)
