import React, { useEffect, useState } from "react";
import axios from "axios";
import backend_url from "../../config/config";

const BirthdayCake = () => {
  const [birthdayCake, setBirthdayCake] = useState([]);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await axios.get(`${backend_url}/cakes/`);
        setBirthdayCake(response.data.data);
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    };
    fetchCakes();
  }, []);

  return (
    <div className="py-10">
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4">
        {birthdayCake.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            {item.image && (
                <img
                src={`http://localhost:8000/${item.image}`} 
                alt={item.name}
                className="w-full h-60 object-cover rounded-md"
              />
            )}
            <h1 className="mt-2 text-center text-xl font-semibold">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayCake;
