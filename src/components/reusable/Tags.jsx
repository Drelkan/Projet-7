import React from "react";

export default function Tags({ tags }) {
  return (
    tags &&
    tags.length > 0 && (
      <div className="tag-container">
        <ul className="tag-list">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    )
  );
}
