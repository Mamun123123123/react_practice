import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white sticky top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">OrganicTrace</h1>

        <ul className="hidden md:flex space-x-6">
          <li><Link to="/H" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/farmers" className="hover:text-yellow-300">Farmers</Link></li>
          <li><Link to="/processors" className="hover:text-yellow-300">Processors</Link></li>
          <li><Link to="/trace" className="hover:text-yellow-300">Trace Product</Link></li>
          <li><Link to="/My" className="hover:text-yellow-300">Contact</Link></li>
        </ul>

        <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
