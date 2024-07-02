import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FreeBooks from '../components/FreeBooks'

export default function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <FreeBooks />
            <Footer />
        </>
    )
}
