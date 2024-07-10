import { ListAdd, SettingConfig } from '@icon-park/react'
import { NavLink, useSubmit } from 'react-router-dom'

export const FooterMenu = (): JSX.Element => {
  const submit = useSubmit()
  return (
    <div className="nav">
      <ListAdd
        theme="outline"
        size="24"
        strokeWidth={2}
        className="cursor-pointer"
        onClick={() => {
          submit(null, { method: 'POST' })
        }}
      />
      <NavLink to="/config">
        <SettingConfig theme="outline" size="24" strokeWidth={2} className="cursor-pointer" />
      </NavLink>
    </div>
  )
}
