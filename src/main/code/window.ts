import { is } from '@electron-toolkit/utils'
import { BrowserWindow } from 'electron'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'

export function createWindow(): BrowserWindow {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 325,
    x: -500,
    y: 0,
    // resizable: false,
    show: false,
    frame: false,
    transparent: true,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })
  if (is.dev) mainWindow.webContents.openDevTools()
  // mainWindow.setIgnoreMouseEvents(true)
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../../renderer/index.html'))
  }
  return mainWindow
}