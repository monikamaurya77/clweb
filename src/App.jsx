import React, {useContext} from 'react';
import { AuthContext } from './components/ContextAPI/context';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom';
import Profile from './components/Profile';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import ProductDetails from './components/ProductsDetails';
import PageNotFound from './components/PageNotFound';
import Technologies from './components/Technologies';
import Html from './components/Html';
import Css from './components/Css';
import Js from './components/Js';
import CReact from './components/CReact';
import { Navigate } from 'react-router-dom';
import Protect from './Protect';

function App() {

  const {isLoggedIn} = useContext(AuthContext);
 
  return (
    <div>
     {/* {
      isLoggedIn ? (<>
      <Nav/>
      <Home/>
      </>) : (<Login/>)
     } */}

{
   isLoggedIn ? <Nav/> : null
}
     <Routes>
      <Route path="/" element={ isLoggedIn ? <Home/> : <Login/>}/>
      <Route path="/technologies" element={<Protect><Technologies/></Protect>} >
        <Route path="" element={<Navigate to="html"/>} />
      <Route path="html" element={<Html/>}/>
      <Route path="css" element={<Css/>}/>
      <Route path="js" element={<Js/>}/>
      <Route path="react" element={<CReact/>}/>
        </Route>
     
      <Route path="/products" element={<Protect><Products/></Protect>}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/contactus" element={isLoggedIn ? <ContactUs/> : <Navigate to="/"/>}/>
      <Route path="/productdetails/:id" element={isLoggedIn ? <ProductDetails/> : <Navigate to="/"/>}/>
      <Route path="*" element={isLoggedIn ? <PageNotFound/> : <Navigate to="/"/>}/>
     </Routes>

    </div>
  )
}

export default App
