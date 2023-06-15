import React, { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import Footer from "../components/layout/Footer"
import { useParams } from 'react-router-dom'
import Collapsible from 'react-collapsible'
import Slider from '../components/reusable/Slider'

export default function Logement() {
  const [logement, setLogement] = useState([])
  const {id} = useParams()
  

  useEffect(() => {
    fetch("../datas/logements.json")
    .then(response => {
      console.log(response)
      if(response.ok){
        console.log(response)
        return response.json()
      }
      // console.log(response)
    })
    .then((logementsFromApi) => {
      console.log(logementsFromApi)
      let test = logementsFromApi.find(logement => logement.id === id)
      setLogement(test)
      console.log(logement.title)
      // console.log(test)
    })
    .catch((error) => console.log(error))
    // console.log(logement)
  },[])


  return (
    <div>
        <Header/>
          {/* <div> */}
          {/* <Slider pictures={logement.pictures}/> */}
          {/* <Slider/> */}
            {
              <div className='logement-card' key={logement.id}>
                {/* <img src={location.picture} alt="" /> */}
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
                <p>{logement.tags}</p>
                <div className='collapsible-about'>
                  <Collapsible trigger="Description">
                  <p>{logement.description}</p>
                  </Collapsible>
                  <Collapsible trigger="Equipements">
                  <p>{logement.equipments}</p>
                  </Collapsible>
                </div>
              </div>
            }
          {/* </div> */}
        <Footer/>
    </div>
  )
}
