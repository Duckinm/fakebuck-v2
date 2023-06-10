import InputErrorMessage from '@/components/auth/InputErrorMessage'
import LoginInput from '@/components/auth/LoginInput'
import validateLogin from '@/helpers/validators/validate-login'
import useForm from '@/hooks/useForm'
import { useLogin } from '@/services/auth'

const initialFormValues = {
  emailOrMobile: '',
  password: '',
}

export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(initialFormValues, validateLogin)

  const login = useLogin()
  const onSubmit = async (data) => {
    try {
      await login.mutateAsync(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmitForm(onSubmit)}>
      <div className="grid gap-4">
        <div>
          <LoginInput
            placeholder="Email address or phone number"
            name="emailOrMobile"
            value={input.emailOrMobile}
            onChange={handleChangeInput}
            isInvalid={error.emailOrMobile}
          />
          <InputErrorMessage message={error.emailOrMobile} />
        </div>
        <div>
          <LoginInput
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            isInvalid={error.password}
          />
          <InputErrorMessage message={error.password} />
        </div>
        <div>
          <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold">Log in</button>
        </div>
      </div>
    </form>
  )
}
