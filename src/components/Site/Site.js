import React from "react";

export default function Site(props) {
  const imageSource = props.site.icon;
  const backgroundColor = props.site.backgroundColor || "white";

  return (
    <a
      className="
      rounded-2xl
      w-24
      h-24
      p-2
      overflow-hidden
      transform
      hover:scale-110
      transition-transform
      shadow-md
      hover:shadow-xl"
      style={{backgroundColor}}
      href={props.site.url}
    >
      <img src={imageSource} className="w-full h-full" />
    </a>
  )
}
