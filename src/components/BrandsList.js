import React, { useState } from "react";
import Brand from "./Brand";

import Flex from "../styles/Flex";

function BrandsList({ query }) {
  const [activeBrand, setActiveBrand] = useState("");

  const displayResults = query ? (
    query.map((brand) => {
      if (brand.brews[0].name === activeBrand || activeBrand === "") {
        return (
          <Brand brand={brand} key={brand.id} setActiveBrand={setActiveBrand} />
        );
      }
    })
  ) : (
    <h2>'Unable to load brands'</h2>
  );
  return <Flex justifyAround>{displayResults}</Flex>;
}

export default BrandsList;
