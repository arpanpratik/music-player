import React from 'react';
import { Routes, Route } from "react-router-dom"
import './Header.css';
import GlobalSearch from '../../../GlobalSearch';
import Home from '../../../pages/Home';
import Podcast from '../../../Podcast';

const Header = () => {

  const songName= 'JHANKAR BEATS'  

  return (
    <nav>
        <div className='playlistHeader'>{songName}</div>
        <GlobalSearch />
        <Routes>
            {/* <Route path="/" element={ <Home/> } /> */}
            <Route path="about" element={ <Podcast /> } />            
        </Routes>
    </nav>   
    
  )
}

export default Header