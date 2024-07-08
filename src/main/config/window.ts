import { is } from '@electron-toolkit/utils'
import { BrowserWindow, shell } from 'electron'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'
import url from 'node:url'

export function createWindow(): BrowserWindow {
  // Create the browser window.
  const width = 950
  const height = 550
  const win = new BrowserWindow({
    width,
    height,
    x: -width - 10,
    y: 100,
    // resizable: false,
    show: false,
    frame: true,
    transparent: false,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  if (is.dev) win.webContents.openDevTools()
  // win.setIgnoreMouseEvents(true)
  win.on('ready-to-show', () => {
    win.show()
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#config/category')
  } else {
    win.loadURL(
      url.format({
        //编译后的文件
        pathname: join(__dirname, '../renderer/index.html'),
        //协议
        protocol: 'file',
        //protocol 后面需要两个/
        slashes: true,
        //hash 的值
        hash: 'config/category',
      }),
    )
  }
  return win
}
