import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';
import pic from '../../images/Header-Man-on-Laptop.jpg';
import pic2 from "../../images/LogoMakerCa-1633404386659.png"

const Header = () => {
    return (
        <div>
            <nav className="nav-bar  position-fixed w-100 row">
                <div className="col-3">
                    <img className="logo w-25" src={pic2} alt="" />
                </div>
                <div className="col-5 my-auto">
                    <NavLink className="mx-3 text-decoration-none fw-bold text-white" to="/home">Home</NavLink>
                    <NavLink className="mx-3 text-decoration-none fw-bold text-white" to="/about">About</NavLink>
                    <NavLink className="mx-3 text-decoration-none fw-bold text-white" to="/allservices">Services</NavLink>
                    <NavLink className="mx-3 text-decoration-none fw-bold text-white" to="/contact">Contact</NavLink>
                    <NavLink className="mx-3 text-decoration-none fw-bold text-white" to="/pricing">Pricing</NavLink>
                </div>
                <div className="col-4 my-auto">
                    <input className="p-1 me-2" type="text" name="" id="" />
                    <button className="btn  btn-outline-success fw-bold mb-1 py-2 login">Log in</button>
                </div>
            </nav>
            <div>
                <img className="w-100 h-25 positon-fixed" src={pic} alt="" />
            </div>
        </div>
    );
};

export default Header;