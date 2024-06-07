import React, { useEffect, useState } from "react";
import { Product, Spinner } from "../components";
const HomePage = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [itemsData, setItemsData] = useState([]);
  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setItemsData(result);
    } catch (error) {
      console.log(" Error fetching product details :: ", error);
      setItemsData([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <div>
      <div className=" mt-10 h-full flex justify-center mx-auto">
        {loading ? (
          <Spinner />
        ) : itemsData.length > 0 ? (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-5 max-w-6xl min-h-[80vh] p-2 mx-auto">
            {itemsData.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p>No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
