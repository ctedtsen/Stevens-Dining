import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Gateway = () => {
    let location = {
        name: "Gateway Cafe",
        description: "At Gateway Cafe, you can get a Lavazza coffe as well as various snacks and meals, including paninis, yogurts parfaits, breakfast sandwhiches, and smoothies.",
        location: "Gateway North",
        hours: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday; 11:00 AM to 5:00 PM",
        crowd_fav: "Panini",
        rating: "3"
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
export default Gateway;