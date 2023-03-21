import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Grill = () => {
    let location = {
        name: "Grill Nation",
        description: "Grill Nation has a variety of American Cuisine, including burgers, hcicken tenders, and more. Customers have the ability to customize burgers and sandwiches in many ways.",
        location: "UCC Marketplace",
        hours: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday; 11:00 AM to 11:59 PM",
        crowd_fav: "Burger",
        rating: "2"
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
export default Grill;