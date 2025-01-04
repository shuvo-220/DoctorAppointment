import React from 'react'
import Hero from '../hero/Hero'
import Choose from '../choose/Choose'
import Step from '../step/Step'
import FAQ from '../faq/FAQ'
import Contact from '../contact/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <Choose />
        <Step />
        <FAQ />
        <Contact />
    </div>
  )
}

export default Home