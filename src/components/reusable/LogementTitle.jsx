import React from "react";

export default function LogementTitle({ title, location }) {
  return (
    <div className="logement-title">
      <h1>{title}</h1>
      <h2>{location}</h2>
    </div>
  );
}
