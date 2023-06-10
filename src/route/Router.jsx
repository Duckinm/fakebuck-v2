import Container from '@/layouts/Container'
import LoginPage from '@/pages/LoginPage'

import FriendPage from '@/pages/FriendPage'
import HomePage from '@/pages/HomePage'
import ProfilePage from '@/pages/ProfilePage'

import ProtectedRoute from '@/route/ProtectedRoute'
import RedirectIfAuthenticated from '@/route/RedirectIfAuthenticated'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/friend',
        element: <FriendPage />,
      },
      {
        path: '/profile/:profileUserId',
        element: <ProfilePage />,
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
