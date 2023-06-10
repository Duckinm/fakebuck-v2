import axiosInstance from '@/lib/axios'

export const addFriend = (receiverId) => axiosInstance.post(`/friends/${receiverId}`)
export const confirmFriend = (requesterId) => axiosInstance.patch(`/friends/${requesterId}`)
export const rejectFriend = (requesterId) => axiosInstance.delete(`/friends/${requesterId}/reject`)
export const cancelRequest = (receiverId) => axiosInstance.delete(`/friends/${receiverId}/cancel`)
export const unfriend = (friendId) => axiosInstance.delete(`/friends/${friendId}/unfriend`)
