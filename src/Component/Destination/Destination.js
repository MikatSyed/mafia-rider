import React from 'react';
import { useState } from 'react';
import './Destination.css';
import vehicleData from '../../fakeData/data.json';
import { useParams } from 'react-router';

const Confirmation = () => {
    const {ride} = useParams()
    const currentRide = vehicleData.find(vehicle => vehicle.name === ride);
    const [form, setForm] = useState(true);
    const [user, setUser] = useState({

        place: '',
        place1: '',
        event:''

    })

    const handleSubmit = (e) => {
       
    e.prevantDefault();
     }

    const handleBlur = (e) => {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        // console.log(newUserInfo);
    }
    return (
        <div className="d-flex flex-row">
    <div className="formStyle">
            <form onClick={handleSubmit}>
                <img src={currentRide.picture} alt=""/>
                <h2>Select Place</h2>
                <br />
                <h4>From</h4>
                <input type="text" name="place" className="style1"  onBlur={handleBlur} placeholder="Starting"></input>
                <br />
                <h4>To</h4>
                <input type="text" name="place1"  className="style1" onBlur={handleBlur} placeholder="Destination"></input>
                <br />
                <h4>Date</h4>
                <input type="date" name="event" className="style1" onBlur={handleBlur}  placeholder="Date"></input>
                <br/>
                <input type="submit" className="btn btn-success" value="Search" ></input>
          </form>
    
            <form>
            <p>From:{user.place} To:{user.place1} <br/>Date: {user.event} </p>
            </form>
            </div>

            <div>
       
            <iframe width="100%" height="250px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=CDA%20Market,%20Pahartali,%20Chittagong+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

        </div>

              
        </div>
        
    
    );
};

export default Confirmation;