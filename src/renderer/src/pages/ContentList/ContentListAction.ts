/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async ({ request, params }) => {
  const formData = await request.formData()
  const cid = params.cid || 0
  console.log(cid)
  switch (formData.get('action')) {
    case 'add': {
      window.api.sql(
        `INSERT INTO contents (title, content, category_id, created_at) VALUES ('未命名片段', '', ${cid}, datetime());`,
        'insert',
      )
    }
  }
  return {}
}
