import Result from './components/Result'
import Search from './components/Search'
// 使用 Zustand 代替 Context.Provider 进行全局状态管理
// import { CodeProvider } from './context/CodeContext'

function App(): JSX.Element {

  return (
    <>
      {/* <CodeProvider> */}
      <Search />
      <Result />
      {/* </CodeProvider> */}
    </>
  )
}

export default App
