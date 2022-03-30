import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React, {FC} from 'react'



const StoreProduct: FC<any> = ({name, price, handleAddToCart, cart}) => {
  
  const handleAddProductToCart = () => {
    if(cart?.lineItems) {
      handleAddToCart({lineItems: [...cart.lineItems, {name, price, quantity: 1}]})
    } else {
      handleAddToCart({lineItems: [{name, price, quantity: 1}]})
    }
  }

  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    spacing={1}
  >
    <Grid container item xs={6} sx={{position: 'relative'}} justifyContent="center">
      <img
        alt="product image"
        src={
          'https://s1.qwant.com/thumbr/0x380/8/7/0811d1adff0bc2ca36f9253438ae3bbb22507db7078b86fdf951d9098aadbf/placeholder-images-product-1_large.png?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0533%2F2089%2Ffiles%2Fplaceholder-images-product-1_large.png%3Fv%3D1530129292&q=0&b=1&p=0&a=0'
        }
      />
    </Grid>
    <Grid item xs={1}>
      <Typography variant="body1">{name}</Typography>
    </Grid>
    <Grid item xs={1}>
      <Typography variant="body1">{price?.amount}</Typography>
    </Grid>

    <Grid container item xs={2} spacing={1}>
      <Grid item xs={12}>
        <Button variant="outlined" fullWidth onClick={handleAddProductToCart}>
          Add to cart
        </Button>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default StoreProduct;
