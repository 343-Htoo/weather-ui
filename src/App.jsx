import React from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
     <Header/>
     <Body/>
     <Footer/>
    </div>
  )
}

export default App