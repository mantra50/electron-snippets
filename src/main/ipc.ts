import { IpcMainEvent, dialog, ipcMain } from 'electron'
import { getWindowByEvent, getWindowByName } from './windows'
import config from './db/config'
import { initTable } from './db/tables'

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

ipcMain.handle('selectDabaseDirectory', async () => {
  const res = await dialog.showOpenDialog({
    title: '选择片段文件存放目录',
    properties: ['openDirectory', 'createDirectory']
  })
  return res.canceled ? '' : res.filePaths[0]
})

ipcMain.on('setDatabaseDirectory', (_event: IpcMainEvent, path: string) => {
  config.databaseDirectory = path
})

ipcMain.on('initDabase', () => {
  initTable()
})
