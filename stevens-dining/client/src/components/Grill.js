import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import noImage from '../img/no_image.png'

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardHeader
  } from '@mui/material';

const Grill = () => {
    let location = {
        name: "Grill Nation",
        description: "Grill Nation has a variety of American Cuisine, including burgers, hcicken tenders, and more. Customers have the ability to customize burgers and sandwiches in many ways.",
        location: "UCC Marketplace",
        hours: "Monday - Sunday: 7 am - Midnight",
        crowd_fav: "Burger",
        rating: "2",
        menu: [
            "https://www.stevensdining.com/wp-content/uploads/2022/09/18.jpg"
        ],
        img: "https://www.stevensdining.com/wp-content/uploads/2022/09/1-1-e1663099635784.jpg",
        link: "/grill", 
        id: 3
    }
    return(
      <div>
        <br/>
        <Card 
        variant='outlined'
        sx={{
          maxWidth: 550,
          height: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 5,
          border: '1px solid #bf1c1c',
          boxShadow:
            '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
        }}
      >
        <CardHeader
          title={location.name}
          sx={{
            borderBottom: '1px solid #bf1c1c',
            fontWeight: 'bold'
          }}
        />
        <CardMedia
          component='img'
          image={
            location.img
              ? location.img
              : noImage
          }
          title='location image'
        />

        <CardContent>
          <Typography
            variant='body2'
            color='textSecondary'
            component='span'
            sx={{
              borderBottom: '1px solid #bf1c1c',
              fontWeight: 'bold'
            }}
          >
            <dl>
              <div>
                <dt className='title'>Description:</dt>
                {location.description? (
                  <dl>{location.description}</dl>
                ) : (
                  <dl>N/A</dl>
                )}
              </div>
              <div>
                <dt className='title'>Location:</dt>
                {location.location? (
                  <dl>{location.location}</dl>
                ) : (
                  <dl>N/A</dl>
                )}
              </div>
              <div>
                <dt className='title'>Hours:</dt>
                {location.hours? (
                  <dl>{location.hours}</dl>
                ) : (
                  <dl>N/A</dl>
                )}
              </div>
              <div>
                <dt className='title'>Crowd Favorite:</dt>
                {location.crowd_fav? (
                  <dl>{location.crowd_fav}</dl>
                ) : (
                  <dl>N/A</dl>
                )}
              </div>
              <div>
                <dt className='title'>Menu:</dt>
                {location.menu? (
                  <img src={location.menu[0]} className="img" alt="menu" />
                ) : (
                  <dl>N/A</dl>
                )}
              </div>
            </dl>
            <Link to='/' className='card-link'>Home</Link>
          </Typography>
        </CardContent>
      </Card>
      </div>
    );
}
export default Grill;