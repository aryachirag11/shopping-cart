import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../features/cart/cartSlice";
import toast from "react-hot-toast";

import "react-toastify/dist/ReactToastify.css";

const Product = ({ item }) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem(item));
    toast.success("Item added to cart");
  };
  const removeFromCart = () => {
    dispatch(removeItem(item.id));
    toast.error("Item removed from cart");
  };
  return (
    <>
      <div className="flex flex-col gap-3 mt-5 ml-5 justify-center items-center  border shadow-lg  mb-10 shadow-gray-300 rounded-xl p-4 group hover:scale-110 transition duration-200 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
        <div>
          <p className="font-semibold text-gray-700 text-lg text-left truncate w-40 mt-1">{`${item.title.substring(
            0,
            15
          )}...`}</p>
        </div>
        <div className="w-40 text-normal text-[10px] text-left text-gray-400">
          <p>{`${item.description.substring(0, 100)}...`}</p>
        </div>
        <div className="h-[180px]">
          <img
            src={item.image}
            width={150}
            height={180}
            alt=""
            className="mx-auto my-auto h-full w-full"
          />
        </div>
        <div className="flex justify-between gap-12 items-center w-full mt-5">
          <p className="text-green-600 font-semibold">${item.price}</p>
          {items.some((product) => product.id === item.id) ? (
            <button
              className="text-gray-700 border-2 rounded-full border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 rounded-full border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
