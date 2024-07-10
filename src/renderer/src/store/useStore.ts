import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StoreProps {
  config: ConfigDataType,
  setConfig: (config: ConfigDataType) => void
  data: ContentType[]
  setData: (data: ContentType[]) => void
  search: string
  setSearch: (search: string) => void
  error: string
  setError: (error: string) => void
  CategoryId: number
  setCategoryId: (CategoryId: number) => void
}

export const useStore = create(persist<StoreProps>(
  (set) => ({
    data: [],
    setData: (data): void => set({ data }),
    search: '',
    setSearch: (search): void => set({ search }),
    error: '',
    setError: (error): void => set({ error }),
    CategoryId: 0,
    setCategoryId: (CategoryId): void => set({ CategoryId }),
    config: {
      shortCut: '',
      databaseDirectory: ''
    },
    setConfig: (config): void => set({ config }),
  }),
  {
    name: 'happysnippets-storage',
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
),)
