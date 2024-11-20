import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { HomePage, StorePage, Template } from '@/presentation/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/loja',
        element: <StorePage />
      }
    ]
  },
  {
    path: '*',
    element: <>ont fount</>
  }
])

export const Router = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}
