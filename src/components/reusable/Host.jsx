import React from "react";

export default function Host({ host }) {
  return (
    host && (
      <div className="hote">
        <p>{host.name}</p>
        <img src={host.picture} alt="Hote" />
      </div>
    )
  );
}
