import { BrowserWindow, IpcMainEvent, IpcMainInvokeEvent, app } from 'electron'
import { OptionsType, createWindow } from './createWindow'

export const window = {
  search: {
    id: 0,
    options: {
      hash: '',
      openDevTools: true,
      isInitShow: true,
    },
  },
  config: {
    id: 0,
    options: {
      isInitShow: false,
      openDevTools: true,
      width: 950,
      height: 550,
      x: -960,
      y: 100,
      resizable: true,
      frame: true,
      transparent: false,
      hash: '/#config/category/contentList',
    },
  },
} as Record<windowNameType, { id: number; options: OptionsType }>

export const getWindowByName = (name: windowNameType): BrowserWindow => {
  let win = BrowserWindow.fromId(window[name].id)
  if (!win) {
    win = createWindow(window[name].options)
    window[name].id = win.id
  }
  return win
}

export const getWindowByEvent = (event: IpcMainEvent | IpcMainInvokeEvent): BrowserWindow => {
  return BrowserWindow.fromWebContents(event.sender)!
}



app.whenReady().then(() => {
  // getWindowByName('config')
  getWindowByName('search')
})
