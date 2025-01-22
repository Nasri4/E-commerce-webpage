import React from "react";

const Header = () => {
  return (
    <header className="bg-[#283739] text-beige flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <div className="text-xl font-bold text-[#F4EEC7]">Nasri</div>
      
      {/* Navigation Links */}
      <nav className="flex space-x-6 font-semibold">
        <a href="#home" className="text-[#F4EEC7] hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="text-[#F4EEC7] hover:text-gray-400">
          About
        </a>
        <a href="#contact" className="text-[#F4EEC7] hover:text-gray-400">
          Contact Us
        </a>
      </nav>
      
      {/* Cart */}
      <div className="flex items-center space-x-1">
        <span role="img" aria-label="cart" className="text-xl text-[#F4EEC7]">
        <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <span className="text-sm text-[#F4EEC7]">(1)</span>
      </div>
    </header>
  );
};

export default Header;
