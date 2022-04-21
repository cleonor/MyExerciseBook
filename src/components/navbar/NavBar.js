import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: rgb(40, 54, 24);
  border-radius: 15px 15px 0 0;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 10;
`;

export const NavLink = styled(Link)`
width: 70px;
color: rgb(96, 108, 56);
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    color: rgb(254, 250, 224);
    font-weight: bold;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
`;