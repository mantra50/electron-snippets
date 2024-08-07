import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      shortCut: (shortCut: string) => Promise<boolean>
      setIgnoreMouseEvents: (ignore: boolean, options?: { forward: true }) => void
      sql: <T>(
        sql: string,
        type: SqlActionType,
        params?: Record<string, string | number>,
      ) => Promise<T>
      openWindow: (name: windowNameType) => void
      closeWindow: (name: windowNameType) => void
      selectDabaseDirectory: () => Promise<string>
      setDatabaseDirectory: (path: string) => void
      initDabase: () => void
    }
  }
}
