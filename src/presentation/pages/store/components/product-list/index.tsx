import { Grid2, useMediaQuery, useTheme } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { ProductListItem } from '@/presentation/pages/store/components'
import { ProductModel, ProductType } from '@/domain/models'
import * as State from '@/presentation/pages/store/components/atoms'

const products: ProductModel[] = [
  {
    id: 1,
    title: 'Testeira Girls Of Cars',
    description: 'Testeira Girls Of Cars, Adesivo para Parabrisa, Adesivo para vidro',
    imageSrc: '/products/4-adesivo-parabrisa.png',
    installmentLabel: '',
    price: 45,
    types: [ProductType.ADESIVO, ProductType.TESTEIRA]
  },
  {
    id: 2,
    title: 'Testeira Girls Of Cars',
    description: 'Testeira Girls Of Cars, Adesivo para Parabrisa, Adesivo para vidro',
    imageSrc: '/products/5-adesivo-parabrisa.png',
    installmentLabel: '',
    price: 35,
    types: [ProductType.ADESIVO, ProductType.TESTEIRA]
  },
  {
    id: 3,
    title: 'Testeira Girls Of Cars',
    description: 'Testeira Girls Of Cars, Adesivo para Parabrisa, Adesivo para vidro',
    imageSrc: '/products/3-adesivo-holo.png',
    installmentLabel: '',
    price: 12,
    types: [ProductType.TESTEIRA]
  },
  {
    id: 4,
    title: 'Testeira Girls Of Cars',
    description: 'Testeira Girls Of Cars, Adesivo para Parabrisa, Adesivo para vidro',
    imageSrc: '/products/2-adesivo-branco.png',
    installmentLabel: '',
    price: 25,
    types: [ProductType.CHAVEIRO]
  },
]

export const ProductList: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const shoppingCart = useRecoilValue(State.shoppingCartState)

  return (
    <Grid2 container spacing={isMobile ? 2 : 4} px={isMobile ? 2 : 4} pb={8}>
      {products.map(product =>
        <ProductListItem
          key={product.id}
          product={product}
          amount={shoppingCart.find(productCart => productCart.id === product.id)?.amount ?? 0}
        />
      )}
    </Grid2>
  )
}
