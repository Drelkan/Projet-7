import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from "../components/layout/Footer"
import Banner from '../components/reusable/Banner'
import aboutBanner from "../assets/image/Banner-about.png"

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

export default function About() {   
  return (
    <div>
        <Header/>
        <div className='bannerAbout'>
          <Banner src={aboutBanner}/>
        </div>
        <Collapsible title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
        <Collapsible title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une eclusion de notre plateforme."/>
        <Collapsible title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
        <Collapsible title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisions également des ateliers sur la sécurité domestique pour nos hôtes."/>

        <Footer/>
    </div>
  )
}


            {/* <h2>Fiabilité</h2>
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            <h2>Respect</h2>
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une eclusion de notre plateforme.</p>
            <h2>Service</h2>
            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            <h2>Sécurité</h2>
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisions également des ateliers sur la sécurité domestique pour nos hôtes.</p> */}
