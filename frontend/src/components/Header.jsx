import React from "react";
import Navigation from "./Navigation";
import Hero from './Hero'

const Header = () => {
  return (
    <div className="h-screen bg-image bg-cover bg-no-repeat bg-left">
      <Navigation />
      <Hero />
    </div>
  );
};

export default Header;
