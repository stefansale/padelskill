import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import HomeHeader from './HomeHeader';
import HomeMiddle from './HomeMiddle';



const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7rem",
    marginBottom: "0rem",
    [theme.breakpoints.only('xs')]: {
      paddingTop: "2.5rem",
    },
    
    },
    card: {
      background: "#5d7af8",
      color: "#fff",
      padding: theme.spacing(2),
      borderRadius: 10,
      marginTop: theme.spacing(2),
      },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
   <>
    <div className={classes.root}>
      <Container>
         <Grid container spacing={2} justify="center">
            <Grid item md={10} xs={12}>
                  <HomeHeader/>
            </Grid>
         </Grid>
      </Container>
    </div>
    <HomeMiddle />
   </>
  );
}