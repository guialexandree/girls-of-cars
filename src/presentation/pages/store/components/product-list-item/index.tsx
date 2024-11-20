import { useSetRecoilState } from 'recoil'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid2, Icon, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { ProductModel } from '@/domain/models'
import * as State from '@/presentation/pages/store/components/atoms'

type ProductListItemProps = {
  product: ProductModel
  amount: number
}

export const ProductListItem: React.FC<ProductListItemProps> = (props) => {
  const setShoppingCart = useSetRecoilState(State.shoppingCartState)
  const handleAddProduct = (): void => {

    setShoppingCart((currentState) => {
      const hasProduct = currentState.find(product => product.id === props.product.id)
      if (hasProduct) {
        hasProduct.amount += 1
        console.log(hasProduct)
        const products = currentState.filter(product => product.id !== props.product.id)
        return [...products, hasProduct]
      } else {
        return [...currentState, {
          ...props.product,
          amount: 1
        }]
      }
    })
  }

  return (
    <Grid2 size={{ xs: 12, sm: 4 }}>
      <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
        <CardActionArea>
          <CardMedia component="img" height="160" image={props.product.imageSrc} alt={props.product.title} />
          <CardContent sx={{ paddingBottom: 1 }}>
            <Typography gutterBottom variant="h5" component="div" mb={0}>
              R$ {props.product.price}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {props.product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'flex-end', mb: 1, px: 2 }}>
          {props.amount
            ?  <OutlinedInput
                  id="outlined-adornment-password"
                  type='text'
                  fullWidth
                  size='small'
                  value={`${props.amount} no seu carrinho`}
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label='Adicionar mais um item'
                        onClick={handleAddProduct}
                        onMouseDown={handleAddProduct}
                        onMouseUp={handleAddProduct}
                        edge="start"
                      >
                        <Icon color='primary'>remove</Icon>
                      </IconButton>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label='Adicionar mais um item'
                        onClick={handleAddProduct}
                        onMouseDown={handleAddProduct}
                        onMouseUp={handleAddProduct}
                        edge="end"
                      >
                        <Icon  color='primary'>add</Icon>
                      </IconButton>
                    </InputAdornment>
                  }
                />
            : <Button onClick={handleAddProduct} variant="outlined" size="small" color="primary" endIcon={<Icon>shopping_cart</Icon>}>
              Adicionar ao carrinho
            </Button>
          }
        </CardActions>
      </Card>
    </Grid2>
  )
}
