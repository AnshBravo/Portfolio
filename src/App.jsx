import { useState } from 'react'
import Navbar from "./components/Navbar";
import HeroSection from './components/Herosection';
import Skills from './components/Skillssection';
import Projects from './components/Projects';
import Contact from './components/Contactme';
function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      

    </div>
    
    
  )
}

export default App
