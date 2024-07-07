import { useLoaderData } from 'react-router-dom'
import './content.scss'
export default function Content(): JSX.Element {
  const content = useLoaderData() as ContentType
  return (
    <main className="content-page">
      <h1>{content.title}</h1>
      <div className="content-body">{content.content}</div>
    </main>
  )
}
