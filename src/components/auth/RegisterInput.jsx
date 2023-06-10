import { cn } from '@/utils/classnames'

export default function RegisterInput({ placeholder, value, onChange, name, isInvalid }) {
  return (
    <input
      type="text"
      className={cn(
        'block w-full rounded-md border px-3 py-1.5 leading-6 outline-none text-sm focus:ring border-gray-300 focus:ring-blue-300 focus:border-blue-500',
        {
          'border-red-500 focus:ring-red-300': isInvalid,
        }
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  )
}
