import React from 'react'
import Header from '../components/layout/Header'
import Footer from "../components/layout/Footer"
import notFound from "../assets/image/404.png"


export default function NotFound() {
  return (
    <div>
      <Header/>
      <div className='notFound'>
        <img src={notFound} alt="La page demander n'existe pas" />
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <a href="Home">Retourner sur la page d'accueil</a>
      </div>
      <Footer/>
    </div>
  )
}
