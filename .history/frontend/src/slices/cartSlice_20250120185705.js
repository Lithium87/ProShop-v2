import {createSlice} from '@reduxjs/toolkit';

const initialState = localStorage.getItem ('cart')
  ? JSON.parse (localStorage.getItem ('cart'))
  : {cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal'};

export const cartSlice = createSlice ({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
