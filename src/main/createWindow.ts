import { is } from '@electron-toolkit/utils'
import { BrowserWindow, BrowserWindowConstructorOptions, shell } from 'electron'
import { join } from 'path'
import icon from '../../resources/icon.png?asset'
import url from 'node:url'

export interface OptionsType extends Partial<BrowserWindowConstructorOptions> {
  hash?: string
  openDevTools?: boolean
  isInitShow?: boolean
}

export function createWindow(options: OptionsType): BrowserWindow {
  // Create the browser window.
  const win = new BrowserWindow(
    Object.assign(
      {
        width: 500,
        height: 325,
        x: -500,
        y: 0,
        resizable: false,
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
      },
      options,
    ),
  )

  if (is.dev && options.openDevTools) win.webContents.openDevTools()
  win.on('ready-to-show', () => {
    options.isInitShow && win.show()
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + options.hash)
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
        hash: 'config/category/contentList',
      }),
    )
  }
  return win
}
