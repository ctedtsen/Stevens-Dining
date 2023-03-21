import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Italia = () => {
    let location = {
        name: "Piccola Italia",
        description: "At Piccola Italia serves traditional itallian food, including flatbread pizzas, calzones, sandwiches, pasta, and more!",
        location: "UCC Marketplace",
        hours: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday; 11:00 AM to 8:00 PM",
        crowd_fav: "Cheese Pizza",
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
export default Italia;