import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='dashboard_page' id='home'>
        
      <div className='dashboard_content'>
        <div className="dashboard_cards">

          <Link to="/condition" className="card">
            <h2>Conditional Statement</h2>
            <p>Learn about conditional statement such as if or if else</p>
          </Link>
          <Link to="/looping" className="card">
            <h2>Looping</h2>
            <p>Learn about looping through an array such as for loop, do while, for each and etc.</p>
          </Link>
          <Link to="/array" className="card">
            <h2>Array</h2>
            <p>Learn about Arrays on how to add and remove using array method</p>
          </Link>
           <Link to="/method" className="card">
            <h2>Method</h2>
            <p>Learn about different method like filter, map, reduce and others</p>
          </Link>
          <Link to="" className="card">
            <h2>SQL (Structure Query Language)</h2>
            <p>Learn about advanced SQL syntax and command query</p>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Dashboard