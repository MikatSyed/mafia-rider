import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import riderData from '../../fakeData/data.json';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [rides,setRides] = useState([]);
 useEffect(()=> {
   setRides(riderData);
   console.log(riderData);

 });
 
    return (
        <div style={{backgroundImage:`url("https://i.ibb.co/TPss75s/Bg.png")`,height:'480px'}}>
            

             <div className="row row-cols-1 row-cols-md-4 g-5 m-auto">
     {
       riderData.map(ride=><Link to={`/destination/from/${ride.name}`} ><Cart ride={ride} key={ride.id}></Cart></Link>)
     }
     </div>
        </div>
    );
};

export default Home;