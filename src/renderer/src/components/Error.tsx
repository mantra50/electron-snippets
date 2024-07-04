import { useStore } from '@renderer/store/useStore'
import { Alert } from 'antd'
import { useEffect } from 'react'

export default function Error(): JSX.Element {
  const { error, setError } = useStore((state) => state)

  useEffect(() => {
    const id = setTimeout(() => setError(''), 5000)
    return (): void => {
      clearTimeout(id)
    }
  }, [error])
  if (!error) return <></>
  return (
    <main className="absolute top-0 w-full ">
      <Alert message={error} type="info" showIcon />
    </main>
  )
}
