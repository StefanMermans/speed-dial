import React, { useMemo } from "react";
import sites from "../../sites.json";
import Site from "../Site/Site";
import { Container } from "./styles";

export default function SiteList() {
  const content = useMemo(() => {
    return sites.map(site => <Site key={site.name} site={site}/>)
  }, []);
  
  return (
    <Container>
      {content}
    </Container>
  )
}