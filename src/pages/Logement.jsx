import React, { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import Footer from "../components/layout/Footer"
import { useParams } from 'react-router-dom'
import Slider from '../components/reusable/Slider'
import NotFound from "./NotFound"

const Collapsible = ({ title, content}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='collapsible-about'>
      <h2 onClick={toggleCollapse}>{title}</h2>
      {!isCollapsed && <p>{content}</p>}
    </div>
  )
}



export default function Logement() {
  const [logement, setLogement] = useState({})
  const {id} = useParams()
  
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
        return <NotFound/>
      }
      setLogement(test)
      console.log(test)
    })
    .catch((error) => console.log(error))
  },[id])


  return (
    <div>
        <Header/>
          {!logement.pictures ? "" :<Slider images={logement.pictures}/>}
            {
              <div className='logement-card' key={logement.id}>
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
                <div className='tag-container'>
                  <p className='tag'>{logement.tags}</p>
                </div>
                <div className='hote'>
                  {/* <p>{logement.host.name}</p>
                  <img src={logement.host.picture} alt='Hote' /> */}
                </div>
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
