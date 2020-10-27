import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import Personas from './personas';
import PersonasHeader from './personasHeader';

const backgroundTwo = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/padelballbg.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundTwo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "10rem",
    paddingTop: "4rem",
    
    [theme.breakpoints.down('md')]: {
      
     },
    },
    card: {
      background: "linear-gradient(0deg, rgba(111,111,251,1) 0%, rgba(99,100,255,1) 100%)",
      color: "#fff",
      padding: theme.spacing(2),
      borderRadius: 10,
      marginTop: theme.spacing(2),
      },
}));

export default function SecondForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
         <Grid container spacing={2} justify="center">
            <Grid item md={12} xs={12}>
                  <PersonasHeader/>
                  <Personas/>
            </Grid>
         </Grid>
      </Container>
    </div>
  );
}