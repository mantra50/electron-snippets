import Error from './components/Error'
import Result from './components/Result'
import Search from './components/Search'
import useShortCut from './hooks/useShortCut'
// 使用 Zustand 代替 Context.Provider 进行全局状态管理
// import { CodeProvider } from './context/CodeContext'

function App(): JSX.Element {
  const { register } = useShortCut()
  register('search', 'Alt+Shift+;')
  return (
    <>
      {/* <CodeProvider> */}
      <Error />
      <Search />
      <Result />
      {/* </CodeProvider> */}
    </>
  )
}

export default App
