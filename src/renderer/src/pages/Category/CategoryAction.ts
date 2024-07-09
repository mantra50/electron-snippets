import { redirect } from 'react-router-dom'

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  switch (request.method) {
    case 'POST': {
      return window.api.sql(
        `INSERT INTO categories (name, created_at) VALUES ('未命名',datetime())`,
        'insert',
      )
    }
    case 'DELETE': {
      window.api.sql(`DELETE FROM categories WHERE id=@category_id`, 'remove', {
        category_id: data.id,
      })
      window.api.sql(`UPDATE contents set category_id=0 where category_id=@category_id`, 'update', {
        category_id: data.id,
      })
      return redirect('/config/category/contentList')
    }
    case 'PUT': {
      return window.api.sql(
        `UPDATE categories set name=@name where id=@category_id`,
        'update',
        data,
      )
    }
  }

  return {}
}
