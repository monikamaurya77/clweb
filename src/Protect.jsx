import { useContext } from "react";
import { AuthContext } from "./components/ContextAPI/context";
import { Navigate } from "react-router-dom";

function Protect({children}){
    const {isLoggedIn} = useContext(AuthContext);
    if(isLoggedIn){
        return children
    }else{
        return <Navigate to="/"/>
    }
}

export default Protect;
