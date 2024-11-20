import React from 'react'
import { Box, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { ProductType } from '@/domain/models'
import { Header, ProductList } from '@/presentation/pages/store/components'
import { AppBar } from '@/presentation/components'
import { useRecoilState } from 'recoil'
import * as State from '@/presentation/pages/store/components/atoms'

interface StorePageProps {
  open?: boolean
}

const StorePage: React.FC<StorePageProps> = () => {
  const [filters, setFilters] = useRecoilState(State.productsFiltersState)
  return (
    <Box component='section'>
      <AppBar />
      <Header />

      <Stack component='section' justifyContent='center' alignItems='center' padding={4}>
        <ToggleButtonGroup
          exclusive
          color="primary"
          value={filters.type}
          onChange={(_, type) => { setFilters(currentState => ({ ...currentState, type })) }}
          aria-label="Platform"
        >
          <ToggleButton value={ProductType.ADESIVO}>Adesivos</ToggleButton>
          <ToggleButton value={ProductType.TESTEIRA}>Testeira</ToggleButton>
          <ToggleButton value={ProductType.CHAVEIRO}>Chaveiros</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <ProductList />
    </Box>
  )
}

export default StorePage
