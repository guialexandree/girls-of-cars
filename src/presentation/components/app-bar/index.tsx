import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { AppBar as AppBarMUI, Box, Icon, IconButton, Stack, Toolbar } from '@mui/material'
import { Logo } from '@/presentation/components'
import * as GenericState from '@/presentation/components/atoms'

export const AppBar: React.FC = () => {
  const navigate = useNavigate()
  const setOpenDrawer = useSetRecoilState(GenericState.isOpenDrawerState)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMUI position="fixed" sx={{ padding: 1, backgroundColor: '#b24ab0ab' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpenDrawer(true)
            }}
          >
            <Icon sx={{ fontSize: 32 }}>menu</Icon>
          </IconButton>
          <Stack flexGrow={1} direction="row" alignItems="center" justifyContent="center">
            <Logo />
          </Stack>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={() => {
              navigate('/loja')
            }}
          >
            <Icon sx={{ fontSize: 28 }}>shopping_cart</Icon>
          </IconButton>
        </Toolbar>
      </AppBarMUI>
    </Box>
  )
}
