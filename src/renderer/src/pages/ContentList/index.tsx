import { SearchBar } from '@renderer/components/SearchBar'
import { Outlet, useLoaderData } from 'react-router-dom'
import './contentList.scss'
import { ContentListItem } from '@renderer/components/ContentListItem'

export default function ContentList(): JSX.Element {
  const ContentList = useLoaderData() as ContentType[]

  return (
    <main className="content-list-page">
      <div className="list">
        <SearchBar />
        {ContentList.map((content) => (
          <ContentListItem key={content.id} content={content} />
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
