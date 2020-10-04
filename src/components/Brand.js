import React from "react";
import { Link } from "react-router-dom";

import Text from "../styles/Text";
import Heading from "../styles/Heading";
import Button from "../styles/Button";
import {
  Container,
  CardDetails,
  CardDetailsInner,
  CardImage,
} from "../styles/BrandCard";

function Brand({ brand, setActiveBrand }) {
  return (
    <Link to={`/brews/${brand.id}`}>
      <Container
        onClick={() => {
          setActiveBrand(brand.brews[0].name);
        }}
      >
        <CardImage
          src={`http://localhost:1337${brand.image[0].url}`}
          alt="brand logo"
        ></CardImage>
        <Heading h4>{brand.name ? brand.name : "Name unavailable"}</Heading>
        <CardDetails>
          <Text textAlignLeft>
            {brand.description ? brand.description : "Description unavailable"}
          </Text>
        </CardDetails>
        <CardDetailsInner>
          <Button>See brews</Button>
        </CardDetailsInner>
      </Container>
    </Link>
  );
}

export default Brand;
