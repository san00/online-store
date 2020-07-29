import React, { useState } from "react";
import Brand from "./Brand";

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
  return <div>{displayResults}</div>;
}

export default BrandsList;
