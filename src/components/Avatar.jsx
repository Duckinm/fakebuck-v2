import { cn } from '@/utils/classnames'
import defaultImage from '/assets/blank.png'

export default function Avatar({ src, className }) {
  return <img src={src || defaultImage} alt="user" className={cn('rounded-full h-10 w-10', className)} />
}
