/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async ({ request, params }) => {
  const data = await request.formData()
  const title = data.get('title')
  const content = data.get('content')
  const res = await window.api.sql(
    `UPDATE contents SET title=@title, content=@content WHERE id=${params.id}`,
    'update',
    {
      title,
      content,
    },
  )
  return res
}
