import { useDispatch, useSelector } from "react-redux";
import CartItems from "./Carttems";
import { removeCartItems } from "../utils/slices/cartSlice";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const handleCartItems = () => {
    dispatch(removeCartItems());
  };
  return (
    <div className="w-full flex ">
      <div className="w-1/3 "></div>
      <div className="w-1/3 mt-[100px] ">
        <h1 className="text-center text-3xl font-bold">Cart</h1>
        <div className="text-right font-bold text-lg" onClick={handleCartItems}>
          Remove cart
        </div>
        {cartData.length === 0 ? (
          <div className="text-center mt-[50px]">
            <div className="font-semibold text-2xl">Your cart is empty.</div>
            <div className="text-xl">
              You can go to home page to view more restaurants
            </div>
          </div>
        ) : (
          cartData.map((data) => (
            <CartItems items={data} key={data.card.info.id}></CartItems>
          ))
        )}
      </div>
      <div className="w-1/3"></div>
    </div>
  );
};
export default Cart;
