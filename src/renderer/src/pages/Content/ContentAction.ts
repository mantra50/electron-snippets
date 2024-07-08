import { redirect } from 'react-router-dom'

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async ({ request, params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  await window.api.sql(
    `UPDATE contents SET title=@title, content=@content, category_id=@category_id WHERE id=${params.id}`,
    'update',
    data,
  )
  return redirect(`/config/category/contentList/${data.category_id}/content/${params.id}`)
}
