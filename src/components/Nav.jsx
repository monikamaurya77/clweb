import React,{useContext} from 'react'
import { AuthContext } from './ContextAPI/context';
import './Nav.css';
import {Link, useNavigate} from 'react-router-dom';

const Nav = () => {

const {setIsLoggedIn} = useContext(AuthContext);

const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <div className="nav">
        <div id="title">
            <h2>React Context</h2>
        </div>
        <div id="menu">
            <Link id="a" to="/">Home</Link>
            <Link id="a" to="/technologies">Technologies</Link>
            
            <Link id="a" to="/profile">Profile</Link>
            <Link id="a" to="/products">Products</Link>
            <Link id="a" to="/contactus">Contact Us</Link>
            <button onClick={handleLogOut}>Logout</button>
            < span style={{marginLeft:"30px", color:"yellow", fontSize:"1.1rem"}}>
              <b>Monika</b>
            </span>
        </div>
    </div>
  )
  }

export default Nav;