import React from 'react'
import { Nav, NavLink, NavMenu } from './NavBar'

const NavBar = () => {
    return (
        <Nav>
            <NavLink to='/'>
                MyExerciseBook
                {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
            </NavLink>
            <NavMenu>
                <NavLink to='/1' activeStyle>
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