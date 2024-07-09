import { BookmarkOne } from '@icon-park/react'
import useCategory from '@renderer/hooks/useCategory'
import { useStore } from '@renderer/store/useStore'
import { NavLink, useFetcher } from 'react-router-dom'
import styles from './styles.module.scss'

interface Props {
  category: CategoryType
}
export const CategoryItem = ({ category }: Props): JSX.Element => {
  const fetcher = useFetcher()
  const CategoryId = useStore((state) => state.CategoryId)
  const setCategoryId = useStore((state) => state.setCategoryId)
  const { contextMenu, dragHandle } = useCategory(category)
  return (
    <>
      <NavLink
        onDoubleClick={() => {
          setCategoryId(category.id)
        }}
        to={`/config/category/contentList/${category.id}`}
        key={category.id}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
        onContextMenu={contextMenu()}
        {...dragHandle}
      >
        <BookmarkOne theme="outline" size="16" strokeWidth={3} />
        {CategoryId === category.id ? (
          <input
            defaultValue={category.name}
            autoFocus
            className={styles.input}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                fetcher.submit(
                  { category_id: category.id, name: e.target.value || '未命名' },
                  { method: 'PUT' },
                )
                setCategoryId(0)
              }
            }}
          />

        ) : (
          <span className="truncate">{category.name}</span>
        )}
      </NavLink>
    </>
  )
}
