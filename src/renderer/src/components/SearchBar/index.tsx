import { Add } from '@icon-park/react';
import { Form, useSubmit } from 'react-router-dom';

export const SearchBar = (): JSX.Element => {
  const submit = useSubmit()
  return (
    <Form>
      <div className="flex justify-between items-center border-b px-3">
        <input
          type="text"
          name="searchWord"
          placeholder="搜索..."
          className="outline-none py-2 font-bold w-full bg-slate-50"
          onChange={(e) => {
            return submit(e.target.form)
          }}
        />
        <Add
          theme="outline"
          size="18"
          strokeWidth={2}
          className="cursor-pointer"
          onClick={() => {
            submit(null, { method: 'POST' })
          }}
        />
      </div>
    </Form>
  )
}
