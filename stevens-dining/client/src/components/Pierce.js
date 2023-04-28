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

const Pierce = () => {
    let location = {
        name: "Pierce Dining Hall",
        description: "Pierce Dining Hall serves breakfast, lunch, and dinner, having different items on different days.",
        location: "Howe Center",
        hours: "Monday - Sunday: 7 am - Midnight",
        busyHours: "6 pm - 8 pm",
        crowd_fav: "Breakfast",
        rating: "1",
        menu: [
            "https://www.stevensdining.com/webtrition-pierce-dining-hall/",
        ],
        img: "https://www.stevensdining.com/wp-content/uploads/2020/08/Pierce-Photo-scaled-e1620153827402.jpg",
        link: "/pierce",
        id: 6
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
                <dt className='title'>Busy Hours:</dt>
                {location.busyHours? (
                  <dl>{location.busyHours}</dl>
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
                  <dl>Pierce's menu can be found <Link to={location.menu[0]} className='link'>here</Link></dl>
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
export default Pierce;