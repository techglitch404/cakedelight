import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x); 

  return (
    <div className='flex items-center justify-center text-lg'>
      <Link to='/' className='text-white'>Home</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`; 
        return (
          <span key={to} className='flex items-center'>
            <span className="mx-2">/</span>
            <span className='capitalize'>{value}</span>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
