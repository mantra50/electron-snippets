import Error from '@renderer/components/Error'
import Result from '@renderer/components/Result'
import Search from '@renderer/components/Search'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'
import useShortCut from '@renderer/hooks/useShortCut'
import { MutableRefObject, useEffect, useRef } from 'react'
// 使用 Zustand 代替 Context.Provider 进行全局状态管理
// import { CodeProvider } from '@renderer/context/CodeContext'

function Home(): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
  useEffect(() => {
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLDivElement>)
  }, [])
  const { register } = useShortCut()
  register('search', 'Alt+Shift+;')
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
