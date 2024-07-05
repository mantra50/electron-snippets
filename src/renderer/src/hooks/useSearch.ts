import { codes } from '@renderer/data'
import { useStore } from '@renderer/store/useStore'
import { ChangeEvent } from 'react'

export default (): {
  search: string
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
} => {
  const { setData, search, setSearch } = useStore((state) => state)
  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
    setData(
      codes
        .filter((code) => {
          return code.content.toLowerCase().includes(e.target.value.toLowerCase() || '@@@@@')
        })
        .splice(0, 7),
    )
  }
  return { search, handleSearch }
}
