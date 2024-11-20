import { Box, useMediaQuery, useTheme } from '@mui/material'

interface HomePageProps {
  props?: boolean
}

const HomePage: React.FC<HomePageProps> = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Box sx={{ maxHeight: '40vh' }}>
        <img
          src={isMobile ? 'img/bg-m-home.jpg' : 'img/bg-home.jpg'}
          style={{
            backgroundPosition: 40,
            backgroundSize: 'cover',
            opacity: 0.4,
            width: '100vw', 
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        />
      </Box>
    </>
  )
}

export default HomePage
