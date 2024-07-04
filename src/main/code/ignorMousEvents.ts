import { BrowserWindow, IpcMainEvent, ipcMain } from 'electron'

export default function setIgnoreMouseEvents(win: BrowserWindow): void {
  ipcMain.on(
    'setIgnoreMouseEvents',
    (_event: IpcMainEvent, ignore: boolean, options?: { forward: true }) => {
      win.setIgnoreMouseEvents(ignore, options)
    },
  )
}
