import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import ContactMe from './ContactMe/ContactMe'
import HomeBanner from './HomeBanner/HomeBanner'

const Home = () => {
    function fullname(){
        console.log('My full name is mosharrof hosen munna')
    }


    return (
        <div>
         <HomeBanner/>
         <AboutMe/>
         <ContactMe/>
        </div>
    )
}

export default Home
