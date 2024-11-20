import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

interface HeaderProps {
  prop?: boolean
}

export const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box component="header" width='100vw'>
      <Box
        component="img"
        src={isMobile ? '/img/header-m-store.jpg' : '/img/header-store.jpg'}
        alt="Bem Vinda - Girls of Cars"
        maxWidth="100%"
        sx={{ position: 'absolute', top: 0, left: 0 }}
      />

      <Stack
        component="section"
        alignItems="center"
        justifyContent="center"
        position='relative'
        flex={1}
        height="50vh"
      >
        <Typography color="white" variant="h3">
          BEM VINDA
        </Typography>
        <Typography color="grey" variant="h6">
          LOJINHA
        </Typography>
      </Stack>
    </Box>
  )
}
