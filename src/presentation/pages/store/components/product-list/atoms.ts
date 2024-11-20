import { ProductType } from '@/domain/models'
import { atom } from 'recoil'

export const productsFiltersState = atom({
  key: 'productsFiltersState',
  default: {
    type: ProductType.ADESIVO
  }
})
