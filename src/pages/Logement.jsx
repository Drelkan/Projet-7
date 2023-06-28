import React, { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import Footer from "../components/layout/Footer"
import {useParams, Navigate } from 'react-router-dom'
import Slider from '../components/reusable/Slider'
import Collapsible from '../components/reusable/Collapsible'
import StarActive from '../assets/image/star-active.png'
import StarInactive from '../assets/image/star-inactive.png'


export default function Logement() {
  const [logement, setLogement] = useState({})
  const {id} = useParams();
  const [isNotFound, setIsNotFound] = useState(false);
  
  useEffect(() => {
    fetch("../datas/logements.json")
    .then(response => {
      if(response.ok){
        return response.json()
      }
    })
    .then((logementsFromApi) => {
      let test = logementsFromApi.find(logement => logement.id === id)
      if(test === undefined){
        setIsNotFound(true);
      }else{
        setLogement(test)
      }
    })
    .catch((error) => console.log(error))
  },[id])

if (isNotFound){
  return <Navigate to="/not-found" replace />;
}

const rating = parseInt(logement.rating) || 0;
console.log(rating)

  return (
    <div>
        <Header/>
          {!logement.pictures ? "" :<Slider images={logement.pictures}/>}
            {
              <div className='logement-card' key={logement.id}>
                <div className='logement-title'>
                  <h1>{logement.title}</h1>
                  <h2>{logement.location}</h2>
                </div>

                    {logement.rating && (
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
                    )}

              {logement.tags && logement.tags.length > 0 && (
                <div className='tag-container'>
                  <ul className='tag-list'>
                    {logement.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                  {/* <p className='tag'>{logement.tags}</p> */}
                </div>
                  )
                } 

                  {
                    !logement.host ? "" : <div className='hote'><p>{logement.host.name}</p><img src={logement.host.picture} alt='Hote' /></div>
                  }


                <div className='collapsible-about'>
                  <Collapsible title="Description" content={logement.description}/>
                  <Collapsible title="Equipement" content={logement.equipments}/>
                </div>
              </div>
            }
        <Footer/>
    </div>
  )
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
