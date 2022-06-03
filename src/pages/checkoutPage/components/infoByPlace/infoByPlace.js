import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

export const InfoByPlace = () => (
  <Box sx={{
    width: { xs: '100%', sm: '80%', md: '65%' }, mt: 3, ml: 8,
  }}
  >
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{
            width: '25px', height: '25px', backgroundColor: 'grey.300', borderRadius: '4px', mr: 1,
          }}
          />
          <Typography variant="body2">Disabled</Typography>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{
            width: '25px', height: '25px', backgroundColor: 'place.selected', borderRadius: '4px', mr: 1,
          }}
          />
          <Typography variant="body2">Selected</Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{
            width: '25px', height: '25px', backgroundColor: 'grey.500', borderRadius: '4px', mr: 1,
          }}
          />
          <Typography variant="body2">Regular</Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{
            width: '25px', height: '25px', backgroundColor: 'place.vip', borderRadius: '4px', mr: 1,
          }}
          />
          <Typography variant="body2">VIP</Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{
            width: '25px', height: '25px', backgroundColor: 'place.couples', borderRadius: '4px', mr: 1,
          }}
          />
          <Typography variant="body2">For couples</Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
