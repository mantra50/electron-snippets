import { DataType } from '@renderer/data'
import { useStore } from '@renderer/store/useStore'
import { Dispatch, useCallback, useEffect, useState } from 'react'

export default (): {
  data: DataType[]
  id: number
  selectCode: (id: number) => void
  setId: Dispatch<SetStateAction<number>>
} => {
  const { data, setData, setSearch } = useStore((state) => state)
  const [id, setId] = useState(1)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (data.length === 0) return
      switch (e.code) {
        case 'ArrowUp':
          setId((id) => {
            const index = data.findIndex((item) => item.id === id)
            return data[index - 1]?.id || data[data.length - 1].id
          })
          break
        case 'ArrowDown':
          setId((id) => {
            const index = data.findIndex((item) => item.id === id)
            return data[index + 1]?.id || data[0].id
          })
          break
        case 'Enter': {
          selectCode(id)
          break
        }
      }
    },
    [data, id],
  )
  function selectCode(id: number): void {
    const content = data.find((item) => item.id == id)?.content
    if (content) navigator.clipboard.writeText(content)
    window.api.hidenWindow()
    setData([])
    setSearch('')
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return (): void => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  useEffect(() => setId(data[0]?.id || 1), [data])
  return { data, id, selectCode, setId }
}
