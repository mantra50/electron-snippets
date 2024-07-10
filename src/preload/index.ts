import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  shortCut: (shortCut: string): Promise<boolean> => {
    return ipcRenderer.invoke('shortCut', shortCut)
  },
  setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }): void => {
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options)
  },
  sql: <T>(sql: string, type: SqlActionType, params = {}): Promise<T> => {
    return ipcRenderer.invoke('sql', sql, type, params)
  },
  openWindow: (name: windowNameType): void => {
    ipcRenderer.send('openWindow', name)
  },
  closeWindow: (name: windowNameType): void => {
    ipcRenderer.send('closeWindow', name)
  },
  selectDabaseDirectory: (): Promise<string> => {
    return ipcRenderer.invoke('selectDabaseDirectory')
  },
  setDatabaseDirectory: (path: string): void => {
    console.log('setDatabaseDirectory', path)
    ipcRenderer.send('setDatabaseDirectory', path)
  },
  initDabase: () => {
    ipcRenderer.send('initDabase')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
