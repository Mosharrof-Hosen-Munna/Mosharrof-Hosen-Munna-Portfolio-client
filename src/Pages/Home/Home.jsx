import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import HomeBanner from './HomeBanner/HomeBanner'

const Home = () => {
    function fullname(){
        console.log('My full name is mosharrof hosen munna')
    }


    return (
        <div>
         <HomeBanner/>
         <AboutMe/>
        </div>
    )
}

export default Home
