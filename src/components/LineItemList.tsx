import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import {FC} from 'react';
import {convertMoney} from '../utils/converters';


const ItemContainer: FC<any> = ({item}) => {
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      spacing={2}
      sx={{
        backgroundColor: '#fff',
        borderRadius: '7px',
        position: 'relative',
        padding: '5%',
        marginBottom: '7%',
        minHeight: '100px',
      }}
    >
      <Grid container item xs={3}>
        <img
          alt="item image"
          src={
            'https://s1.qwant.com/thumbr/0x380/8/7/0811d1adff0bc2ca36f9253438ae3bbb22507db7078b86fdf951d9098aadbf/placeholder-images-product-1_large.png?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0533%2F2089%2Ffiles%2Fplaceholder-images-product-1_large.png%3Fv%3D1530129292&q=0&b=1&p=0&a=0'
          }
          width={75}
          height={75}
        />
      </Grid>
      <Grid container item xs={9}>
        <Grid container item xs={5} direction="column" alignItems="center">
          <Typography variant="body2">{item.name}</Typography>
        </Grid>
        <Grid container item xs justifyContent="center" alignItems="center">
          <Typography variant="caption" sx={{fontWeight: 500}}>
            x{item.quantity}
          </Typography>
        </Grid>
        <Grid container item xs={4} direction="column">
          <Grid container item xs alignItems={'center'}>
            <Typography variant="body2" sx={{fontWeight: 500}}>
              {convertMoney(item.price)}
            </Typography>
          </Grid>
          {item.quantity > 1 ? (
            <Grid item xs>
              <Typography variant="caption" sx={{fontWeight: 300}}>
                {convertMoney({
                  amount: item.price.amount / item.quantity,
                  currency: item.price.currency,
                })}
                each
              </Typography>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

const LineItemList: FC<any> = ({items}) => (
  <>
    {items.map((item: any) => (
      <Grid item xs={12} key={item.name}>
        <ItemContainer item={item} />
      </Grid>
    ))}
  </>
);

export default LineItemList;
