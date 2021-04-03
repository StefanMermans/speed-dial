import Site from "../Site/Site";
import React, { useState, useEffect, useMemo } from "react";
import { client } from "../../gqlClient";
import { gql } from "@apollo/client";

export default function useSiteList() {
  const [sites, setSites] = useState([]);

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
      `
    ).then(data => setSites(data.sites));
  }, []);

  return useMemo(() => {
    return sites.map(site => <Site key={site.name} site={site} />)
  }, [sites]);
}
