import React from 'react';
import MyNav from '../components/Home/MyNav';
import Hero from '../components/Home/Hero';
import Support from '../components/Home/Support';
import Banner from '../components/Home/Banner';
import Products from '../components/Home/Products';
import Shop from '../components/Home/Shop';
import Footer from '../components/Home/Footer';

function Home() {
  return (
    <div>
      <MyNav/>
      <Hero/>
      <Support/>
      <Banner/>
      <Products/>
      <Shop/>
      <Footer/>
    </div>
  );
}

export default Home;
