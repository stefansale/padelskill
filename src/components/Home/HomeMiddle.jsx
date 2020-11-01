import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const background = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/padelHome.svg";

const useStyles = makeStyles((theme) => ({
  root: {
     
     paddingTop: theme.spacing(10),
     paddingBottom: theme.spacing(10),
     [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    },
    ball: {
      marginLeft: theme.spacing(2),
      fontSize: "1.5rem",
      color: "#57dfce",
      [theme.breakpoints.down('sm')]: {
         fontSize: "1rem",
         paddingTop: theme.spacing(10),
         paddingBottom: theme.spacing(10),
         marginLeft: theme.spacing(0),
         marginTop: theme.spacing(2),
       },
     },
   headertext: {
      fontWeight: 600,
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "1.8rem",
      color: "#fff",
      textAlign: "center",
      [theme.breakpoints.down('sm')]: {
         fontSize: "1.5rem",
       },
   },
   imagee: {
      minWidth: 550,
      maxHeight: 550,
      [theme.breakpoints.only('xs')]: {
         minWidth: 220,
         maxHeight: 220,
       },
      [theme.breakpoints.only('sm')]: {
      minWidth: 380,
      maxHeight: 380,
      },
      [theme.breakpoints.only('md')]: {
         minWidth: 470,
         maxHeight: 470,
         },
      },
}));

export default function HomeMiddle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      <Grid container spacing={2}>
       <Grid item xs={12}>
       <div><img src={background} alt="Home background" className={classes.imagee}/></div>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}