import Footer from '../Components/Footer'
import Home from '../Components/Home'
import Honors from '../Components/Honors'
import Leetcode from '../Components/Leetcode'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import TechStack from '../Components/TechStack'
import './App.css'

function App() {
  
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <TechStack/>
      <Projects/>
      <Honors/>
      <Leetcode/>
      <Footer/>
    </div>
  )
}

export default App