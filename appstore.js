import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "../utils/slices/restaurantsDataSlice";
import restaurantMenuReducer from "../utils/slices/resMenuSlice";
import cartItemsReducer from "../utils/slices/cartSlice";
const appStore = configureStore({
  reducer: {
    restaurantData: restaurantReducer,
    menuinfo: restaurantMenuReducer,
    cart: cartItemsReducer,
  },
});
export default appStore;
