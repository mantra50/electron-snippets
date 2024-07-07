/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async ({ params }) => {
  return window.api.sql(`SELECT * FROM contents WHERE category_id = ${params.cid}`, 'findAll')
}
