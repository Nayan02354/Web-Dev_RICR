import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-between p-3 ">
        <FaStore className="text-3xl" />

        <div className="flex gap-5 ">
          <Link to={"/"} className="text-white hover:underline">
            Home
          </Link>
          <Link to={"/about"} className="text-white hover:underline">
            About
          </Link>
          <Link to={"/product"} className="text-white hover:underline">
            Product
          </Link>
          <Link to={"/contact"} className="text-white hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
