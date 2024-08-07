import { Router } from '@remix-run/router'
import Config from '@renderer/layout/Config'
import Home from '@renderer/layout/Home'
import Category from '@renderer/pages/Category'
import CategoryAction from '@renderer/pages/Category/CategoryAction'
import CategoryLoader from '@renderer/pages/Category/CategoryLoader'
import ContentAction from '@renderer/pages/Content/ContentAction'
import ContentLoader from '@renderer/pages/Content/ContentLoader'
import Content from '@renderer/pages/Content/inde'
import ContentList from '@renderer/pages/ContentList'
import ContentListAction from '@renderer/pages/ContentList/ContentListAction'
import ContentListLoader from '@renderer/pages/ContentList/ContentListLoader'
import { Setting } from '@renderer/pages/Setting'
import Wellcom from '@renderer/pages/Wellcom/inde'
import { createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'config',
    element: <Config />,
    children: [
      {
        index: true,
        element: <Setting />,
        // action: SettingAction,
        // loader: SettingLoader,
      },
      {
        path: 'category',
        element: <Category />,
        loader: CategoryLoader,
        action: CategoryAction,
        children: [
          {
            index: true,
            element: <Wellcom />,
          },
          {
            path: 'contentList/:cid?',
            loader: ContentListLoader,
            action: ContentListAction,
            element: <ContentList />,
            children: [
              {
                index: true,
                element: <Wellcom />,
              },
              {
                path: 'content/:id',
                element: <Content />,
                loader: ContentLoader,
                action: ContentAction,
              },
            ],
          },
        ],
      },
    ],
  },
]) as Router
export default router
