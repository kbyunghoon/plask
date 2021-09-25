import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    ADD_CART: (state, action) => {
      const idx = state.data.findIndex((p) => p.id === action.payload.id);
      if (idx === -1) {
        state.data.push(action.payload);
      } else {
        state.data[idx].number = state.data[idx].number + 1;
      }
    },
    DEL_CART: (state, action) => {
      const idx = state.data.findIndex((p) => p.id === action.payload.id);
      state.cart.splice(idx, 1);
    },
  },
});

export const { ADD_CART, DEL_CART } = cartSlice.actions;

export const CartActions = {
};

export default cartSlice.reducer;
