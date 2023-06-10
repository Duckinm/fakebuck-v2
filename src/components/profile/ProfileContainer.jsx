import CoverImage from '@/components/profile/CoverImage'
import FriendAction from '@/components/profile/FriendAction'
import MeAction from '@/components/profile/MeAction'
import ProfileInfo from '@/components/profile/ProfileInfo'
import ProfileWrapper from '@/components/profile/ProfileWrapper'
import ReceiverAction from '@/components/profile/ReceiverAction'
import RequesterAction from '@/components/profile/RequesterAction'
import UnknownAction from '@/components/profile/UnknownAction'

import useProfile from '@/hooks/useProfile'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// REMARK This is weird pattern, but it's okay for now.
const actionMapping = {
  ME: <MeAction />,
  FRIEND: <FriendAction />,
  UNKNOWN: <UnknownAction />,
  REQUESTER: <RequesterAction />,
  RECEIVER: <ReceiverAction />,
}

export default function ProfileContainer() {
  const { profileUserId } = useParams()
  const { fetchProfile, profileUser, statusWithAuthenticatedUser } = useProfile()

  useEffect(() => {
    fetchProfile(profileUserId)
  }, [profileUserId, fetchProfile])

  return (
    <ProfileWrapper cover={<CoverImage src={profileUser.coverImage} />}>
      <ProfileInfo action={actionMapping[statusWithAuthenticatedUser]} />
    </ProfileWrapper>
  )
}
