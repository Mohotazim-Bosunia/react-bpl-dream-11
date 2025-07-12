import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'

import Players from './components/Players/Players'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <Players></Players>
     <Footer></Footer>
     
    </>
  )
}

export default App
