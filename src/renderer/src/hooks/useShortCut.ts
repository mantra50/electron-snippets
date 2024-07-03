export default (): {
  register: (type: 'search', shortCut: string) => void
} => {
  const register = async (type: 'search', shortCut: string = 'Alt+Shift+;'): void => {
    const isBind = await window.api.shortCut(type, shortCut)
    alert(isBind)
  }
  return { register }
}
