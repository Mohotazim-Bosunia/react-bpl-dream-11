import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <Header></Header>
     <Players></Players>
     <Footer></Footer>
     
    </>
  )
}

export default App
