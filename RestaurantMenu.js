import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestauarantHeaderInfo from "./RestauaranHeaderInfo";
import { useSelector } from "react-redux";
import RestaurantOfferInfo from "./RestaurantOfferInfo";
import RestaurantMenuItems from "./RestaurantMenuItems";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  useRestaurantMenu(resId);
  const handleRestaurantCategoryClick = (index) => {
    if (showIndex === index) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };
  const resMenuData = useSelector((store) => store.menuinfo.menuData);
  const [showIndex, setShowIndex] = useState(null);
  const cardDetails =
    resMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (res) =>
        res.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resMenuData === null ? (
    <ShimmerUi></ShimmerUi>
  ) : (
    <div className="flex justify-center mt-20  ">
      <div className="  w-[1000px]  ">
        <RestauarantHeaderInfo
          menuHeaderDetails={resMenuData?.cards[2]?.card?.card?.info}
        />
        <RestaurantOfferInfo
          menuOfferDetails={
            resMenuData?.cards[3]?.card?.card?.gridElements?.infoWithStyle
              ?.offers
          }
        />
        <div className="bg-gray-100 border border-white mt-5">
          {cardDetails.map((details, index) => (
            <RestaurantMenuItems
              menuItemsDetails={details}
              key={details.card.card.titles}
              showItems={index === showIndex}
              setShowItem={() => handleRestaurantCategoryClick(index)}
            ></RestaurantMenuItems>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
