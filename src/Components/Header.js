import React from "react";
import { LOGO_URL } from "../Utilis/Constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilis/useOnlineStatus";
import UserContext from "../Utilis/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-green-200">
      <div className="logo-container">
        <img alt="" className="w-16 md:w-32 lg:w-28" src={LOGO_URL} />
      </div>

      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={`/about`}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to={`/cart`}>Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">
            <Link to={`/contact`}>contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={`/signupform`}>Signupform</Link>
          </li>
         
          <button
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
