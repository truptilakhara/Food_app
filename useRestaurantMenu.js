import { useDispatch } from "react-redux";
import { MENU_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { addMenuData } from "../utils/slices/resMenuSlice";

const useRestaurantMenu = (resId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    dispatch(addMenuData(json?.data));
  };
};
export default useRestaurantMenu;
