export enum ProductType {
  ADESIVO = 'adesivo',
  TESTEIRA = 'testeira',
  CHAVEIRO = 'chaveiro'
}

export type ProductModel = {
  id: number
  title: string
  price: number
  description: string
  installmentLabel: string
  imageSrc: string
  types: ProductType[]
}
