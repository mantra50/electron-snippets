/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useContextMenu } from 'mantine-contextmenu'
import { useSubmit } from 'react-router-dom'
import { Delete } from '@icon-park/react'
import useContent from '../useContent'
import styles from './styles.module.scss'
import { DragEvent } from 'react'

export default (category: CategoryType) => {
  const { showContextMenu } = useContextMenu()
  const { moveContent } = useContent()
  const submit = useSubmit()
  const contextMenu = () => {
    showContextMenu(
      [
        {
          key: 'remove',
          icon: <Delete theme="outline" size="18" strokeLinecap={2} />,
          title: '删除片段',
          onClick: (): void => {
            submit({ id: category.id }, { method: 'DELETE' })
          },
        },
      ],
      {
        className: 'contextMenu',
      },
    )
  }
  const dragHandle = {
    onDragOver: (e: DragEvent) => {
      e.preventDefault()
      const el = e.currentTarget as HTMLDivElement
      el.classList.add(styles.draging)
    },
    onDragLeave: (e: DragEvent) => {
      const el = e.currentTarget as HTMLDivElement
      el.classList.remove(styles.draging)
    },
    onDrop: (e: DragEvent) => {
      const el = e.currentTarget as HTMLDivElement
      el.classList.remove(styles.draging)
      const id = e.dataTransfer.getData('id')
      moveContent(id, category.id)
    },
  }
  return { contextMenu, dragHandle }
}
