import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white sticky top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">OrganicTrace</h1>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#" className="hover:text-yellow-300">About</a></li>
          <li><a href="#" className="hover:text-yellow-300">Farmers</a></li>
          <li><a href="#" className="hover:text-yellow-300">Processors</a></li>
          <li><a href="#" className="hover:text-yellow-300">Trace Product</a></li>
          <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
        </ul>

        <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar