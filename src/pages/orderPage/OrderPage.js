import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrder } from 'redux/actions/user';
import { useParams } from 'react-router-dom';
import { getOneOrder } from 'redux/actions/orders';
import { useStyles } from './OrderPageStyle';
import { OrderList } from './components/orderList/orderList';
import { SelectedOrder } from './components/selectedOrder/selectedOrder';

export const OrderPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const userOrdersArr = useSelector((state) => state.usersReducer.orders.allOrders);
  const orderInfo = useSelector((state) => state.ordersReducer.order);
  const [orderError, setOrderError] = useState(false);
  const [orderInfoError, setOrderInfoError] = useState(false);
  useEffect(() => {
    getOrders();
  }, []);
  async function getOrders() {
    try {
      await dispatch(getUserOrder(id));
    } catch (e) {
      setOrderError(true);
    }
  }
  const handleOrderClick = async (id, filmId) => {
    try {
      await dispatch(getOneOrder(id, filmId));
    } catch (e) {
      setOrderInfoError(true);
    }
  };
  return (
    <section className={classes.orderContainer}>
      <Box sx={{
        width: '65%', display: 'flex', justifyContent: 'flex-start', mb: 3,
      }}
      >
        <Typography variant="customTitleH2">My Account</Typography>
      </Box>
      <Box sx={{
        width: '65%', backgroundColor: 'common.white', boxShadow: '1', borderRadius: '8px', display: 'flex', justifyContent: 'space-between',
      }}
      >
        <Box sx={{
          display: 'flex', flexDirection: 'column', mb: 3, ml: 3, mt: 3,
        }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', mb: 6 }}>
            <Typography variant="cardTitle" sx={{ fontWeight: 500 }}>{`Hello, ${userOrdersArr ? userOrdersArr.username : 'invalid User'}`}</Typography>
            <Typography variant="body2" color="text.secondary">{userOrdersArr ? userOrdersArr.email : 'invalid email'}</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="bodyLato3" sx={{ mb: 2 }}>My orders history</Typography>
            {userOrdersArr && !orderError ? userOrdersArr.orders && userOrdersArr.orders.map((order) => (
              <OrderList
                title={order.filmTitle}
                cinemaName={order.cinemaName}
                placeArr={order.placeArr}
                time={order.time}
                city={order.city}
                imgSrc={order.imgSrc}
                amount={order.amount}
                id={order._id}
                key={order._id}
                filmId={order.filmId}
                handleOrderClick={handleOrderClick}
              />
            )) : (
              <Box sx={{ width: '500px', height: '300px' }}>
                <Typography variant="cardTitle" color="text.secondary">You dont have orders</Typography>
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={{
          display: 'flex', flexDirection: 'column', mb: 3, mr: 3,
        }}
        >
          <Box sx={{ mb: 3, mt: 3 }}>
            <Typography variant="cardTitle" sx={{ fontWeight: 500 }}>Selected Order</Typography>
          </Box>
          {orderInfo.length && !orderInfoError ? orderInfo.map((order) => (
            <SelectedOrder
              imgSrc={order.imgSrc}
              title={order.filmTitle}
              cinemaName={order.cinemaName}
              city={order.city}
              time={order.time}
              placeArr={order.placeArr}
              foodArr={order.foodArr}
              amount={order.amount}
              key={order._id}
            />
          ))
            : (
              <Box sx={{
                minHeight: '500px', minWidth: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '1',
              }}
              >
                <Typography variant="cardTitle" color="text.secondary">Please select the order</Typography>
              </Box>
            )}
        </Box>
      </Box>
    </section>
  );
};
