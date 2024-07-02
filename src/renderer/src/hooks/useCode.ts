import { CodeContext, ContextProps } from '@renderer/context/CodeContext'
import { useContext } from 'react'

export default (): ContextProps => {
  const context = useContext(CodeContext)
  if (!context?.data) {
    throw new Error('CodeContext is not defined')
  }
  return { ...context }
}
