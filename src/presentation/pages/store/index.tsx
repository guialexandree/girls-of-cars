import React from 'react'
import { Box } from '@mui/material'
import { Header } from '@/presentation/pages/store/components'
import { AppBar } from '@/presentation/components'

interface StorePageProps {
  open?: boolean
}

const StorePage: React.FC<StorePageProps> = () => {
  return (
    <Box component='section'>
      <AppBar />
      <Header />
    </Box>
  )
}

export default StorePage
