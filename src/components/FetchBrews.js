import React, { useState, useEffect } from "react";
import axios from "axios";
import BrewsList from "./BrewsList";

function FetchBrews(props) {
  const [brewQuery, setBrewQuery] = useState([]);

  const brewsUri = "http://localhost:1337/Brews";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(brewsUri, {
        data: {
          query: `query {
                brand(id:"${props.match.params.id}") {
                  _id
                  name
                  brews {
                    _id
                    name
                    image {
                      url
                    }
                    price
                  }
                }
              }`,
        },
      });
      console.log(res.data + "hello");
      setBrewQuery(res.data);
      console.log(brewQuery);
    };
    console.log(brewQuery);
    fetchData();
  }, []);

  return (
    <div>
      <BrewsList query={brewQuery} />
    </div>
  );
}

export default FetchBrews;
