import { AllApplication } from '@icon-park/react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

export const QuickNav = (): JSX.Element => {
  return (
    <div className={styles.QuickNav}>
      <div className="text-xs my-2 px-2 font-bold">快捷操作</div>
      <NavLink
        to={`/config/category/contentList`}
        end
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        <AllApplication theme="outline" size="16" strokeWidth={3} />
        <span className="truncate">所有片段</span>
      </NavLink>
      <NavLink
        to={`/config/category/contentList/0`}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        <AllApplication theme="outline" size="16" strokeWidth={3} />
        <span className="truncate">未分类</span>
      </NavLink>
    </div>
  )
}
