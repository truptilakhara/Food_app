import RestaurantCards from "./RestaurantCards";
import getRestaurantCards from "../hooks/useRestaurantCards";
import { WithFastDeliveryLabel } from "./RestaurantCards";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";
import { useState } from "react";
import useRestaurantCards from "../hooks/useRestaurantCards";
const Body = () => {
  useRestaurantCards();
  const restaurantsData = useSelector((store) => store?.restaurantData?.data);
  const cardData =
    restaurantsData?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const onlineStatus = useOnlineStatus();
  const FastDelivery = WithFastDeliveryLabel(RestaurantCards);

  if (onlineStatus === false) {
    return <div>You are offline</div>;
  } else {
    return cardData === undefined ? (
      <div>Loading</div>
    ) : (
      <div className="flex flex-wrap justify-center items-center mt-11 ">
        {cardData.map((resCard) => (
          <Link to={"/restaurant/" + resCard?.info?.id} key={resCard?.info?.id}>
            {resCard?.info?.sla?.deliveryTime <= 20 ? (
              <FastDelivery resData={resCard?.info}></FastDelivery>
            ) : (
              <RestaurantCards resData={resCard?.info} />
            )}
          </Link>
        ))}
      </div>
    );
  }
};

export default Body;
