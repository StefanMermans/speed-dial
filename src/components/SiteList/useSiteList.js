import Site from "../Site/Site";
import React, { useState, useEffect, useMemo } from "react";
import { client } from "../../gqlClient";
import { gql } from "graphql-request";
import { useHistory } from "react-router-dom";

export default function useSiteList() {
  const [sites, setSites] = useState([]);
  const history = useHistory();

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
    ).then(data => setSites(data.sites))
    .catch(() => history.push('/loing'));
  }, []);

  return useMemo(() => {
    return sites.map(site => <Site key={site.name} site={site} />)
  }, [sites]);
}
