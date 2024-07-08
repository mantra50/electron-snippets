/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async ({ params }) => {
  const content = await window.api.sql(`SELECT * FROM contents WHERE id = ${params.id}`, 'findOne')
  const categories = await window.api.sql(`SELECT * FROM categories`, 'findAll')
  return {
    content,
    categories,
  }
}
