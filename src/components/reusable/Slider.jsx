import React, { useState, useEffect } from "react";
import arrow from "./../../assets/image/fleche.png";
// ,

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



const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, []);

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
          {showImageIndex && (
            <span className="image-index">
              {currentImageIndex + 1} / {images.length}
            </span>
          )}
          {images.map((image, index) => {
            let classImg
            if (index === currentImageIndex ){
              classImg = "imageCourante"
            
            }else{
              if (index < currentImageIndex){
                classImg = "imagePrecedente"
              }else if(index > currentImageIndex){
                classImg = "imageSuivante"
              }
            }
            return(<img key={index} src={image} alt="" className={`${classImg}`} />)
        })}

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

  // const nextImageStyle = {
  //   transform: `translateX(-${currentImageIndex * 100}%)`,
  //   transition: "transform 0.5s ease-in-out",
  // };


        /* <div className="photo" style={nextImageStyle} ref={imageRef}> */


  // const imageRef = useRef(null);


          /* {images.map((image, index) => (
            <div
              key={index}
              className="photo-item"
            >
              <img src={image} alt=""  />
            </div>
          ))} */





//Test B

    // import React, { useState } from "react";
    // import arrow from "./../../assets/image/fleche.png";

    // const Slider = ({ images }) => {
    //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
    //   const [animationDirection, setAnimationDirection] = useState(""); 

    //   const gauche = () => {
    //     if (animationDirection !== "right") {
    //       setAnimationDirection("slide-right");
    //       setTimeout(() => {
    //         setCurrentImageIndex((prevIndex) =>
    //           prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //         );
    //         setAnimationDirection("slide-left");
    //         setTimeout(() => {
    //           setAnimationDirection("");
    //         }, 500);
    //       }, 500);
    //     }
    //   };
      
    //   const droit = () => {
    //     if (animationDirection !== "left") {
    //       setAnimationDirection("slide-left");
    //       setTimeout(() => {
    //         setCurrentImageIndex((prevIndex) =>
    //           prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //         );
    //         setAnimationDirection("slide-right");
    //         setTimeout(() => {
    //           setAnimationDirection("");
    //         }, 500);
    //       }, 500);
    //     }
    //   };


    //   const showImageIndex = images.length > 1;

    //   return (
    //     <div className="carrousel">
    //       <div
    //         className={`container ${animationDirection}`}
    //         id="logements"
    //         onAnimationEnd={() => setAnimationDirection("")} 
    //       >
    //         {images.map((image, index) => (
    //           <div
    //             key={index}
    //             className={`photo ${index === currentImageIndex ? "visible" : ""}`}
    //           >
    //             {showImageIndex && (
    //               <span className="image-index">
    //                 {currentImageIndex + 1} / {images.length}
    //               </span>
    //             )}
    //             <img src={image} alt="" />
    //           </div>
    //         ))}
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
