import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar_container'>
            <Link to="">My Info</Link>
            <button className='logout_btn'>Logout</button>
        </div>
    );
};

export default Sidebar;