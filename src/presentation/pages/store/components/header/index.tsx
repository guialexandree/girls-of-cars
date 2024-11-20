import { Box, useMediaQuery, useTheme } from '@mui/material'

interface HeaderProps {
  prop?: boolean
}

export const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box component='header'>
      <Box
        component='img'
        src={isMobile ? '/img/header-m-store.png' : '/img/header-store.png'}
        alt="Bem Vinda - Girls of Cars" maxWidth='100%'
      >
      </Box>
    </Box>
  )
}
