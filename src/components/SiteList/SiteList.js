import React, { useMemo, useState, useEffect } from "react";
import Site from "../Site/Site";
import { Container } from "./styles";

export default function SiteList() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("sites.json").then(async res => {
      setSites(await res.json());
    });
  }, []);

  const content = useMemo(() => {
    return sites.map(site => <Site key={site.name} site={site}/>)
  }, [sites]);
  
  return (
    <Container>
      {content}
    </Container>
  );
}