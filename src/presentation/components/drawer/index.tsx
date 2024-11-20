import React from 'react'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { navigations } from '@/main/configs'
import { Box, Drawer as DrawerMUI, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import * as GenericState from '@/presentation/components/atoms'

export const Drawer: React.FC = () => {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useRecoilState(GenericState.isOpenDrawerState)

  const handleNavigate = (path: string): void => {
    navigate(path)
    setOpen(false)
  }

  return (
    <DrawerMUI open={isOpen} onClose={() => { setOpen(false) }}>
      <Box sx={{ width: 250 }} role='presentation'>
        <List>
          {navigations.map(navigation => (
            <ListItem key={navigation.path} disablePadding>
              <ListItemButton onClick={() => { handleNavigate(navigation.path)}}>
                <ListItemIcon>
                  <Icon>{navigation.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={navigation.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </DrawerMUI>
  )
}
