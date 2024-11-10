import React from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="pt-20 px-20 bg-black text-white">
      <div className="grid sm:grid-cols-1 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Logo" width={200} height={28.5} />
          <p className="py-2 px-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            cupiditate tempora modi voluptate ad non distinctio voluptates ex,
            provident reprehenderit?
          </p>
          <div className="flex items-center px-2 my-4">
            <input type="text"  placeholder="Enter your email" className="p-2" />
            <button className="p-2">Subscribe</button>
          </div>
          <div className="flex items-center justify-start px-2 space-x-5 text-3xl">
             <Link><IoLogoInstagram /></Link>
             <Link><IoLogoFacebook /></Link>
             <Link><IoLogoYoutube /></Link>
             <Link><IoLogoGithub /></Link>
          </div>
        </div>
        <div className="pl-20">
          <h1 className="text-2xl font-semibold">Info</h1>
          <ul className="flex flex-col space-y-5 mt-5">
             <li>
                <Link className="text-sm">Custom services</Link>
             </li>
             <li>
                <Link className="text-sm">F.A.Q</Link>
             </li>
             <li>
                <Link className="text-sm">About us</Link>
             </li>
             <li>
                <Link className="text-sm">Contact us</Link>
             </li>
          </ul>
        </div>
        <div className="pl-20">
          <h1 className="text-2xl font-semibold">Services</h1>
          <ul className="flex flex-col space-y-5 mt-5">
             <li>
                <Link className="text-sm">Privacy policy</Link>
             </li>
             <li>
                <Link className="text-sm">Your account</Link>
             </li>
             <li>
                <Link className="text-sm">Terms & Conditions</Link>
             </li>
             <li>
                <Link className="text-sm">Contact us</Link>
             </li>
          </ul>
        </div>
        <div className="pl-20">
          <h1 className="text-2xl font-semibold">Account</h1>
          <ul className="flex flex-col space-y-5 mt-5">
             <li>
                <Link className="text-sm">About us</Link>
             </li>
             <li>
                <Link className="text-sm">Your account</Link>
             </li>
             <li>
                <Link className="text-sm">Terms & Conditions</Link>
             </li>
             <li>
                <Link className="text-sm">Contact us</Link>
             </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 border-t py-5">
        <p>© Copyright 2024 | CakieDelight By Vanshika Tomar.</p>
      </div>
    </div>
  );
};

export default Footer;
