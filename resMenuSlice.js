import { createSlice } from "@reduxjs/toolkit";

const restaurantMenuSlice = createSlice({
  name: "menuinfo",
  initialState: {
    menuData: null,
  },
  reducers: {
    addMenuData: (state, action) => {
      state.menuData = action.payload;
    },
  },
});

export const { addMenuData } = restaurantMenuSlice.actions;
export default restaurantMenuSlice.reducer;
