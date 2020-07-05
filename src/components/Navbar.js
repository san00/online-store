import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const Heading = styled.nav`
    color: palevioletred;
    font-size: 1.5em;
  `;
  const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    padding:1em;
  `;

  return (
    <nav>
      <Nav>
        <Link to="/signup">Signin</Link>
        <Heading>Shop-A-Lot</Heading>
        <Link to="/signin">Signup</Link>
      </Nav>
    </nav>
  );
}

export default Navbar;
