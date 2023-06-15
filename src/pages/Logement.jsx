import React, { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import Footer from "../components/layout/Footer"
import { useParams } from 'react-router-dom'
import Slider from '../components/reusable/Slider'
// import NotFound from "./NotFound"

export default function Logement() {
  const [logement, setLogement] = useState({})
  const {id} = useParams()
  

  useEffect(() => {
    fetch("../datas/logements.json")
    .then(response => {
      // console.log(response)
      if(response.ok){
        // console.log(response)
        return response.json()
      }
      // console.log(response)
    })
    .then((logementsFromApi) => {
      // console.log(logementsFromApi)
      let test = logementsFromApi.find(logement => logement.id === id)
      // if(test === undefined){
        // return <NotFound/>
      // }
      setLogement(test)
      console.log(test)
      // console.log(logement.title)
      // console.log(logement.pictures)
      // return () => setLogement(test)
    })
    .catch((error) => console.log(error))
    // console.log(logement)
  },[id])


  return (
    <div>
        <Header/>
          {/* <div> */}
          {!logement.pictures ? "" :<Slider images={logement.pictures}/>}
          {/* <Slider images={logement.pictures} logementId={id}/> */}
          {/* <Slider/> */}
            {
              <div className='logement-card' key={logement.id}>
                {/* <img src={location.picture} alt="" /> */}
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
                <p>{logement.tags}</p>
                {/* <p>{logement.host.name}</p>
                <img src={logement.host.picture} alt='' /> */}
                {/* <div className='collapsible-about'>
                  <Collapsible trigger="Description">
                  <p>{logement.description}</p>
                  </Collapsible>
                  <Collapsible trigger="Equipements">
                  <p>{logement.equipments}</p>
                  </Collapsible>
                </div> */}
              </div>
            }
          {/* </div> */}
        <Footer/>
    </div>
  )
}
