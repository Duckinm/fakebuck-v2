import ProfileContainer from '@/components/profile/ProfileContainer'
import ProfileContextProvider from '@/components/profile/ProfileContextProvider'

export default function ProfilePage() {
  return (
    <ProfileContextProvider>
      <ProfileContainer />
    </ProfileContextProvider>
  )
}
