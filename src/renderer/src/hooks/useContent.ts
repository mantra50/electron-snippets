/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigator = useNavigate()
  const moveContent = (content_id: number, category_id: number) => {
    window.api.sql(`UPDATE contents SET category_id=@category_id WHERE id=@id`, 'update', {
      id: content_id,
      category_id,
    })
    navigator(`/config/category/contentList/${category_id}`)
  }
  return { moveContent }
}
