import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from "../components/layout/Footer"
import Banner from '../components/reusable/Banner'
import aboutBanner from "../assets/image/Banner-about.png"


export default function About() {
  return (
    <div>
        <Header/>
        <div className='bannerAbout'>
          <Banner src={aboutBanner}/>
        </div>
        <h2>Fiabilité</h2>
        <h2>Respect</h2>
        <h2>Service</h2>
        <h2>Sécurité</h2>
        <Footer/>
    </div>
  )
}
