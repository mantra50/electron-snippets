import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './content.scss'

export default function Content(): JSX.Element {
  const submit = useSubmit()
  const { content, categories } = useLoaderData() as {
    content: ContentType
    categories: CategoryType[]
  }
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
          autoFocus
        />
        <select
          name="category_id"
          value={content.category_id}
          onChange={(e) => {
            submit(e.target.form)
          }}
        >
          <option value="0" key={0}>
            未分类
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <textarea
          name="content"
          onChange={(e) => {
            submit(e.target.form)
          }}
          placeholder="请输入内容..."
          defaultValue={content.content}
        />
      </main>
    </Form>
  )
}
