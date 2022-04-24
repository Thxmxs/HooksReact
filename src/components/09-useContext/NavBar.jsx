import React from 'react'
import {Link ,NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <NavLink className="nav-link"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link"  to="/about">about</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link"  to="/login">login</NavLink>
        </li>
        </ul>
    </div>
    </nav>
  )
}
