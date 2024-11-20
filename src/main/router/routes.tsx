import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'
import { HomePage, StorePage, Template } from '@/presentation/pages'
import { ThemeProvider } from '@/presentation/components'
import 'react-toastify/dist/ReactToastify.css'

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
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ToastContainer />
    </RecoilRoot>
  )
}
