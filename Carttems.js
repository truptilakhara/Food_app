import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addCartItems } from "../utils/slices/cartSlice";
const CartItems = ({ items }) => {
  const { name, description, imageId, id, price, ratings, defaultPrice } =
    items.card.info;
  const dispatch = useDispatch();
  const handleOnclickAddItems = (items) => {
    dispatch(addCartItems(items));
  };
  return (
    <div key={id} className="flex justify-between ">
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
        <li className="pt-2 text-xl text-[#757b7a]">{description}</li>
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

export default CartItems;
