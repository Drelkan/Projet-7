import React from 'react'
import Header from '../components/layout/Header'
import Footer from "../components/layout/Footer"
import Banner from '../components/reusable/Banner'
import aboutBanner from "../assets/image/Banner-about.png"



export default function About() {
  return (
    <div>
        <Header/>
        <Banner src={aboutBanner}/>
        About
        <Footer/>
    </div>
  )
}
