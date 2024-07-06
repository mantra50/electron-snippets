import { ListAdd, SettingConfig } from '@icon-park/react'
import { Outlet } from 'react-router-dom'
import './category.scss'

export default function Category(): JSX.Element {
  return (
    <main className="category-page">
      <div className="categories">categories</div>
      <div className="nav">
        <ListAdd theme="outline" size="24" fill="#333" />
        <SettingConfig theme="outline" size="24" fill="#333" />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
