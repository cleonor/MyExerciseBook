import React from 'react'
import { Nav, NavLink, NavMenu } from './NavBar'

const NavBar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to='/exercise1' activeStyle>
                    Exercise 1
                </NavLink>
                <NavLink to='/2' activeStyle>
                    Exercise 2
                </NavLink>
                <NavLink to='/3' activeStyle>
                    Exercise 3
                </NavLink>
            </NavMenu>
        </Nav>
    )
}

export default NavBar;