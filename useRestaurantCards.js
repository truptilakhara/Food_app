import React, { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addRestaurantData } from "../utils/slices/restaurantsDataSlice";
const useRestaurantCards = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getRestaurantCardData();
  }, []);
  const getRestaurantCardData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    console.log(data);
    const json = await data.json();
    const resData = json?.data;
    console.log(resData);
    dispatch(addRestaurantData(resData));
  };
};

export default useRestaurantCards;
