import React, { useEffect } from "react";
import Banner from "../components/Banner";
import {
  addCake,
  fetchCakes,
  getCakeFromLocalStorage,
} from "../redux/products/action";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cake = () => {
  const { fetch_cakes_pending, fetch_cakes } = useSelector(
    (state) => state?.cakeReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCakes());
    dispatch(getCakeFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <Banner banner_txt="Cakes" />
      <div className="py-10 px-20">
        {fetch_cakes_pending ? (
          "Loading..."
        ) : (
          <div>
            <Link className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {fetch_cakes?.map((cake, index) => (
                <div
                  key={index}
                  className="relative bg-white shadow-md rounded-lg p-4 group"
                >
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
                        <FaShoppingBag
                          className="text-gray-700 text-lg"
                          onClick={() => dispatch(addCake(cake))}
                        />
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
                    <span className="text-xl font-semibold">
                      ₹{cake.discount_price}
                    </span>
                  </div>
                </div>
              ))}
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cake;
