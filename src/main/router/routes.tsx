import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StorePage } from '@/presentation/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StorePage />
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
