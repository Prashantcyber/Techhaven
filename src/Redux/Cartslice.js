// Code to manage the cart state using Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { products: [] },
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.products.find((p) => p.id === payload.id);
      item ? item.quantity++ : state.products.push({ ...payload, quantity: 1 });
    },
    removeFromCart: (state, { payload }) => {
      state.products = state.products.filter((p) => p.id !== payload.id);
    },
    clearCart: (state) => {
      state.products = [];
    },
    increaseQuantity: (state, { payload }) => {
      const item = state.products.find((p) => p.id === payload.id);
      if (item) item.quantity++;
    },
    decreaseQuantity: (state, { payload }) => {
      const item = state.products.find((p) => p.id === payload.id);
      if (item) item.quantity > 1 ? item.quantity-- : state.products = state.products.filter((p) => p.id !== item.id);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
