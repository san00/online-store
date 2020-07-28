import React from "react";
import Brew from "./Brew";

function BrewsList({ query }) {
  const displayResults = query ? (
    query.map((brew) => {
      console.log(brew.name);
      return <Brew brew={brew} key={brew.id} />;
    })
  ) : (
    <h2>'Unable to load brews'</h2>
  );
  return <div>{displayResults}</div>;
}

export default BrewsList;
