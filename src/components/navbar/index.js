import React from 'react'

const NavBar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">MyExerciseBook</Navbar.Brand>
                <NavMenu>
                    <NavLink to="/1">Exercise1</NavLink>
                    <NavLink to="/2">Exercise2</NavLink>
                    <NavLink to="/3">Exercise3</NavLink>
                </NavMenu>
            </Container>
        </Navbar>
    )
}

export default NavBar