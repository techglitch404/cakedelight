import React from "react";
import Navigation from "./Navigation";
import Breadcrumbs from "./Breadcrumbs";

const Banner = ({banner_txt}) => {
  return (
    <div className="h-96 bg-banner bg-cover bg-no-repeat bg-left relative">
      <div className="relative z-50">
        <Navigation />
      </div>
      <div className="relative z-40 py-5 lg:py-32 px-5">
        <div className="container w-full lg:w-3/5 mx-auto mt-10 text-center text-white">
          <h1 className="lg:text-7xl sm:text-5xl text-3xl mb-3">
            {banner_txt}
          </h1>
          <Breadcrumbs />
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
};

export default Banner;
