import { FooterMenu } from '@renderer/components/FooterMenu'
import { QuickNav } from '@renderer/components/QuickNav'
import { Outlet, useLoaderData } from 'react-router-dom'
import { CategoryItem } from './../../components/CategoryItem/index'
import './category.scss'

export default function Category(): JSX.Element {
  const categories = useLoaderData() as CategoryType[]

  return (
    <main className="category-page">
      <div className="categories">
        <QuickNav />
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
      <FooterMenu />
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
