import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const America = () => {
    let location = {
        name: "America's Cup",
        description: "At America's Cup, you can stop by the Starbucks for snacks and a coffe, or head over to Create for sandwiches and salads.",
        location: "Library",
        hours: "Monday, Tuesday, Wednesday, Thursday, Friday; 9:00 AM to 5:00 PM",
        crowd_fav: "Chicken Salad",
        rating: "4"
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
export default America;