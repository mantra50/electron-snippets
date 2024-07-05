import { useEffect, useRef } from 'react'
import Error from '@renderer/components/Error'
import Result from '@renderer/components/Result'
import Search from '@renderer/components/Search'
import useShortCut from '@renderer/hooks/useShortCut'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'
// 使用 Zustand 代替 Context.Provider 进行全局状态管理
// import { CodeProvider } from '@RENDERERcontext/CodeContext'

function Home(): JSX.Element {
  const { register } = useShortCut()
  register('search', 'Alt+Shift+;')
  const mainRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
    setIgnoreMouseEvents(mainRef)
  }, [])
  return (
    <main className="relative p-1" ref={mainRef}>
      {/* <CodeProvider> */}
      <Error />
      <Search />
      <Result />
      {/* </CodeProvider> */}
    </main>
  )
}

export default Home
