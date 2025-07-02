import './Home.css';
import React from 'react'
import About from './About'
import Technology from './Technology'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <div className='home_page'>
        <Dashboard/>
        <About/>
        <Technology/>
        <h1>MY PROJECT TWO</h1>
    </div>
  )
}

export default Home
