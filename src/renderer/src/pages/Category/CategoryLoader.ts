/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async () => {
  return window.api.sql('SELECT * FROM categories', 'findAll')
}
