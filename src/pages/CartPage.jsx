import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartItem } from "../components";

const CartPage = () => {
  const items = useSelector((state) => state.items);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(items.reduce((acc, curr) => acc + curr.price, 0));
  }, [items]);
  return (
    <>
      <div className="flex justify-center mx-auto">
        {items.length > 0 ? (
          <div className="flex flex-row gap-x-5 p-10 max-w-6xl">
            <div className="w-7/12 flex flex-col space-y-10 ">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="pl-20 w-6/12 flex flex-col justify-between h-full py-10">
              <div className="">
                <h2 className="text-xl font-bold uppercase text-green-700">
                  Your Cart
                </h2>
                <p className="text-5xl font-bold uppercase text-green-600 pt-1">
                  Summary
                </p>
                <p className="pt-4">
                  <span className="text-lg font-semibold">
                    Total Items : {items.length}
                  </span>
                </p>
              </div>
              <div className="">
                <p className="text-lg font-semibold">
                  Total Amount
                  <span className="font-bold">{` : $${totalAmount.toFixed(
                    2
                  )}`}</span>
                </p>
                <button className="bg-green-500 text-white font-bold text-lg w-11/12 py-3 mt-5 border-2 border-green-v rounded-xl transotion duration-200 hover:bg-white hover:text-green-500">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen flex flex-col items-center justify-center space-y-5">
            <h1 className="font-bold text-gray-700">Your cart is empty!</h1>
            <NavLink to={"/"}>
              <button className="px-10 py-3  font-semibold border text-white rounded-xl bg-green-600 hover:bg-white hover:text-green-600 border-green-600 transition duration-200">
                Shop Now
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
