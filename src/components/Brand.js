import React from "react";
import { Link } from "react-router-dom";

import { Image } from "../styles/Image";
import Text from "../styles/Text";
import Card from "../styles/Card";
import Heading from "../styles/Heading";

function Brand({ brand, setActiveBrand }) {
  return (
    <Link to={`/brews/${brand.id}`}>
      <article
        onClick={() => {
          setActiveBrand(brand.brews[0].name);
        }}
      >
        <Card>
          <Image
            src={`http://localhost:1337${brand.image[0].url}`}
            alt="brand logo"
          ></Image>
          <Heading h4>{brand.name ? brand.name : "Name unavailable"}</Heading>
          <Text>
            {brand.description ? brand.description : "Description unavailable"}
          </Text>
        </Card>
      </article>
    </Link>
  );
}

export default Brand;
