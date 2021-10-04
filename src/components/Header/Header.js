import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';
import pic from '../../images/Header-Man-on-Laptop.jpg';

const Header = () => {
    return (
        <div>
            <nav className="nav-bar p-4 position-fixed w-100">
                <NavLink className="mx-3 text-decoration-none fw-bold text-white" to="/home">Home</NavLink>
                <NavLink className="mx-3 text-decoration-none fw-bold text-white" to="/about">About</NavLink>
                <NavLink className="mx-3 text-decoration-none fw-bold text-white" to="/allservices">Services</NavLink>
                <NavLink className="mx-3 text-decoration-none fw-bold text-white" to="/contact">Contact</NavLink>
                <NavLink className="mx-3 text-decoration-none fw-bold text-white" to="/pricing">Pricing</NavLink>
            </nav>
            <div>
                <img className="w-100 h-50" src={pic} alt="" />
            </div>
        </div>
    );
};

export default Header;