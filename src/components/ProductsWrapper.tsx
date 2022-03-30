import Grid from '@mui/material/Grid';
import React from 'react';
import {FC} from 'react';
import StoreProduct from './StoreProduct';
import data from '../data/product';




const ProductsWrapper: FC<any> = ({handleAddToCart, cart}) => {
  return (
    <Grid container sx={{mt: '50px'}} justifyContent="center">
      <Grid container item xs={10} spacing={4}>
        {data.products.map((product: any) => {
          return (
          <Grid item xs key={product.name}>
            <StoreProduct
              name={product.name}
              price={product.price}
              handleAddToCart={handleAddToCart}
              cart={cart}
            />
          </Grid>
        )})}
      </Grid>
    </Grid>
  );
};

export default ProductsWrapper;
