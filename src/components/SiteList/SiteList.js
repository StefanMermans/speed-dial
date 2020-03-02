import React, { useMemo, useState, useEffect } from "react";
import Site from "../Site/Site";
import useWindowResize from "../../hooks/useWindowResize";
import { Container } from "./styles";

const BOOKMARK_WIDTH = 120;


function calculatePadding(windowWidth) {
  const count = Math.floor(windowWidth / BOOKMARK_WIDTH);
  const excessSpace = windowWidth - (count * BOOKMARK_WIDTH);
  return excessSpace / 2;
}

export default function SiteList() {
  const [sites, setSites] = useState([]);
  const [windowWidth] = useWindowResize();

  useEffect(() => {
    fetch("sites.json").then(async res => {
      setSites(await res.json());
    });
  }, []);

  const content = useMemo(() => {
    return sites.map(site => <Site key={site.name} site={site}/>)
  }, [sites]);

  const paddingLeft = useMemo(() => {
    return calculatePadding(windowWidth);
  }, [windowWidth]);
  
  return (
    <Container style={{
      paddingLeft: paddingLeft
    }}>
      {content}
    </Container>
  );
}