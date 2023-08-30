import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {;
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
    },
    setQuantity: (state, action) => {
      const existingIdx = state.cartItems.findIndex(item => item._id === action.payload._id);
      state.cartItems[existingIdx].quantity = action.payload.quantity;
    }
  }
});

export const { addToCart, removeFromCart, setQuantity } = itemSlice.actions;

export default itemSlice.reducer;
