import React, { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import {CgMenuRight} from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {Nav,NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem} from './NavStyles.js';
import { useLocation, useNavigate} from 'react-router-dom';
import {data} from '../../data/NavData.js';
import Logo from '../../images/logocar.png';

const Navbar = () => {

    const [show,setShow] = useState(false);

    let nav = useNavigate();
    let location = useLocation();

    const clickHandler = () => {
        setShow(!show);
    };


//---------------- Smooth Scroll

    const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

//--------------- closing Nav when clicked home

    const closeMobileMenu = (to,id) => {
        if (id && location.pathname === '/'){
            scrollTo(id);
        }
        nav(to);
        setShow(false)
    }

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                <NavIcon src={Logo} alt="logo" />
                J&R 
            </NavLogo>
            <MobileIcon onClick={clickHandler}>
                {show ? <FaTimes /> : <CgMenuRight />}
            </MobileIcon>
            <NavMenu show={show}>
                {data.map((el, index) => (
                    <NavItem key={index}>
                        <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                            {el.text}
                        </NavLinks>
                    </NavItem>
                ))}
            </NavMenu>
        </NavbarContainer>
    </Nav>
</IconContext.Provider>
  )
}

export default Navbar