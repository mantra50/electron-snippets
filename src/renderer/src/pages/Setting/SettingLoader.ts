/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async () => {
  const config = (await window.api.sql(
    'SELECT * FROM config where id = 1',
    'findOne',
  )) as ConfigType
  return JSON.parse(config.content) as ConfigDataType
}
