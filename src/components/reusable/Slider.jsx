import React, { useState, useEffect } from "react";
import arrow from "./../../assets/image/fleche.png";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, []);

  const left = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const right = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showImageIndex = images.length > 1;

  return (
    <div className="carrousel">
      <div className="container" id="logements">
        {showImageIndex && (
          <span className="image-index">
            {currentImageIndex + 1} / {images.length}
          </span>
        )}
        {images.map((image, index) => {
          let classImg;
          if (index === currentImageIndex) {
            classImg = "imageCourante";
          } else {
            if (index < currentImageIndex) {
              classImg = "imagePrecedente";
            } else if (index > currentImageIndex) {
              classImg = "imageSuivante";
            }
            if (currentImageIndex === images.length - 1 && index === 0) {
              classImg = "imageSuivante";
            } else if (currentImageIndex === 0 && index === images.length - 1) {
              classImg = "imagePrecedente";
            }
          }
          return (
            <img
              key={index}
              src={image}
              alt="Logement"
              className={`caroussel__item ${classImg}`}
            />
          );
        })}
      </div>
      {showImageIndex && (
        <img
          src={arrow}
          className="bouton"
          id="left"
          alt="Gauche"
          onClick={left}
        />
      )}
      {showImageIndex && (
        <img
          src={arrow}
          className="bouton"
          id="right"
          alt="Droit"
          onClick={right}
        />
      )}
    </div>
  );
};

export default Slider;
