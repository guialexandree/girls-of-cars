import { ProductModel } from '@/domain/models'
import { atom } from 'recoil'
export * from './product-list/atoms'

export const shoppingCartState = atom({
  key: 'shoppingCartState',
  default: [] as Array<ProductModel & { amount: number }>
})
