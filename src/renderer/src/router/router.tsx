import Config from '@renderer/pages/Config'
import Home from '@renderer/pages/Home'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/config',
    element: <Config />,
  },
])

export default router
