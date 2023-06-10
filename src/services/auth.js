import axiosInstance from '@/lib/axios'
import { useStore } from '@/store/use-store'
import { removeAccessToken, setAccessToken } from '@/utils/localstorage'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const register = (input) => axiosInstance.post('/auth/register', input)
export const login = (input) => axiosInstance.post('/auth/login', input)
export const fetchMe = () => axiosInstance.get('/auth/me')

export const logout = () => {
  removeAccessToken()
  useStore.getState().clearAuth()
}

export const useAuth = (options) => {
  const setUser = useStore((state) => state.setUser)
  const setAuthenticated = useStore((state) => state.setAuthenticated)

  return useQuery({
    queryKey: ['authorize'],
    queryFn: fetchMe,
    onSuccess: (data) => {
      if (!data.data.user) return

      setAuthenticated(true)
      setUser(data.data.user)
    },
    ...options,
  })
}

export const useRegister = (options) => {
  const queryClient = useQueryClient()
  const setUser = useStore((state) => state.setUser)
  const setAuthenticated = useStore((state) => state.setAuthenticated)

  return useMutation({
    mutationKey: ['register'],
    mutationFn: register,
    onSuccess: async (data) => {
      setAccessToken(data.data.accessToken)

      const authorize = await queryClient.fetchQuery({ queryKey: ['authorize'], queryFn: fetchMe })
      if (!authorize.data.user) return

      queryClient.setQueryData(['authorize'], data)
      setAuthenticated(true)
      setUser(authorize.data.user)
    },
    ...options,
  })
}

export const useLogin = (options) => {
  const queryClient = useQueryClient()
  const setUser = useStore((state) => state.setUser)
  const setAuthenticated = useStore((state) => state.setAuthenticated)

  return useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: async (data) => {
      setAccessToken(data.data.accessToken)

      const authorize = await queryClient.fetchQuery({ queryKey: ['authorize'], queryFn: fetchMe })
      if (!authorize.data.user) return

      queryClient.setQueryData(['authorize'], data)
      setAuthenticated(true)
      setUser(authorize.data.user)
    },
    ...options,
  })
}
