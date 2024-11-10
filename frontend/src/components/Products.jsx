import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCake, fetchCakes, getCakeFromLocalStorage } from "../redux/products/action";
import Heading from "./Heading";
import { FaShoppingBag, FaHeart } from "react-icons/fa";

const Products = () => {
  const { fetch_cakes_pending, fetch_cakes } = useSelector(
    (state) => state?.cakeReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCakes());
    dispatch(getCakeFromLocalStorage());
  }, [dispatch]);

  return (
    <div className="py-20 px-20">
      <div className="mb-10 flex items-center justify-between">
        <Heading text="Delicious Cakes for Every Occasion" />
        <Link to='/cart'>View more</Link>
      </div>
      {fetch_cakes_pending ? (
        "Loading..."
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {fetch_cakes?.slice(0, 8).map((cake, index) => (
            <div key={index} className="relative bg-white shadow-md rounded-lg p-4 group">
              <div className="relative">
                {cake.image && (
                  <img
                    src={`http://localhost:8000/${cake.image}`}
                    alt={cake.name}
                    className="w-full h-60 object-cover rounded-md"
                  />
                )}
                {/* Icons on Hover */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FaShoppingBag className="text-gray-700 text-lg" onClick={() => dispatch(addCake(cake))} />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FaHeart className="text-gray-700 text-lg" />
                  </button>
                </div>
              </div>
              <h1 className="mt-2 text-center text-xl font-semibold">
                {cake.name}
              </h1>
              <div className="flex items-center justify-center space-x-4">
                <strike className="text-neutral-400">₹{cake.price}</strike>
                <span className="text-xl font-semibold">₹{cake.discount_price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
