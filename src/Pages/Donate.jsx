import React from 'react'
import DonateHero from '../components/Donate/donateHero'
import MyNav from '../components/Home/MyNav'
import Footer from '../components/Home/Footer'
import DonateButtons from '../components/Donate/DonateButtons'

function Donate() {
  return (
    <div>
        <MyNav/>
        <DonateHero/>
        <DonateButtons/>
        <Footer/>
    </div>
  )
}

export default Donate