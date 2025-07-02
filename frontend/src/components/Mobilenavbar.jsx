import React from 'react';
import './Mobilenavbar.css';
import { Link } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

const Mobilenavbar = () => {
    const {setOpenSidebar} = useSidebar();
  return (
        <div className="navigation_two">
            <div className="close_bar" onClick={()=>setOpenSidebar(false)}>Exit</div>
             <div className='navigation_flex'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/tech">Technology</Link>
                    </li>
                </div>
        </div>
  )
}

export default Mobilenavbar