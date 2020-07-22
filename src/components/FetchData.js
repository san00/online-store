import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayData from "./BrandsList";

function FetchData() {
  const [query, setQuery] = useState([]);

  const uri = 'http://localhost:1337/Brands'

  useEffect(() => {
    const fetchQlData = async () => {
      const response = await axios.get(uri, {
        data: {
          query: `query {
            brands{
          _id
          name
          description
          image{
            url
          }
        }
      }`,
        },
      });
      setQuery(response.data);
    };
    fetchQlData();
  }, []);

  return (
    <div>
      <DisplayData query={query}/>
    </div>
  );
}

export default FetchData;
