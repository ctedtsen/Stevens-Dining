import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Sono = () => {
    let location = {
        name: "Sono",
        description: "Celebrate Latin American cuisine at Sono. At Sono you can enjoy burritos, quesadillas, tacos, bowls, and more! You are able to design your own meal from a selection of proteins, bean, rice, sauces, and toppings.",
        location: "UCC Marketplace",
        hours: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday; 11:00 AM to 8:00 PM",
        crowd_fav: "Chicken Burrito",
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
export default Sono;