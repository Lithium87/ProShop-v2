import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem ('cartItems')
    ? JSON.parse (localStorage.getItem ('cartItems'))
    : [],
};

export const cartSlice = createSlice ({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find (
        x => x.product === item.product
      );
      if (existingItem) {
        existingItem.qty++;
      } else {
        state.cartItems.push ({...item, qty: 1});
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter (
        x => x.product !== action.payload
      );
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.reducer;
