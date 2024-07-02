import useCodeSelect from '@renderer/hooks/useCodeSelect'
import './style.sass'
export default function Result(): JSX.Element {
  const { data, id, selectCode, setId } = useCodeSelect()
  return (
    <main className={`result ${data.length !== 0 ? 'py-2' : ''}`}>
      {data.length !== 0 ? <hr className="border-gray-300 mb-1" /> : <></>}
      {data.map((item) => (
        <div
          className={id === item.id ? 'active' : ''}
          key={item.id}
          onClick={() => selectCode(item.id)}
          onMouseEnter={() => {
            document.querySelector('.active')?.classList.remove('active')
            setId(item.id)
          }}
        >
          {item.content}
        </div>
      ))}
    </main>
  )
}
