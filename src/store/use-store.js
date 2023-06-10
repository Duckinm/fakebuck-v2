import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  isAuthenticated: false,
  user: null,
}

export const useStore = create(
  persist(
    (set) => ({
      ...initialState,
      setUser: (user) => set({ user }),
      setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      clearAuth: () => set(initialState),
    }),
    {
      name: 'user-storage', // unique name
    }
  )
)
