 import React from 'react'
import Nav from './components/nav'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Featured2 from './components/Featured2'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
 


const App = () => {
   const locomotiveScroll = new LocomotiveScroll();
   return (
     <div className='w-full min-h-screen bg-zinc-900 text-white'>
        <Nav/>
       <LandingPage/>
       <Marquee/>
       <About/>
       <Eyes/>
       <Featured/>
       <Featured2/>
       <Cards/>
       <Footer/>
     </div>
   )
 }
 
 export default App
 