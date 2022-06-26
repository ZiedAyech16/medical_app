import React from 'react'

import Navbar_ from '../components/Navbar'
import Video_ from '../components/Video'
import Footer_ from '../components/Footer'
import Find_ from '../components/Find'
import "./home_.css";

const Home_ = () => {
    return (
        <div className='home__'>
            <Navbar_ />
            <Video_ /> 
            {/* <Footer_ /> */}
            <Find_ />
        </div>
    )
}

export default Home_