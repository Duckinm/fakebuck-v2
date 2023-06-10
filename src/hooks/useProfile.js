import { ProfileContext } from '@/components/profile/ProfileContextProvider'
import { useContext } from 'react'

export default function useProfile() {
  return useContext(ProfileContext)
}
