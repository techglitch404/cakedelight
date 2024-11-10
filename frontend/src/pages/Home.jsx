import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Products from '../components/Products'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Categories />
        <Products />
        <WhyUs />
        <Footer />
    </div>
  )
}

export default Home