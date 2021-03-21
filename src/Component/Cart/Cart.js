import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const{picture,name,id}=props.ride;
    return (
        
        //     <div className="cart">
        //     <Link to={`login/form/${name}`}>
        //     <img src={picture} alt="" style={{height:'200px',width:'200px'}}/><br/>
        //     <p> {name}</p>    
            
        //     </Link> 
    
        // </div>
                     
        <div className = "col mt-5"> 
        <div className = "card h-100"> 
        <img style = {{width: '50%', margin:' auto '}} src = {picture} className = "card-img-top" alt = "..." /> 
         <div class = "card-body"> <br/> 
         <h3 className = "card-title text-center">  {name}  </h3> 
         </div>
          </div> 
          </div>
          

    
    );
};

export default Cart;