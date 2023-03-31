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

const PierceCafe = () => {
    let location = {
        name: "Piercwe Cafe",
        description: "Pierce Cafe serves coffees, sandwiches, and snacks, including muffins and other pastries.",
        location: "Howe Center Second Floor",
        hours: "Monday - Friday: 8 am - 8 pm, Saturday - Sunday: 8 am - 6 pm",
        crowd_fav: "Coffee",
        rating: "3",
        menu: [
            "https://www.stevensdining.com/wp-content/uploads/2022/09/17.jpg",
            "https://www.stevensdining.com/wp-content/uploads/2022/09/16.jpg",
            "https://www.stevensdining.com/wp-content/uploads/2022/09/14.jpg",
            "https://www.stevensdining.com/wp-content/uploads/2022/09/15.jpg",
        ],
        img: "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmviowpldu823%2FOUV8PdrYVTyR4E6N43zrl%2F16a1cffae8f6a3b915cac1e35355c4c9%2FDSCF1308.jpg%3Fw%3D640%26h%3D360%26f%3Dcenter%26q%3D80%26fit%3Dfill&w=2400&q=80",
        link: "/piercecafe", 
        id: 7
    }
    return(
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
              borderBottom: '1px solid#bf1c1c',
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
              <br/>
              <div>
                {location.menu? (
                  <img src={location.menu[1]} className="img" alt="menu" />
                ) : (
                  <dl>N/A</dl>
                )}
              </div>
              <br/>
              <div>
                {location.menu? (
                  <img src={location.menu[2]} className="img" alt="menu" />
                ) : (
                  <dl>N/A</dl>
                )}
              </div>
              <br/>
              <div>
                {location.menu? (
                  <img src={location.menu[3]} className="img" alt="menu" />
                ) : (
                  <dl>N/A</dl>
                )}
              </div>
            </dl>
            <Link to='/' className='card-link'>Home</Link>
          </Typography>
        </CardContent>
      </Card>
    );
}
export default PierceCafe;