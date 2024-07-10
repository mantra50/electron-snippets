type SqlActionType = 'findAll' | 'findOne' | 'insert' | 'update' | 'remove'

type CategoryType = {
  id: number
  name: string
  created_at: string
}

type ContentType = {
  id: number
  title: string
  content: string
  created_at: string
  category_id: number
}

type ConfigType = {
  id: number
  content: string
}

type ConfigDataType = {
  shortCut: string
  databaseDirectory: string
}

type windowNameType = 'search' | 'config'
