import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

import Flex from "../styles/Flex";
import Container from "../styles/Container";
import Heading from "../styles/Heading";

function Navbar() {
  return (
    <Container>
      <Flex justifyAround>
        <Heading>Shop-A-Lot</Heading>
      </Flex>
      <Flex justifyAround>
        <Link to="/signup">Login</Link>
        <Cart />
        <Link to="/signin">Signup</Link>
      </Flex>
    </Container>
  );
}

export default Navbar;
