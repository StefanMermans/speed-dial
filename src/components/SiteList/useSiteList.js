import Site from "../Site/Site";
import React, { useState, useEffect, useMemo } from "react";
import { client } from "../../gqlClient";
import { gql } from "graphql-request";

export default function useSiteList() {
  const [sites, setSites] = useState([]);
  console.log('useSiteList');
  console.log({...client});

  useEffect(() => {
    client.request(
      gql`
      query {
          sites {
            name
            url
            backgroundColor
            icon
          }
        }
      `,
      {},
      {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    ).then(data => setSites(data.sites));
  }, []);

  return useMemo(() => {
    return sites.map(site => <Site key={site.name} site={site} />)
  }, [sites]);
}
