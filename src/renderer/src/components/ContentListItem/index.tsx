import { Delete } from '@icon-park/react'
import dayjs from 'dayjs'
import { useContextMenu } from 'mantine-contextmenu'
import { NavLink, useSubmit } from 'react-router-dom'
import styles from './styles.module.scss'

interface Props {
  content: ContentType
}
export const ContentListItem = ({ content }: Props): JSX.Element => {
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()
  return (
    <NavLink
      to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
      key={content.id}
      onDragStart={(e) => {
        e.dataTransfer.setData('id', String(content.id))
      }}
      onContextMenu={showContextMenu(
        [
          {
            key: 'remove',
            icon: <Delete theme="outline" size="18" strokeLinecap={2} />,
            title: '删除片段',
            onClick: (): void => {
              submit({ id: content.id }, { method: 'DELETE' })
            },
          },
        ],
        {
          className: 'contextMenu',
        },
      )}
    >
      <div className="truncate">{content.title}</div>
      <div className="text-xs opacity-90">{dayjs(content.created_at).format('YY/MM/DD')}</div>
    </NavLink>
  )
}
