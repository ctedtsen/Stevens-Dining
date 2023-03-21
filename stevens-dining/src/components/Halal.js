import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Halal = () => {
    let location = {
        name: "Halal Stall",
        description: "Celebrate Afghan cuisine at the Halal Stall. Here, customers can cutomize their meal, with choices between bowls, salads, and pitas, and even more choices for the proteins and toppings.",
        location: "UCC Marketplace",
        hours: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday; 11:00 AM to 11:59 PM",
        crowd_fav: "Pita with Chicken Schwarma",
        rating: "5"
    }
    return(
        <div>
            <h1>{location.name}</h1>
            <p>{location.description}</p>
            <ul>
                <p>Customer Rating: {location.rating}</p>
                <p>Customer Fav: {location.crowd_fav}</p>
                <p>Hours: {location.hours}</p>
                <p>Location: {location.location}</p>
            </ul>
            <h3>Menu</h3>
            <Link to="/">Home</Link>
        </div>
    );
}
export default Halal;