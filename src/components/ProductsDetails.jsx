import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

const ProductDetails = () =>{

    const {id} = useParams();
    const [state, setState] = useState({
        id: 0,
        title: "",
        category:"",
        image: "",
        price: 0,
        rating: "",
        description: ""
    });

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
           console.log(data);
            setState(data);
        })
    },[])

    return(
        <div style={{textAlign:"center", marginTop:"40px", padding:"0 100px"}}>
        <h1>{state.category}</h1>
        <img src={state.image} width={300} height={300}/>
        <h3>{state.title}</h3>
        <h2 style={{color:"red"}}>${state.price}</h2>
        <h3 style={{color:"green"}}>Rating: {state.rating.rate}</h3>
        <p style={{color:"blue", fontSize:"16px"}}>Count: {state.rating.count}</p>
        <p style={{fontSize:"18px"}}>{state.description}</p>

        </div>
    )
}

export default ProductDetails;