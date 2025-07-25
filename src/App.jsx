import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/Home'

const App = () => {
  return (
    <>
    <nav><Navbar/></nav>
  
    <main>
      <Home/>
    </main>

    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default App