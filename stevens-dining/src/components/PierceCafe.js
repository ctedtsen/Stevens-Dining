import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const PierceCafe = () => {
    let location = {
        name: "Piercwe Cafe",
        description: "Pierce Cafe serves coffees, sandwiches, and snacks, including muffins and other pastries.",
        location: "Howe Center Second Floor",
        hours: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday; 11:00 AM to 5:00 PM",
        crowd_fav: "Coffee",
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
export default PierceCafe;