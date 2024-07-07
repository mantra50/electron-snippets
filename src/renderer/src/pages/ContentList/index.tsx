import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import './contentList.scss'
import { useEffect } from 'react'
import dayjs from 'dayjs'
export default function ContentList(): JSX.Element {
  const ContentList = useLoaderData() as ContentType[]
  const navigate = useNavigate()
  useEffect(() => {
    if (ContentList.length) {
      // eslint-disable-next-line prettier/prettier
      navigate(`/config/category/contentList/${ContentList[0].category_id}/content/${ContentList[0].id}`)
    }
  }, [ContentList])
  return (
    <main className="content-list-page">
      <div className="list">
        {ContentList.map((content) => (
          <NavLink
            to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
            className={({ isActive }) => (isActive ? 'active' : '')}
            key={content.id}
          >
            <div className="truncate">{content.title}</div>
            <div className="text-xs opacity-90">
              {dayjs(content.created_at).format('YYYY/MM/DD')}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
