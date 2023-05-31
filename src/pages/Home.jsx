import React from 'react'
import Header from '../components/layout/Header'
import Banner from '../components/reusable/Banner'
import homeBanner from '../assets/image/Banner-home.png'

export default function Home() {
  return (
    <div>
        <Header/>
        <Banner title="Chez vous, partout et ailleurs" src={homeBanner}/>
        Home
    </div>
  )
}
