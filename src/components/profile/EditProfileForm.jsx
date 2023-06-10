import Avatar from '@/components/Avatar'
import Loading from '@/components/Loading'
import CoverImage from '@/components/profile/CoverImage'
import PictureForm from '@/components/profile/PictureForm'

import { useUpdateUserImage } from '@/services/user'
import { useStore } from '@/store/use-store'

export default function EditProfileForm() {
  const user = useStore((state) => state.user)
  const updateProfile = useStore((state) => state.updateProfileImage)
  const updateCover = useStore((state) => state.updateCoverImage)

  const updateUserImage = useUpdateUserImage()

  const updateProfileImage = async (input) => {
    const formData = new FormData()
    formData.append('profileImage', input)
    const res = await updateUserImage.mutateAsync(formData)
    updateProfile(res.data.profileImage)
  }

  const updateCoverImage = async (input) => {
    const formData = new FormData()
    formData.append('coverImage', input)
    const res = await updateUserImage.mutateAsync(formData)
    updateCover(res.data.coverImage)
  }

  return (
    <>
      {updateUserImage.isLoading && <Loading />}
      <div className="flex flex-col gap-4">
        <PictureForm onSave={updateProfileImage} title="Profile Image" initialSrc={user.profileImage}>
          {(src) => (
            <div className="flex justify-center">
              <Avatar src={src} className="h-[10.5rem] w-[10.5rem]" />
            </div>
          )}
        </PictureForm>
        <PictureForm onSave={updateCoverImage} title="Cover Image" initialSrc={user.coverImage}>
          {(src) => (
            <div className="aspect-[1096/404] overflow-hidden flex justify-center items-center rounded-lg">
              <CoverImage src={src} />
            </div>
          )}
        </PictureForm>
      </div>
    </>
  )
}
