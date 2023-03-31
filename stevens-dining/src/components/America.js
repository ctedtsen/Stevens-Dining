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

const America = () => {
    let location = {
        name: "America's Cup",
        description: "At America's Cup, you can stop by the Starbucks for snacks and a coffe, or head over to Create for sandwiches and salads.",
        location: "Library",
        hours: "Monday - Friday: 9 am - 6 pm (Starbucks), 11 am - 6 pm (Create)",
        crowd_fav: "Chicken Salad",
        rating: "4",
        menu: [
            "https://www.stevensdining.com/wp-content/uploads/2022/09/8.jpg",
            "https://www.stevensdining.com/wp-content/uploads/2022/09/5.jpg"
        ], 
        img: "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmviowpldu823%2F6kglSEkQkhgKD8aJd88b8r%2Ffe1f30df06c4f862c701d8919e8d6057%2FCampus_Public_Spaces__5_.png%3Fw%3D640%26h%3D360%26f%3Dcenter%26q%3D80%26fit%3Dfill&w=2400&q=80",
        link: "/america",
        id: 1
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
              <br/>
              <div>
                {location.menu? (
                  <img src={location.menu[1]} className="img" alt="menu" />
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
export default America;