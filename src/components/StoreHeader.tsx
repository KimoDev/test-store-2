import Grid from '@mui/material/Grid';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Typography from '@mui/material/Typography';
import {FC} from 'react';
import React from 'react';

interface IStoreHeaderProps {
  toggleSidebar: () => void;
  storeTitle: string;
}
const StoreHeader: FC<IStoreHeaderProps> = ({toggleSidebar, storeTitle}) => {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      sx={{width: '100%',  height: '100px', backgroundColor: '#000'}}
    >
      <Grid container item xs={10} justifyContent="space-between">
        <Grid container item xs={4} alignItems="center">
          <Typography variant="h6" color="#fff">
            {storeTitle}
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={2}
          alignItems="center"
          justifyContent="flex-end"
        >
          <ShoppingBagIcon sx={{color: '#fff'}} onClick={toggleSidebar} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StoreHeader;
