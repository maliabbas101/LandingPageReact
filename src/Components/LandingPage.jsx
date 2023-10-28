import React from 'react'
import Navbar from './LandingPage/Navbar'
import Header from './LandingPage/Header'
import Pricing from './LandingPage/Pricing'
import Features from './LandingPage/Features'
import FAQ from './LandingPage/FAQ'
import ContactUs from './LandingPage/ContactUs'
import Footer from './LandingPage/Footer'
import HowItWorks from './LandingPage/HowItWorks'

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Features/>
            <HowItWorks/>
            <Pricing/>
            <FAQ/>
            <ContactUs/>
            <Footer/>
        </div>

    )
}

export default LandingPage
