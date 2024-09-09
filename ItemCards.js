import { useDispatch } from "react-redux";
import { addCartItems } from "../utils/slices/cartSlice.js";
import { CDN_URL } from "../utils/constant";
import { useState } from "react";

const ItemsCards = ({ items }) => {
  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { name, description, imageId, id, price, ratings, defaultPrice } =
    items.card.info;

  const handleOnclickAddItems = (items) => {
    dispatch(addCartItems(items));
  };

  const eclipseText = (text = "") => {
    const requiredLen = 97;
    if (text.length > requiredLen) {
      return text.slice(0, requiredLen) + "...";
    }
    return text;
  };
  return (
    <div key={id} className="border-b-2  ml-4 flex justify-between">
      <ul className="flex flex-col justify-center">
        <li className="text-2xl font-bold text-[#424449]">{name}</li>
        <li className="text-xl  font-medium">
          ₹ {price ? price / 100 : defaultPrice / 100}
        </li>
        {ratings.aggregatedRating.rating && (
          <li className="pt-3">
            <span className="text-yellow-500 text-lg font-semibold">
              ⭐{ratings.aggregatedRating.rating}
            </span>
            <span className="text-lg font-medium">
              ({ratings.aggregatedRating.ratingCountV2})
            </span>
          </li>
        )}
        <li className="pt-2 text-xl text-[#757b7a]">
          {showFullDescription ? description : eclipseText(description)}
          &nbsp;
          <a
            className="text-orange-600 cursor-pointer"
            onClick={() => setShowFullDescription((prev) => !prev)}
          >
            {showFullDescription ? "less" : "more"}
          </a>
        </li>
      </ul>
      <div className="my-7 min-w-[210px]">
        {imageId && (
          <img
            src={CDN_URL + imageId}
            className=" h-[200px] rounded-2xl"
            alt="menu-image"
          ></img>
        )}
        <button
          className=" ml-14 -mt-[100px] py-2 px-4 rounded-md bg-white text-green-700 font-bold text-lg shadow"
          onClick={() => handleOnclickAddItems(items)}
        >
          ADD+
        </button>
      </div>
    </div>
  );
};
export default ItemsCards;
