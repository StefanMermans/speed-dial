import { useState, useEffect } from "react";
import { client } from "../gqlClient";
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
        history.push('/login');
      });
    } catch (error) {
      history.push('/login');
    }
  }, [history]);
  
  return sites;
}
