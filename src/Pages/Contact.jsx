import React from 'react'
import CHero from '../components/Contact/CHero'
import MyNav from '../components/Home/MyNav'
import Footer from '../components/Home/Footer'
import Form from '../components/Contact/Form'

function Contact() {
  return (
    <div>
        <MyNav/>
        <CHero/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact