import axiosInstance from '@/lib/axios'
import { useMutation } from '@tanstack/react-query'

export const updateUserImage = (input) => axiosInstance.patch('/users/image', input)
export const getProfileUser = (profileUserId) => axiosInstance.get(`/users/${profileUserId}/profile`)

export const useUpdateUserImage = (options) => {
  return useMutation({
    mutationFn: updateUserImage,
    ...options,
  })
}

export const useGetUserProfile = (options) => {
  return useMutation({
    mutationFn: getProfileUser,
    ...options,
  })
}
