import React from "react";
import StarActive from "../../assets/image/star-active.png";
import StarInactive from "../../assets/image/star-inactive.png";

export default function Rating({ rating }) {
  return (
    rating && (
      <div className="star">
        {[...Array(parseInt(rating) || 0)].map((_, index) => (
          <div key={index} className="star-rating">
            <img src={StarActive} alt="étoile" className="star-active" />
          </div>
        ))}
        {[...Array(5 - (parseInt(rating) || 0))].map((_, index) => (
          <div key={index} className="star-rating">
            <img src={StarInactive} alt="étoile" className="star-inactive" />
          </div>
        ))}
      </div>
    )
  );
}
