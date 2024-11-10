import React, { useEffect, useState } from 'react';
import logo from '../assets/logo1.png';
import { Link, NavLink } from 'react-router-dom';
import { TbHeart, TbShoppingBag, TbUser } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { getCakeFromLocalStorage } from '../redux/products/action';

const Navigation = () => {
  const { selected_cakes } = useSelector((state) => state?.cakeReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCakeFromLocalStorage());
  }, [dispatch]);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.user-dropdown')) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scroll to add shadow and sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate total quantity of items in the cart
  const cartItemCount = selected_cakes?.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={`py-5 px-20 fixed w-full top-0 z-50 transition-all duration-300  ${isScrolled ? 'bg-black shadow-md' : 'bg-transparent'}`}>
      <div className="container w-full">
        <div className="flex items-center justify-between">
          <div>
            <Link><img src={logo} alt="Logo" width={200} height={28.5} /></Link>
          </div>
          <ul className="flex items-center justify-center space-x-5 text-white">
            <li>
              <NavLink to='/' className='text-sm py-1 px-3'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className='text-sm py-1 px-3'>About</NavLink>
            </li>
            <li>
              <NavLink to='/cake' className='text-sm py-1 px-3'>Cake</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className='text-sm py-1 px-3'>Contact</NavLink>
            </li>
          </ul>
          <div className="flex items-center justify-center space-x-5 text-white">
            <div className='relative user-dropdown'>
              <Link onClick={toggleDropdown}>
                <TbUser className='text-2xl' />
              </Link>
              {isDropdownVisible && (
                <div className="bg-white w-40 absolute text-black left-0 top-10 text-sm p-2 flex flex-col space-y-2 rounded-md">
                  <Link>Login</Link>
                  <Link>Register</Link>
                </div>
              )}
            </div>
            <Link><TbHeart className='text-2xl' /></Link>
            <div className="relative">
              <Link to='/cart'><TbShoppingBag className='text-2xl' /></Link>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
