import { useStore } from '@renderer/store/useStore'
import { useEffect } from 'react'

export default function Error(): JSX.Element {
  const { error, setError } = useStore((state) => state)

  useEffect(() => {
    const id = setTimeout(() => setError(''), 2000)
    return (): void => {
      clearTimeout(id)
    }
  }, [error])
  if (!error) return <></>
  return <div className="bg-red-400 mb-2 rounded-md px-2 text-white ">{error}</div>
}
