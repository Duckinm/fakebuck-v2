import { cn } from '@/utils/classnames'

export default function LoginInput({ placeholder, value, onChange, name, isInvalid }) {
  return (
    <input
      type="text"
      className={cn(
        'block w-full border rounded-md px-4 py-3.5 outline-none focus:ring-1 border-gray-300 focus:border-blue-500 focus:ring-blue-300',
        { 'border-red-500 focus:ring-red-300': isInvalid }
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  )
}
