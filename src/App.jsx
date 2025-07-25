import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/Home'
import Main from './components/main'

const App = () => {
  return (
    <>
    <nav><Navbar/></nav>
  
    <main>
      <Main/>
    </main>

    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default App