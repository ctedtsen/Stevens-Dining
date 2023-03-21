import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Pierce = () => {
    let location = {
        name: "Pierce Dining Hall",
        description: "Pierce Dining Hall serves breakfast, lunch, and dinner, having different items on different days.",
        location: "Howe Center",
        hours: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday; 11:00 AM to 5:00 PM",
        crowd_fav: "Breakfast",
        rating: "1"
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
export default Pierce;