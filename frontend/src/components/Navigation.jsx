import React, { useEffect } from 'react';
import './Navigation.css';
import { assets } from '../Assets/images';
import { Link, useNavigate } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';
import { useReference } from '../context/HandleClickoutside';
import { useSidebar } from '../context/SidebarContext';

const Navigation = () => {
    const navigate =  useNavigate();
    const {setOpenSidebar} = useSidebar();
    const {activeMenu,setActiveMenu, show, setShow} = useNavigation()
    const {openProfile} = useReference()

    const toOpenLogin = () => {
        navigate("/login");
    }
 
  

   
  return (
   <>
        <div className='navigation'>
            <Link to="/" className="content_left">
                <div className="burger_btn" onClick={()=>setOpenSidebar(true)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <h1>E-Learning <span>Module</span></h1>
            </Link>
            <div className="content_right">
                <ul>
                    <li>


                        
                        <Link className={activeMenu === 'home' ? 'active' : '' } onClick={(()=>setActiveMenu('home'))} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={activeMenu === 'about' ? 'active' : '' } onClick={(()=>setActiveMenu('about'))} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={activeMenu === 'tech' ? 'active' : '' } onClick={(()=>setActiveMenu('tech'))} to="/tech">Technology</Link>
                    </li>
                     <li>
                        <Link className={activeMenu === 'admin' ? 'active' : '' } onClick={(()=>setActiveMenu('admin'))} to="/admin">Admin</Link>
                    </li>
                </ul>
                {show ? <img onClick={openProfile} src={assets.profile} alt="" /> : <button className='login_btn' onClick={toOpenLogin}>Login</button>} 
            </div>
        </div>

   </>
  )
}

export default Navigation