import React from "react";
import OfferCard from "./OfferCard";

const RestaurantOfferInfo = (props) => {
  const offerData = props.menuOfferDetails;

  return (
    <div className="mt-[50px] ">
      <div className="text-3xl font-bold">Deals For You</div>
      <div className="flex w-[1000px] overflow-auto no-scrollbar">
        {offerData.map((data) => (
          <OfferCard offerInfo={data} key={data?.info?.offerIds[0]}></OfferCard>
        ))}
      </div>
    </div>
  );
};

export default RestaurantOfferInfo;
