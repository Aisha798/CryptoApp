import {Container, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Carousel from './Carousel';
import React from 'react'
const useStyles= makeStyles((theme) => ({
      banner: {
          backgroundImage: "url(./banner2.jpg)",
  
      },
      bannerContext: {
          height: 400,
          display:"flex",
          flexDirection:"column",
          paddingTop:25,
          justifyContent: "space-around",
      },
      tagline: {
          display: "flex",
          height: "40%",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        },
        carousel: {
          height: "50%",
          display: "flex",
          alignItems: "center",
        },
  }));

const Banner = () => {
  const classes= useStyles();

    return (
    <div className={classes.banner}>
      <Container className={classes.bannerContext}>
          <div className={classes.tagline}>
              <Typography variant="h2"  
              style={{
                  frontWeight:"bold",
                  marginBottom: 15,
                  fontFamily:"Montserrat",
              }}
              >
                  Crypto ReactApp
              </Typography>
  
              <Typography
              variant="subtitle2"
              style={{
                  color: "darkgrey",
                  textTransform:"capitalize",
                  fontFamily:"Monserrat",
              }}>
                Get all the Info regarding your favorite Crypto Currency
              </Typography>
          </div>
         <Carousel />
      </Container>
    </div>
    )
}

export default Banner