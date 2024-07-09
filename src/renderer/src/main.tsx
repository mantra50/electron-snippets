import { MantineProvider } from '@mantine/core'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.css'
import { ContextMenuProvider } from 'mantine-contextmenu'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'

import '@mantine/core/styles.layer.css'
import 'mantine-contextmenu/styles.layer.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <ContextMenuProvider>
        <RouterProvider router={router} />
      </ContextMenuProvider>
    </MantineProvider>
  </React.StrictMode>,
)
