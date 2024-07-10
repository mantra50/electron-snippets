import { useStore } from '@renderer/store/useStore'
import { ChangeEvent } from 'react'

export default (): {
  search: string
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
} => {
  const { setData, search, setSearch } = useStore((state) => state)
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    setSearch(e.target.value)
    if (e.target.value === '') {
      return setData([])
    }
    const data = await window.api.sql(`select * from contents where title like @title limit 7 `
      , 'findAll'
      , {
        title: `%${e.target.value.toLowerCase()}%`
      })

    setData(data as ContentType[])
  }
  return { search, handleSearch }
}
