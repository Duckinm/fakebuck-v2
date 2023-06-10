import Modal from '@/components/Modal'
import { PenIcon } from '@/components/icons'
import EditProfileForm from '@/components/profile/EditProfileForm'
import { useState } from 'react'

export default function MeAction() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button className="px-3 py-1.5 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => setOpen(true)}>
        <div className="flex gap-2 items-center">
          <PenIcon />
          <span className="font-semibold">Edit profile</span>
        </div>
      </button>
      <Modal title="Edit profile" open={open} onClose={() => setOpen(false)} width={44}>
        <EditProfileForm />
      </Modal>
    </div>
  )
}
