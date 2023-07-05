import React from 'react'
import Header from '../components/Header'
import Resume from '../components/Resume'
import Skillset from '../components/Skillset'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
// import '../style/Footer.css'

export default function CardDev() {
  return (
    <div className='main_body'>
      <Header />
      <Resume />
      <Skillset />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
