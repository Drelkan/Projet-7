import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from "../components/layout/Footer"
import Banner from '../components/reusable/Banner'
import aboutBanner from "../assets/image/Banner-about.png"
import Collapsible from 'react-collapsible'


export default function About() {   
  return (
    <div>
        <Header/>
        <div className='bannerAbout'>
          <Banner src={aboutBanner}/>
        </div>
        {/* <div className='collapsible-about'>
          <Collapsible trigger="Fiabilité">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </Collapsible>
          <Collapsible trigger="Respect">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une eclusion de notre plateforme.</p>
          </Collapsible>
          <Collapsible trigger="Service">
            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
          </Collapsible>
          <Collapsible trigger="Sécurité">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisions également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </Collapsible>
        </div> */}
        <Footer/>
    </div>
  )
}
