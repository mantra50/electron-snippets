/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as ConfigDataType
  console.log(data.shortCut)
  const res = await window.api.shortCut(data.shortCut)
  if (res) {
    return window.api.sql(`UPDATE config SET content=@content where id=1`, 'update', {
      content: JSON.stringify(data),
    })
  }
  return {}
  // window.api.shortCut(data.shortCut)
  // return window.api.sql(`UPDATE config SET content=@content where id=1`, 'update', {
  //   content: JSON.stringify(data),
  // })
}
