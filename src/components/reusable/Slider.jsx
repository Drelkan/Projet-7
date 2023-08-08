import React, { useState } from "react";
import arrow from "./../../assets/image/fleche.png";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const gauche = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const droit = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showImageIndex = images.length > 1;

  return (
    <div className="carrousel">
      <div className="container" id="logements">
        <div className="photo">
          {showImageIndex && (
            <span className="image-index">
              {currentImageIndex + 1} / {images.length}
            </span>
          )}
          <img src={images[currentImageIndex]} alt="" />
        </div>
      </div>

      {showImageIndex && (
        <img
          src={arrow}
          className="bouton"
          id="gauche"
          alt="Gauche"
          onClick={gauche}
        />
      )}
      {showImageIndex && (
        <img
          src={arrow}
          className="bouton"
          id="droit"
          alt="Droit"
          onClick={droit}
        />
      )}
    </div>
  );
};

export default Slider;



// const Slider = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const gauche = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const droit = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const showImageIndex = images.length > 1;

//   return (
//     <div className="carrousel">
//       <div className="container" id="logements">
//         <div className="photo">
//           {showImageIndex && (
//             <span className="image-index">
//               {currentImageIndex + 1} / {images.length}
//             </span>
//           )}
//           <img src={images[currentImageIndex]} alt="" />
//         </div>
//       </div>
//       {showImageIndex && (
//         <img
//           src={arrow}
//           className="bouton"
//           id="gauche"
//           alt="Gauche"
//           onClick={gauche}
//         />
//       )}
//       {showImageIndex && (
//         <img
//           src={arrow}
//           className="bouton"
//           id="droit"
//           alt="Droit"
//           onClick={droit}
//         />
//       )}
//     </div>
//   );
// };

// export default Slider;





