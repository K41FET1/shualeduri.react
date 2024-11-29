import React, { useState } from "react";

const Header = ({ cart }) => {
  const navigationItems = ["Home", "Shop", "Blog", "FAQ", "Contact Us"];
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Cart Visibility
  const toggleCart = () => setShowCart((prev) => !prev);

  // Toggle Menu Visibility (Mobile)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="border-b border-gray-300 py-4 relative">
      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/images/logo.svg" alt="Logo" className="w-36" />

          {/* Desktop Links */}
          <ul className="hidden md:flex ml-10 gap-6">
            {navigationItems.map((link, index) => (
              <li
                key={index}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-3xl">
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Cart and Profile */}
        <div className="flex items-center">
          {/* Cart Icon */}
          <button onClick={toggleCart} className="relative">
            <img src="/images/cart.svg" alt="Cart" className="w-6" />
            {cart.quantity > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.quantity}
              </span>
            )}
          </button>

          {/* Profile Image */}
          <img
            src="/images/pic.png"
            alt="Profile"
            className="w-10 h-10 ml-6 rounded-full"
          />
        </div>
      </nav>

      {/* Cart Popup for Mobile */}
      {showCart && (
        <div className="absolute top-16 right-6 bg-white shadow-lg p-4 rounded-lg z-50">
          <h2 className="font-bold mb-2">Cart</h2>
          {cart.quantity > 0 ? (
            <>
              <p>
                <strong>Price:</strong> ${cart.price.toFixed(2)}
              </p>
              <p>
                <strong>Quantity:</strong> {cart.quantity}
              </p>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}

      {/* Sliding Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-gray-800 bg-opacity-70 z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={toggleMenu} // Close the menu when clicking outside
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white text-3xl">
            X
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center justify-center h-full text-white">
          {navigationItems.map((link, index) => (
            <li
              key={index}
              className="text-gray-200 hover:text-gray-100 cursor-pointer text-lg my-4"
            >
              {link}
            </li>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;