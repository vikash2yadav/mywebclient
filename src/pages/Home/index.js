import React from 'react'
import Header from  '../../components/Header';
import Footer from  '../../components/Footer';
import MainBox from  '../../components/MainBox';
import Service from './Service';
import About from './About';

const Home = () => {
  return (
    <>
    <Header />
    <MainBox />
    <Service />
    <About />
    <Footer />
    </>
  )
}

export default Home