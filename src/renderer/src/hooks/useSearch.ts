import { useState } from 'react'
import useCode from './useCode'
import { codes } from '@renderer/data'

export default (): {
  search: string
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
} => {
  const { setData } = useCode()
  const [search, setSearch] = useState('')
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
