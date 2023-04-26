import React,{useState,useEffect} from 'react';
import "./Products.css"
import {Link} from 'react-router-dom';

const Products = () => {

const [products, setProducts]  = useState([]);

useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        setProducts(data);
    })
},[])

    return(
        <div style={{padding:"30px"}}>
        <h2 style={{color:"blue"}}>Product</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, dicta sit nisi impedit doloremque neque quae consectetur consequatur distinctio at ipsum sapiente rerum excepturi. Ea quas veniam saepe harum reiciendis debitis adipisci soluta dolore corporis, magnam eveniet sint sunt dolorem accusantium voluptates repellat. Quasi minus dignissimos fugiat. Accusantium molestias nostrum iusto modi expedita! Totam libero dolorem maiores dicta non, fugit labore quos aliquid. Praesentium porro, reiciendis doloremque, accusantium voluptate modi iste expedita dolores illum, enim pariatur fugit? Veniam neque deleniti culpa nisi fugiat? Tempore, vero quam. Facilis possimus aliquam cum placeat eius ipsum minima? Quibusdam fugiat quas distinctio officia a?</p>
        
        {
            products.length > 0 ? (<div   className="container">
  {
    
            products.map((product,index)=>{
                return(
                <div className="card" key={index}>
                    <img src={product.image} width="200" height="200"/>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                <Link to={`/productdetails/${product.id}`}>
                    <button>Product Details</button>
                    </Link>
                </div>
                )
               
            })
        }
            </div>
            ) : (
            <h2 style={{color:"red",textAlign:"center",marginTop:"100px"}}>No Products to Display!☹️</h2>
            )
        }
      
        </div>
    )
}

export default Products;