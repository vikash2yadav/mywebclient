import React from 'react'
import Header from  '../../components/Header';
import Footer from  '../../components/Footer';
import MainBox from  '../../components/MainBox';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Works from './Works';
import Blog from './Blog';

const Home = () => {
  return (
    <>
    <Header />
    <MainBox />
    <About/>
    <Service />
    <Works />
    <Skills />
    <Blog />
    <Contact />
    <Footer />
    </>
  )
}

export default Home