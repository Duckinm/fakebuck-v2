import Modal from '@/components/Modal'
import RegisterForm from '@/components/auth/RegisterForm'
import { useState } from 'react'

export default function RegisterContainer() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="bg-green-500 text-white rounded-md px-4 leading-[3rem] font-bold hover:bg-green-600 tracking-wide"
        onClick={() => setOpen(true)}
      >
        Create new account
      </button>
      <Modal title="Sign up" open={open} onClose={() => setOpen(false)}>
        <RegisterForm onSuccess={() => setOpen(false)} />
      </Modal>
    </div>
  )
}
