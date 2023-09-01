import { Fragment } from "react";
import {Outlet, Link} from 'react-router-dom';
import './navbar.scss';
import React from "react";


import Vlogo from '../../assets/logo.png';

const Navigation = ()=> {
 
  
    // Link comp is similar to anchor tag which aides in routing
    return (
      <Fragment>
        <div className="navbar">
            <Link className="logo-container" to='/'>
              <img className="logo" src={Vlogo} alt="logo"/>
            </Link>
            
            <div className="navbar-links-con">
                <Link className="nav-link" to='/shop'>
                  Shop 
                </Link>
                <Link className="nav-link" to='/auth'>
                  Sign In
                </Link>
            </div>
        </div>
        <Outlet />
        {/* outlet comp creates template for nested routes. ie toplevel component  */}
      </Fragment>
    );
  }

  export default Navigation;