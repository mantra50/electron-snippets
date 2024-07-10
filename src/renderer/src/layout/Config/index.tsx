import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.layer.css'
import { ContextMenuProvider } from 'mantine-contextmenu'
import 'mantine-contextmenu/styles.layer.css'
import { Outlet } from 'react-router-dom'

export default function Config(): JSX.Element {
  return (
    <MantineProvider defaultColorScheme="auto">
      <ContextMenuProvider>
        <main>
          <Outlet />
        </main>
      </ContextMenuProvider>
    </MantineProvider>
  )
}
