import React from "react";

export default function Banner({ title, src }) {
  return (
    <div className="banner">
      {!title ? "" : <h1 className="banner-title">{title}</h1>}
      <picture>
        <source media="(max-width: 765px)" srcSet={src} />
        <img src={src} alt="Bannière" />
      </picture>
    </div>
  );
}
