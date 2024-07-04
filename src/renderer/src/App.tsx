import { useEffect, useRef } from 'react'
import Error from './components/Error'
import Result from './components/Result'
import Search from './components/Search'
import useShortCut from './hooks/useShortCut'
import useIgnoreMouseEvents from './hooks/useIgnoreMouseEvents'
// 使用 Zustand 代替 Context.Provider 进行全局状态管理
// import { CodeProvider } from './context/CodeContext'

function App(): JSX.Element {
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

export default App
