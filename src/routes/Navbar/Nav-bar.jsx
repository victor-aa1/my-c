import { Fragment } from "react";
import {Outlet, Link} from 'react-router-dom';
import './navbar.styles.scss';
import React from "react";

// import svg logo below
// import { ReactComponent as Logo } from "assets-image"

const Navigation = ()=> {
    // Link comp is similar to anchor tag which aides in routing
    return (
      <Fragment>
        <div className="navbar">
            <Link className="logo-container" to='/'>
                {/* <Logo className='logo'/> */}
            </Link>
            
            <div className="navbar-links-con">
                <Link className="nav-link" to='/shop'>
                  Shop 
                </Link>
                <Link className="nav-link" to='/sign-in'>
                  Sign In
                </Link>
                
            </div>
        </div>
        {/* <Outlet /> */}
        {/* outlet comp creates template for nested routes. ie toplevel component  */}
      </Fragment>
    )
  }

  export default Navigation;