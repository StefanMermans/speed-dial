import React from "react";
import { Container, Icon, Link } from "./styles";

export default function Site(props) {
  const imageSource = "data:image/png;base64," + props.site.icon

  return (
    <Container>
      <Link href={props.site.url}>
        <Icon src={imageSource} alt={props.site.name + "-icon"} />
        {props.site.name}
      </Link>
    </Container>
  )
}