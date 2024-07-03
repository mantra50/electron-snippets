import { DataType } from '@renderer/data'
import { create } from 'zustand'

interface StoreProps {
  data: DataType[]
  setData: (data: DataType[]) => void
  search: string
  setSearch: (search: string) => void
}

export const useStore = create<StoreProps>((set) => ({
  data: [],
  setData: (data): void => set({ data }),
  search: '',
  setSearch: (search): void => set({ search }),
}))