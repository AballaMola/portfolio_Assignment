import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Bio from '../Components/Bio'
import Skill from '../Components/Skill'
import Project from '../Components/Projects'
import Contact from '../Components/Contact'


function Home() {

    return (
        <div id='Home'>
        {/*TODO:  Header Section */}
            <Header/>
        {/* TODO: Banner Section */}
            <Banner/>
        {/* TODO: Bio Section */}
            <Bio/>
        {/* TODO: Skill Section */}
            <Skill/>
        {/* TODO: Skill Section */}
            <Project/>
        {/* TODO: Contact Section */}
            <Contact/>
        </div>
    )
}

export default Home