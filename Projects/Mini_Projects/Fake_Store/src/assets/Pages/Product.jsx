import React from "react";

const Product = () => {
  return (
    <div className="p-10 grid grid-cols-4">
      <div className="w-75 border rounded h-100 ">
        <div className="w-full h-40 ">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt=""
            width={150}
            className="mx-16"
          />
        </div>

        <span>12</span>
        <p>12</p>
        <button className="bg-orange-400 rounded-full px-4 py-2 m">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
