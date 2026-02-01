import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'

function App() {
  return (
    <>
      {/* You probably want to render Navigation here */}
      
      <div className='bg-[#0e0c1e]'>
        <Navigation />
        <Hero />
        <About/>
        <Skills/>
        <Work/>
        <WorkExperience/>
        <Contact/>
      </div>
    </>
  )
}

export default App