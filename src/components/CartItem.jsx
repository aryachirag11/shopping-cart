import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeItem(item.id));
    toast.error("Removed item from cart");
  };
  return (
    <>
      <div className="flex flex-row space-x-5 pb-8 mb-5 border-b-2 border-gray-700 px-5">
        <div className="h-[180px] w-1/3">
          <img src={item.image} width={150} height={200} alt="" />
        </div>
        <div className="flex flex-col gap-y-5 justify-start pl-2 w-2/3">
          <h1 className="font-semibold text-gray-700 text-lg text-left w-50 mt-1">
            {item.title}
          </h1>
          <p className="w-50 text-medium text-sm text-left text-gray-400">{`${item.description.substring(
            0,
            100
          )}...`}</p>
          <div className="flex justify-between items-center mr-2">
            <p className="text-green-600 font-bold">${item.price}</p>
            <button
              className="bg-red-200 w-10 h-10 rounded-full"
              onClick={removeFromCart}
            >
              <MdDelete className="text-red-800 text-center text-lg mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
