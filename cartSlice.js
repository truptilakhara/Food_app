const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCartItems: (state) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addCartItems, removeCartItems } = cartSlice.actions;
export default cartSlice.reducer;
