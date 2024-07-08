import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  hidenWindow: (): void => {
    ipcRenderer.send('hidenWindow')
  },
  shortCut: (type: 'search', shortCut: string): Promise<boolean> => {
    return ipcRenderer.invoke('shortCut', type, shortCut)
  },
  setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }): void => {
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options)
  },
  openConfigWindow: (): void => {
    ipcRenderer.send('openConfigWindow')
  },
  sql: <T>(sql: string, type: SqlActionType, params = {}): Promise<T> => {
    return ipcRenderer.invoke('sql', sql, type, params)
  },
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
