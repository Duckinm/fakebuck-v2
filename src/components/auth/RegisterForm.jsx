import { useState } from 'react'
import { toast } from 'react-toastify'

import InputErrorMessage from '@/components/auth/InputErrorMessage'
import RegisterInput from '@/components/auth/RegisterInput'
import validateRegister from '@/helpers/validators/validate-register'
import { useRegister } from '@/services/auth'

const initialInput = {
  firstName: '',
  lastName: '',
  emailOrMobile: '',
  password: '',
  confirmPassword: '',
}

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput)
  const [error, setError] = useState({})

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const register = useRegister()
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault()
      const result = validateRegister(input)
      if (result) {
        return setError(result)
      }
      setError({})
      await register.mutateAsync(input)
      toast.success('register successfully')
      onSuccess()
    } catch (err) {
      console.error('err: ', err)
      toast.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-x-3 gap-y-4">
        <div>
          <RegisterInput
            name="firstName"
            placeholder="First name"
            value={input.firstName}
            onChange={handleChangeInput}
            isInvalid={error.firstName}
          />
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div>
          <RegisterInput
            name="lastName"
            placeholder="Last name"
            value={input.lastName}
            onChange={handleChangeInput}
            isInvalid={error.lastName}
          />
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            name="emailOrMobile"
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            onChange={handleChangeInput}
            isInvalid={error.emailOrMobile}
          />
          {error.emailOrMobile && <InputErrorMessage message={error.emailOrMobile} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChangeInput}
            isInvalid={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            name="confirmPassword"
            placeholder="Confirm password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            isInvalid={error.confirmPassword}
          />
          {error.confirmPassword && <InputErrorMessage message={error.confirmPassword} />}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-green-500 hover:bg-green-600 rounded-lg text-white text-lg font-bold px-8 py-1 min-w-[10rem]">
          Sign up
        </button>
      </div>
    </form>
  )
}
