import React from "react";
import Banner from "../components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TbTrash } from "react-icons/tb";
import { decrease, increase, removeCake } from "../redux/products/action";

const Cart = () => {
  const dispatch = useDispatch();
  const { selected_cakes } = useSelector((state) => state?.cakeReducer);
  const total = selected_cakes?.reduce((total, item) => {
    return total + item.quantity * item.price; // Calculate total for each item and sum them up
  }, 0);
  return (
    <>
      <Banner banner_txt="Cart" />
      <div className="py-20 px-20">
        <table className="min-w-full table-auto border-collapse border border-gray-300 mt-6">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="px-4 py-2 border-b text-sm font-semibold">
                Image
              </th>
              <th className="px-4 py-2 border-b text-sm font-semibold">
                Item name
              </th>
              <th className="px-4 py-2 border-b text-sm font-semibold">
                Quantity
              </th>
              <th className="px-4 py-2 border-b text-sm font-semibold">
                Price
              </th>
              <th className="px-4 py-2 border-b text-sm font-semibold">
                Total
              </th>
              <th className="px-4 py-2 border-b text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {selected_cakes?.map((item, index) => {
              return (
                <tr key={item.id + "_" + index} className="text-center">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    {item.image && (
                      <img
                        src={`http://localhost:8000/${item.image}`}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md mx-auto"
                      />
                    )}
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    {item.quantity}
                    <button
                      className="border px-3 text-2xl ml-2"
                      onClick={() => dispatch(decrease(item.id))}
                    >
                      -
                    </button>
                    <button
                      className="border px-3 text-2xl"
                      onClick={() => dispatch(increase(item.id))}
                    >
                      +
                    </button>
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    ₹{item.price}
                  </td>
                  <td className="py-2 border-b text-sm text-gray-700">
                    ₹{item.quantity * item.price}
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    <Link className="flex items-center justify-center">
                      <TbTrash
                        className="text-xl text-red-600"
                        onClick={() => dispatch(removeCake(item.id))}
                      />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <div className="mt-6 text-right">
            <span className="text-xl font-semibold">Grand Total: </span>
            <span className="text-xl font-bold text-green-600">₹{total}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
