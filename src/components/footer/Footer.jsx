import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nikoloz Tsirdava. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;