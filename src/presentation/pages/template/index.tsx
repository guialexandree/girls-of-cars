import { AppBar, Drawer } from '@/presentation/components'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

interface HomePageProps {
  props?: boolean
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Box display='flex' height='100vh'>
      <AppBar />
      <Drawer />
      <Outlet />
    </Box>
  )
}

export default HomePage