import Site from "../Site/Site";
import React, { useState, useEffect, useMemo } from "react";
import { client } from "../../gqlClient";
import { gql } from "graphql-request";
import { useHistory } from "react-router-dom";

export default function useSiteList() {
  const [sites, setSites] = useState([]);
  const history = useHistory();

  useEffect(() => {
    try {

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
    ).then(data => setSites(data.sites)).catch((reason) => {
      console.log(".catch")
      history.push('/login');
    });
  } catch (error) {
    history.push('/login');
  }

  }, [history]);
  
  return useMemo(() => {
    return sites.map(site => <Site key={site.name} site={site} />)
  }, [sites]);
}
