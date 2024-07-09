import { redirect } from 'react-router-dom'

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async ({ request, params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const cid = params.cid || 0
  switch (request.method) {
    case 'POST': {
      const id = await window.api.sql(
        `INSERT INTO contents (title, content, category_id, created_at) VALUES ('未命名片段', '', ${cid}, datetime());`,
        'insert',
      )
      return redirect(`content/${id}`)
    }
    case 'DELETE': {
      return window.api.sql(`DELETE FROM contents WHERE id = ${data.id};`, 'remove')
    }
  }
  return {}
}
