import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

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
        Swal.fire({
          icon: "success",
          title: "장바구니에 추가되었습니다.",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "장바구니에 이미 추가되었습니다.",
          showConfirmButton: false,
          timer: 1000,
        });
        // state.data[idx].number = state.data[idx].number + 1;
      }
    },
    DEL_CART: (state, action) => {
      const idx = state.data.findIndex((p) => p.id === action.payload);
      state.data.splice(idx, 1);
    },
  },
});

export const { ADD_CART, DEL_CART } = cartSlice.actions;

export const CartActions = {};

export default cartSlice.reducer;
