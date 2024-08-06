import React, { useState } from 'react';
import 
'./Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="headerr bg-white py-4 px-6 flex items-center justify-between ">
     
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
          <img src='images/header.png' alt='menu'/>
        </button>
      </div>

      
      <div className="flex items-center">
       <Link to={'/'}> <img src="images/logo.png" alt="" /></Link>
      </div>

      
      <div className="hb hidden lg:flex space-x-4">
        <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
        <button className="bg-black text-white px-4 py-2 rounded">Login</button>
      </div>

      
      {isMenuOpen && (
        <div className="hb lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col items-center space-y-4">
          <button className="bg-black text-white px-4 py-2 rounded w-full">Sign Up</button>
          <button className="bg-black text-white px-4 py-2 rounded w-full">Login</button>
        </div>
      )}
    </header>
  );
};

export default Header;