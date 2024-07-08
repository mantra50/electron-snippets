import dayjs from 'dayjs'
import { Form, NavLink, Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import './contentList.scss'
import { Add } from '@icon-park/react'
export default function ContentList(): JSX.Element {
  const ContentList = useLoaderData() as ContentType[]
  const submit = useSubmit()
  return (
    <main className="content-list-page">
      <div className="list">
        <Form>
          <div className="flex justify-between items-center border-b px-3">
            <input
              type="text"
              name="searchWord"
              placeholder="搜索..."
              className="outline-none py-2 font-bold w-full bg-slate-50"
              onChange={(e) => {
                return submit(e.target.form)
              }}
            />
            <Add
              theme="outline"
              size="18"
              onClick={() => {
                submit({ action: 'add' }, { method: 'POST' })
              }}
            />
          </div>
        </Form>
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
