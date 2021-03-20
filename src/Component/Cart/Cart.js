import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const{picture,name}=props.ride;
    return (
        <div >
            <div className="cart">
            <img src={picture} alt="" style={{height:'200px',width:'200px'}}/><br/>
            <button>Details</button>
            </div>
            
           

        </div>
    );
};

export default Cart;