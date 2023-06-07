import React, { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import Banner from '../components/reusable/Banner'
import homeBanner from '../assets/image/Banner-home.png'
import Footer from "../components/layout/Footer"
import "typeface-montserrat"
// import { useNavigate } from 'react-router-dom'

export default function Home() {
  // const navigate = useNavigate()
  const [logements, setLogements] = useState([])
  
  useEffect(() => {
    fetch("./datas/logements.json")
    .then(response => {
      console.log(response)
      if(response.ok){
        console.log(response)
        return response.json()
      }
      // console.log(response)
    })
    .then((test) => {
      console.log(test)
      setLogements(test)
      // console.log(logements)
    })
    .catch((error) => console.log(error))
    console.log(logements)
  },[])

  return (
    <div>
        <Header/>
        <Banner title="Chez vous, partout et ailleurs" src={homeBanner}/>
        {
          logements.map((logement) => ( 
            <div className='test'>
              <a className='logement' href="Logement">
                <img src={logement.cover} alt={logement.alt} />
                <h2 key={logement.id} >{logement.title}</h2>
              </a>
            </div>
          ))
        }
        <Footer/>
    </div>
  )
}
