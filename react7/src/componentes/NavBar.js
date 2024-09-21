import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
      <div className="nav-barra">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <NavLink className="navbar-brand" href="#">App Router</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">Home </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link " to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/login">Login </NavLink></li>
              </ul>
              <form className="d-flex">
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
  