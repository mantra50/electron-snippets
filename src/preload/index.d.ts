import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hidenWindow: () => void
      shortCut: (type: 'search', shortCut: string) => Promise<boolean>
      setIgnoreMouseEvents: (ignore: boolean, options?: { forward: true }) => void
    }
  }
}
