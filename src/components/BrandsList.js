import React from "react";
import Brand from "./Brand";
function BrandsList({ query }) {
  const displayResults = query ? (
    query.map((brand) => {
      return <Brand brand={brand} key={brand.id}/>;
    })
  ) : (
    <h2>'Unable to load brands'</h2>
  );
  return <div>{displayResults}</div>;
}

export default BrandsList;
