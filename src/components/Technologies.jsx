import React from 'react';
import "./Technologies.css";
import {Link, Outlet} from 'react-router-dom';

const Technologies = () => {
  return (
    <div className="tech-container">
        <div className="left-panel">
        <Link className="link" to="html">HTML</Link>
        <Link className="link" to="css">CSS</Link>
        <Link className="link" to="js">JavaScript</Link>
        <Link className="link" to="react">React</Link>
        </div>
        <div className="right-panel" >
        <Outlet/>
        
        </div>
    </div>
  )
}

export default Technologies;