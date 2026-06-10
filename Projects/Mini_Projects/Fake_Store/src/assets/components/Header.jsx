import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-between p-3 ">
        <div>
          <h4>Fake Store</h4>
        </div>
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
