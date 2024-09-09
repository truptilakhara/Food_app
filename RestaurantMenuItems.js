import ItemsCards from "./ItemCards";
import { useState } from "react";

const RestaurantMenuItems = ({ menuItemsDetails, showItems, setShowItem }) => {
  const { title, itemCards } = menuItemsDetails.card.card;
  const handleItems = () => {
    setShowItem();
  };
  return (
    <div className=" bg-white" key={title}>
      <div
        className="text-2xl mt-8 py-5 ml-4 font-bold flex justify-between cursor-pointer"
        onClick={handleItems}
      >
        <span>
          {title} ({itemCards.length})
        </span>
        <span className="pr-4">🔽</span>
      </div>

      {showItems && (
        <div>
          {itemCards.map((item) => (
            <ItemsCards items={item}></ItemsCards>
          ))}
        </div>
      )}
    </div>
  );
};
export default RestaurantMenuItems;
