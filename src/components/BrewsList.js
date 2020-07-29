import React from "react";
import Brew from "./Brew";

function BrewsList({ query, brandId }) {
  const displayResults = query ? (
    query.map((brew) => {
      if (brew.brand.id === brandId) {
        return <Brew brew={brew} key={brew.id} />;
      }
    })
  ) : (
    <h2>'Unable to load brews'</h2>
  );
  return <div>{displayResults}</div>;
}

export default BrewsList;
