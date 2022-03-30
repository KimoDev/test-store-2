import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import StoreProduct from './components/StoreProduct';
import StoreHeader from './components/StoreHeader';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import ProductsWrapper from './components/ProductsWrapper';
import CartSidebar from './components/CartSidebar';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.handsin.co.uk">
        HandsIn
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  const [isDrawerOpen, setDrawer] = useState(false);
  const [cart, setCart] = useState();
  return (
    <>
          <Grid container direction="column">
            <Grid item>
              <StoreHeader
                storeTitle={'Handsin test store'}
                toggleSidebar={() => setDrawer(!isDrawerOpen)}
              />
            </Grid>
            <Grid container item xs>
              <ProductsWrapper  cart={cart} handleAddToCart={setCart}/>
            </Grid>
            <Grid item xs sx={{mt: '50px'}}>
              <Copyright />
            </Grid>
          </Grid>
        <Drawer
          variant="temporary"
          anchor="right"
          sx={{
            display: {xs: 'block'},

            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '360px',
              backgroundColor: '#F5F5F5',
              height: '100%',
              border: 'none',
            },
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          open={isDrawerOpen}
          onClose={() => setDrawer(false)}
        >
          <CartSidebar cart={cart}/>
        </Drawer>
      </>

        


        // 

  );
}
