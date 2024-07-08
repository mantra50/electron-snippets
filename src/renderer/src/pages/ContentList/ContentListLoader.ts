/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async ({ params, request }) => {
  const url = new URL(request.url)
  const searchWord = url.searchParams.get('searchWord')

  const { cid } = params
  let sql = `SELECT * FROM contents `
  if (searchWord) {
    sql += ` WHERE title LIKE @searchWord ORDER BY id DESC`
    return window.api.sql(sql, 'findAll', { searchWord: `%${searchWord}%` })
  }
  cid
    ? (sql += ` WHERE category_id = ${params.cid} order by id desc`)
    : (sql += ` order by id desc`)
  return window.api.sql(sql, 'findAll')
}
