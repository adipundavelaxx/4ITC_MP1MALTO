import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className="image" src={require('../../images/paper-plane.png')} alt='Adriana Pundavela Malto' />
          <p className="nav-name"> Adriana Pundavela Malto</p>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            GREETINGS.
          </NavLink>
          {/* <NavLink to='/discover' activeStyle>
            Discover
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Me
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
