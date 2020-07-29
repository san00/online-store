import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Brand({ brand, setActiveBrand }) {
  const Image = styled.img`
    width: 15em;
  `;
  return (
    <Link to={`/brews/${brand.id}`}>
      <article
        onClick={() => {
          setActiveBrand(brand.brews[0].name);
        }}
      >
        <Image
          src={`http://localhost:1337${brand.image[0].url}`}
          alt="brand logo"
        ></Image>
        <p>{brand.name ? brand.name : "Name unavailable"}</p>
        <p>
          {brand.description ? brand.description : "Description unavailable"}
        </p>
      </article>
    </Link>
  );
}

export default Brand;
