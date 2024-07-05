import { SettingThree } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input } from 'antd'

export default function Search(): JSX.Element {
  const { handleSearch, search } = useSearch()
  return (
    <div className="bg-slate-50 p-3 rounded-lg drag">
      <section className="bg-slate-200 p-2 rounded-lg  flex items-center gap-1">
        <SettingThree
          theme="outline"
          size="18"
          fill="#333"
          className="no-drag cursor-pointer"
          onClick={() => window.api.createConfigWindow()}
        />
        <Input value={search} onChange={handleSearch} autoFocus />
      </section>
    </div>
  )
}
