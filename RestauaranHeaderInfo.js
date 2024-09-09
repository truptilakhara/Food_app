import React from "react";

const RestauarantHeaderInfo = (props) => {
  const {
    name,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    sla,
    feeDetails,
    totalRatingsString,
  } = props.menuHeaderDetails;
  return (
    <div>
      <h1 className="font-bold text-4xl">{name}</h1>
      <div className="w-full bg-gray-400 pl-6 pb-6 mt-11  rounded-[40px] bg-gradient-to-b from-[#fcfcfd] to-[#dedee6] ">
        <div className="border border-[#d9dadb] w-[98%] h-[220px] bg-white   rounded-[39px] ">
          <ul className="pl-7 pt-7 border-b-2 pb-3">
            <li className="font-semibold text-2xl">
              ⭐{avgRatingString} ({totalRatingsString}) • {costForTwoMessage}
            </li>
            <li className="pt-[9px] pl-2 text-xl font-semibold text-orange-600">
              {cuisines?.length === 1 ? cuisines : cuisines?.join(", ")}
            </li>
            <li className="pt-3 pl-3 font-semibold text-lg">
              {sla?.slaString}
            </li>
          </ul>

          <div className="pl-7 pt-3 flex">
            <img
              alt="res-card"
              className="h-[30px] pt-1 "
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
            ></img>
            <div className="pl-2 pt-[2px] text-lg text-[#676a6d]">
              {sla?.lastMileTravel} kms | ₹{feeDetails?.amount / 100} Delivery
              fee will apply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestauarantHeaderInfo;
