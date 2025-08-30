import React from 'react'
import ShopHeader from '../components/Shop/ShopHeader'
import MyNav from '../components/Home/MyNav'
import ShopBanner from '../components/Shop/ShopBanner'
import Shopping from '../components/Shop/Shopping'
import Footer from '../components/Home/Footer'

function Shop() {
  return (
    <div>
        <MyNav/>
        <ShopHeader/>
        <ShopBanner/>
        <Shopping/>
        <Footer/>
    </div>
  )
}

export default Shop