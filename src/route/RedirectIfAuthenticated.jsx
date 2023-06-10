import { useStore } from '@/store/use-store'
import { Navigate } from 'react-router-dom'

export default function RedirectIfAuthenticated({ children }) {
  const isAuthenticated = useStore((state) => state.isAuthenticated)

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return children
}
