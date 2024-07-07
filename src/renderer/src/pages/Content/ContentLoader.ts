/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default ({ params }) => {
  return window.api.sql(`SELECT * FROM contents WHERE id = ${params.id}`, 'findOne')
}
