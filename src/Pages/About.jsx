import React from 'react'
import MyNav from '../components/Home/MyNav'
import Footer from '../components/Home/Footer'
import AHero from '../components/About/AHero'
import Business from '../components/About/Business'
import Team from '../components/About/Team'
import Testimonial from '../components/About/Testimonial'
import AContact from '../components/About/AContact'

function About() {
  return (
    <div>
        <MyNav/>
        <AHero/>
        <Business/>
        <Team/>
        <Testimonial/>
        <AContact/>
        <Footer/>
    </div>
  )
}

export default About