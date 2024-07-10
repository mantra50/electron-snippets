import { Menu, Tray, app } from "electron"
import { resolve } from "node:path"

export const createTray = () => {
  const tray = new Tray(resolve(__dirname,
    process.platform == 'darwin'
      ? '../../resources/icon.png'
      : '../../resources/icon.png'
  ))
  const contextMenu = Menu.buildFromTemplate([
    { label: '打开', click: () => app.focus() },
    { label: '退出', click: () => app.quit() }
  ])
  tray.setToolTip('HappySnippet')
  tray.setContextMenu(contextMenu)
}

