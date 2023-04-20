import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid w-full flex justify-between ">
        <Link className="navbar-brand" to="/">Car Inventory</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" flex items-center" id="navbarNav">
          <ul className="navbar-nav flex">
            <li className="nav-item">
              <Link className="nav-link" to="/add-car">Add Car</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update-car">Update Car</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete-car">Delete Car</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
