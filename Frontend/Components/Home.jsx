import React from 'react'
import '../Styles/Home.css'
const Home = () => {
  return (
    <div className='home section'>
      <div className="left sub-section">
        <div className="hola intro">Hola amigo!</div>
        <div className="myself intro">Welcome to my <br />portfolio.</div>
        <div className='welcome intro'>My projects, achievements, coding profiles...
          all at one place!
        </div>
      </div>
      <div className="right sub-section">
        <img src="./src/assets/1000055310.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home
