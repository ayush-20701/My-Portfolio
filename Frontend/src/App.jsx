import { useRef } from 'react'
import Footer from '../Components/Footer'
import Home from '../Components/Home'
import Honors from '../Components/Honors'
import Leetcode from '../Components/Leetcode'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import TechStack from '../Components/TechStack'
import './App.css'

function App() {
  const skillRef = useRef(null)
  const projectsRef = useRef(null)
  const lcRef = useRef(null)
  const honorsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <div className='app'>
      <div className="layer">
        <Navbar 
          onSkillClick={()=> scrollTo(skillRef)}
          onProjectsClick={()=> scrollTo(projectsRef)}
          onLcClick={()=> scrollTo(lcRef)}
          onHonorsClick={()=> scrollTo(honorsRef)}
          onContactClick={()=> scrollTo(contactRef)}
        />
      </div>
      <Home/>
      <TechStack ref = {skillRef}/>
      <Projects ref = {projectsRef}/>
      <Honors ref = {honorsRef}/>
      <Footer ref = {contactRef}/>
    </div>
  )
}

export default App