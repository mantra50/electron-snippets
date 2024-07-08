import { AllApplication, BookmarkOne, ListAdd, SettingConfig } from '@icon-park/react'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import './category.scss'

export default function Category(): JSX.Element {
  const categories = useLoaderData() as CategoryType[]

  return (
    <main className="category-page">
      <div className="categories">
        <NavLink to={`/config/category/contentList`} end className="font-bold">
          <AllApplication theme="outline" size="16" strokeWidth={3} />
          <span className="truncate">所有片段</span>
        </NavLink>
        {categories.map((category) => (
          <NavLink
            to={`/config/category/contentList/${category.id}`}
            key={category.id}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <BookmarkOne theme="outline" size="16" strokeWidth={3} />
            <span className="truncate">{category.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="nav">
        <ListAdd theme="outline" size="24" className="cursor-pointer" />
        <SettingConfig theme="outline" size="24" className="cursor-pointer" />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
