import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import {convertMoney} from '../utils/converters';
import LineItemList from './LineItemList';




const CartSidebar: FC<any> = ({cart}) => {
  
  const handleCheckout = async () => {
    const res: any = await axios.post('https://sandbox.handsin.co.uk/v1/checkouts', {
      "lineItemParams": [
        {
          "item": {
            "sku": "random-sku",
            "name": "product 1",
            "amountMoney": {
              "amount": 1000,
              "currency": "GBP"
            },
            "imageUrls": ["https://s1.qwant.com/thumbr/0x380/8/7/0811d1adff0bc2ca36f9253438ae3bbb22507db7078b86fdf951d9098aadbf/placeholder-images-product-1_large.png?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0533%2F2089%2Ffiles%2Fplaceholder-images-product-1_large.png%3Fv%3D1530129292&q=0&b=1&p=0&a=0"],
            "description": "test product"
          },
          "quantity": 1
        }
      ],
      "expirationDate": "2022-03-30T15:30:00.000Z",
      "checkoutPageOptions": {
        "captureMethod": "PAYMENT",
        "successUrl": "https://www.randomurl.com",
        "cancelUrl": "https://www.randomurl.com",
        "paymentMethods": [
          "CARD"
        ]
      }
    },
    {headers: {
      'content-type': 'application/json',
      'x-api-key': 'sk_sand_94ac81fccf8f4569b13accf83bd44de7_d61357fcbde6403787c04847bee31c6f',
    }})
    console.log(res.data.url)
    window.location = res.data.url;
  }

  return (
    <Grid container direction="column" sx={{height: '100%', padding: '20px'}}>
      <Grid container item xs={9} sx={{overflowY: 'auto'}} direction="column">
        <Grid item xs={2}>
          <Typography variant="h6">Items</Typography>
        </Grid>
        {cart?.lineItems.length > 0 ? (
          <Grid item xs>
            <LineItemList items={cart.lineItems} />
          </Grid>
        ) : null}
      </Grid>
      <Grid container item xs={3} direction="column">
        <Grid container item xs>
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{fontWeight: 500}}>
              subtotal
            </Typography>
          </Grid> */}
          {/* <Grid item xs={6}>
            <Typography
              variant="subtitle1"
              sx={{fontWeight: 500}}
              align="right"
            >
              {cart
                ? convertMoney({amount: cart.totalAmount, currency})
                : '£0.00'}
            </Typography>
          </Grid> */}
        </Grid>

        <Grid container item xs>
          {/* <Grid item xs={6}>
            <Typography variant="h6" sx={{fontWeight: 500}}>
              Total
            </Typography>
          </Grid> */}
          {/* <Grid item xs={6}> */}
            {/* <Typography variant="h6" sx={{fontWeight: 500}} align="right"> */}
              {/* {cart
                ? convertMoney({amount: cart.subTotalAmount, currency})
                : '£0.00'} */}
            {/* </Typography> */}
          {/* </Grid> */}
        </Grid>
        <Grid container item xs spacing={2}>
          {/* <Grid item xs={12}>
            <Button variant="outlined" fullWidth>
              Checkout
            </Button>
          </Grid> */}
          <Grid item xs={12}>
            <Button variant="contained" fullWidth onClick={handleCheckout}>
              Checkout with HandsIn
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartSidebar;
