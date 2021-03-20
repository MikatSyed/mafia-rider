
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';
import riderData from '../src/fakeData/data.json'



function App() {
 const [rides,setRides] = useState([]);
 useEffect(()=> {
   setRides(riderData);
   console.log(riderData);

 });
 
  return (
    <div >
     <Header></Header>
     {
       rides.map(ride=><Cart ride={ride}></Cart>)
     }
    </div>
  );
}

export default App;
