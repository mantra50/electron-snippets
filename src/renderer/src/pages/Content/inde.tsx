import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './Content.scss'

export default function Content(): JSX.Element {
  const submit = useSubmit()
  const content = useLoaderData() as ContentType
  return (
    <Form method="PUT">
      <main className="content-page" key={content.id}>
        <input
          name="title"
          type="text"
          onChange={(e) => {
            submit(e.target.form)
          }}
          defaultValue={content.title}
        />
        <textarea
          name="content"
          onChange={(e) => {
            submit(e.target.form)
          }}
          defaultValue={content.content}
        />
      </main>
    </Form>
  )
}
