// import { logDOM } from '@testing-library/react';
import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav,NavbarContainer,NavItem,NavLinks,NavLogo,MobileIcon,NavMenu} from './NavbarElements';
import Logo from '../../images/logo.png'
const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'><img src = {Logo} alt=" "></img></NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='home'>HOME</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='blog'>BLOG</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='trade calculator'>TRADE CALCULATOR</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='rankings'>RANKINGS</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='login'>LOGIN</NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </> 
    )
}

export default Navbar; 
