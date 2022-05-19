import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { array, func, number } from 'prop-types';

export const CinemaHall = ({ columns, rowIndex, handlePlaceClick }) => (
  <Box sx={{
    height: '100%', width: '100%', display: 'flex', justifyContent: 'center', mb: 1,
  }}
  >
    {
        columns.map((column, index) => (column.vip
          ? (
            <Button
              sx={{
                minWidth: '30px', height: '30px', backgroundColor: column.selected ? 'place.selected' : 'place.vip', borderRadius: '4px', mr: 0.8,
              }}
              key={index}
              size="small"
              variant="contained"
              disabled={column.disable}
              onClick={() => handlePlaceClick(column.place - 1, rowIndex)}
            >
              <Typography variant="button" sx={{ color: '#4F4F4F' }}>{column.place}</Typography>
            </Button>
          )
          : (
            <Button
              sx={{
                minWidth: '30px', height: '30px', backgroundColor: column.selected ? 'place.selected' : 'grey.400', borderRadius: '4px', mr: 0.8,
              }}
              key={index}
              size="small"
              variant="contained"
              disabled={column.disable}
              onClick={() => handlePlaceClick(column.place - 1, rowIndex)}
            >
              <Typography variant="button" sx={{ color: '#4F4F4F' }}>{column.place}</Typography>
            </Button>
          )
        ))
    }
  </Box>

);
CinemaHall.propTypes = {
  columns: array,
  rowIndex: number,
  handlePlaceClick: func,
};
