import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
     paddingTop: theme.spacing(20),
     paddingBottom: theme.spacing(20),
     backgroundColor: "#5d7af8",
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
   } 
}));

export default function MiddleHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      <Grid container spacing={2}>
       <Grid item xs={12}>
          <Typography variant="h1" component="h1" className={classes.headertext}>Padel Things <br></br>Visuellt, onödigt och fruktansvärt roligt!</Typography>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}