import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartData = useSelector((store) => store.cart.cartItems);
  const [btnName, setbtnName] = useState("log in");

  return (
    <div className="flex justify-between items-start h-[90px] w-full  bg-white shadow-md">
      <div className="logo">
        <Link to={"/"}>
          <div>Namaste</div>
        </Link>
      </div>
      <div>
        <ul className="flex justify-evenly items-center mt-[22px] mr-[100px] text-[#1c1b1b] text-xl">
          <Link to={"/"}>
            <li className="p-[7px]">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="p-[7px]">About Us</li>
          </Link>
          <Link to={"/contactus"}>
            <li className="p-[7px]">Trupti</li>
          </Link>
          <Link to={"/cart"}>
            <li className="p-[7px]">Cart-{cartData.length}</li>
          </Link>

          <li>
            <button
              onClick={() => {
                btnName === "log in"
                  ? setbtnName("logout")
                  : setbtnName("log in");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
