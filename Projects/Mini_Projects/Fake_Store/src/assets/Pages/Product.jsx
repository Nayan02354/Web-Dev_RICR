import React from "react";

const Product = () => {
  return (
    <div className="p-10 grid grid-cols-4 gap-5">
      <div className="w-75 border rounded-2xl h-100 ">
        <div className="w-full h-40 ">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt=""
            className="w-full h-full  object-contain "
          />
        </div>
        <div className="my-2 text-2xl flex flex-col">
          <p className="font-bold text-xl">Artic Fox Laptop Backpack</p>
          <p className="text-2xl text-blue-400">Men's Clothing</p>
          <p>100000 INR</p>
          <span>4.8</span>
        </div>
        <button className="bg-orange-400 hover:bg-amber-400 rounded-full px-4 py-2 w-70 m-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
