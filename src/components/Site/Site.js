import React from "react";
import { Container, Icon, Link } from "./styles";

export default function Site(props) {
  const imageSource = props.site.icon;
  const backgroundColor = props.site.backgroundColor || "white";
  const color = props.site.color || "black"

  return (
    <Container color={color}>
      <Link href={props.site.url} backgroundColor={backgroundColor}>
        <Icon src={imageSource} alt={props.site.name + "-icon"} />
      </Link>
    </Container>
  )
}