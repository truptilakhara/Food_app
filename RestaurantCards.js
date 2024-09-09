import React from "react";

import { CDN_URL } from "../utils/constant";

const RestaurantCards = (props) => {
  const {
    name,
    cloudinaryImageId,
    sla,
    costForTwo,
    cuisines,
    avgRatingString,
  } = props.resData;
  
  return (
    <div className="h-[490px] w-[350] border my-6 mx-3  shadow-md">
      <img
        alt="res-photo"
        src={CDN_URL + cloudinaryImageId}
        className="h-[300px] w-full"
      ></img>
      <div className="pl-4 pt-3">
        <ul>
          <li className="font-bold text-xl">{name}</li>
          <li className="text-lg">{cuisines?.join(", ")}</li>
          <li className="text-lg">{costForTwo}</li>
          <li>
            <span className="text-lg">{avgRatingString}</span>
            <span>⭐</span>
          </li>
          <li className="text-lg pt-1">{sla?.slaString}</li>
        </ul>
      </div>
    </div>
  );
};

// Higher Order component
export const WithFastDeliveryLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <div>
        <label>Fast deliVery</label>
        <RestaurantCards {...props}></RestaurantCards>
      </div>
    );
  };
};
export default RestaurantCards;
