import { ListAdd, SettingConfig } from '@icon-park/react'
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import './category.scss'
import { useEffect } from 'react'

export default function Category(): JSX.Element {
  const categories = useLoaderData() as CategoryType[]
  const navigate = useNavigate()
  useEffect(() => {
    if (categories.length) {
      navigate(`/config/category/contentList/${categories[0].id}`)
    }
  }, [])
  return (
    <main className="category-page">
      <div className="categories">
        {categories.map((category) => (
          <NavLink
            to={`/config/category/contentList/${category.id}`}
            key={category.id}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="nav">
        <ListAdd theme="outline" size="24" fill="#333" className="cursor-pointer" />
        <SettingConfig theme="outline" size="24" fill="#333" className="cursor-pointer" />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
