import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Slider from "../components/reusable/Slider";
import Collapsible from "../components/reusable/Collapsible";
import Rating from "../components/reusable/Rating";
import Tags from "../components/reusable/Tags";
import Host from "../components/reusable/Host";
import LogementTitle from "../components/reusable/LogementTitle";

export default function Logement() {
  const [logement, setLogement] = useState({});
  const { id } = useParams();
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    fetch("../datas/logements.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((logementsFromApi) => {
        let test = logementsFromApi.find((logement) => logement.id === id);
        if (test === undefined) {
          setIsNotFound(true);
        } else {
          setLogement(test);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (isNotFound) {
    return <Navigate to="/not-found" replace />;
  }

  const rating = parseInt(logement.rating) || 0;
  console.log(rating);

  return (
    <div>
      
            {!logement.pictures ? "" : <Slider images={logement.pictures} />}
      <div className="logement-card" key={logement.id}>
        <LogementTitle title={logement.title} location={logement.location} />
        <Tags tags={logement.tags} />
        <div className="rating-test">
          <Rating rating={logement.rating} />
          <Host host={logement.host} />
        </div>
          <div className="collaps-logement">
            <Collapsible title="Description" content={logement.description} />
            <Collapsible title="Equipement" content={logement.equipments} />
          </div>
      </div>

      
      </div>
  );
}

// const Collapsible = ({ title, content}) => {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className='collapsible-about'>
//       <h2 onClick={toggleCollapse}>{title}</h2>
//       {/* {!isCollapsed && <div>{!content ? typeof content !== String ? <ul>{content.map((item, index) => <li key={index}>{item}</li>)}</ul> : <p>{content}</p> : ""}</div>} */}
//       {!isCollapsed && (
//         <div>
//           {content !== null && typeof content === 'object' ? (
//             <ul>
//               {content.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>{content}</p>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

/* {logement.rating && (
                      <div className='star-test'>
                        {[...Array(parseInt(logement.rating) || 0)].map ((_, index) => (
                              <div key={index} className='star-rating'>
                                <img src={StarActive} alt="étoile" className='star-active' />
                              </div>
                            ))}
                            {[...Array(5 - (parseInt(logement.rating) || 0))].map((_, index) => (
                              <div key={index} className='star-rating'>
                                <img src={StarInactive} alt="étoile" className='star-inactive' />
                              </div>
                            ))}
                          </div>
                    )} */

//   <div className='logement-title'>
//   <h1>{logement.title}</h1>
//   <h2>{logement.location}</h2>
// </div>
