const { createSlice } = require("@reduxjs/toolkit");

const restaurantsDataSlice = createSlice({
  name: "restaurantData",
  initialState: {
    data: null,
  },
  reducers: {
    addRestaurantData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addRestaurantData } = restaurantsDataSlice.actions;
export default restaurantsDataSlice.reducer;
