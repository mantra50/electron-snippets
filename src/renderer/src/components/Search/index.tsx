import useSearch from '@renderer/hooks/useSearch'

export default function Search(): JSX.Element {
  const { handleSearch, search } = useSearch()
  return (
    <div className="bg-slate-50 w-screen  p-3 rounded-lg drag">
      <section className="bg-slate-200 p-2 rounded-lg">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          autoFocus
          className="w-full outline-none bg-slate-200 text-gray-800 text-2xl"
        />
      </section>
    </div>
  )
}
