import React,{useState, useContext} from 'react';
import { AuthContext } from './ContextAPI/context'

const style ={
  width: "400px",
  boxShadow: "0 0 10px black",
  padding: "40px",
  margin: "170px auto",
  textAlign: "center",
}

const Login = () => {

  const {setIsLoggedIn} = useContext(AuthContext);

  const [user, setUser] = useState(
    {
      name:"",
      password:""
    }
  )

  const handleAuthentication = () => {
    if(user.name=== "Monika" && user.password=== "M@123" || user.name === "admin" && user.password === "a@123"){
      setIsLoggedIn(true);
    }else{
      alert("Enter Proper Credentials!");
  }
}

  return (
    <div style={style}>
      <h3>Login Form </h3><br/>
        <div>
            <input type="text" placeholder="Enter UserName"  onChange={
              (e)=>{
                setUser(
                 {
                  ...user,
                  name : e.target.value
                 }
                )
              }
            }/>
        </div><br/>
        <div>
            <input type="password" placeholder="Enter Password" onChange={
              (e)=>{
                setUser({
                  ...user,
                  password : e.target.value
                }
                 
                )
              }
            }/>
        </div><br/>
        <div>
            <button onClick={handleAuthentication}>Log In</button>
        </div>
    </div>
  )
}

export default Login;