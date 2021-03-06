import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  root: {
     paddingBottom: theme.spacing(3),
    },
    personhead: {
      marginLeft: theme.spacing(2),
      fontSize: "3rem",
      color: "#57dfce",
      [theme.breakpoints.down('sm')]: {
         fontSize: "3rem",
         marginLeft: theme.spacing(0),
         marginTop: theme.spacing(2),
       },
     },
   headertext: {
      fontWeight: 600,
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "4rem",
      color: "#282e4c",
      textAlign: "center",
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
         fontSize: "3rem",
       },
   } 
}));

export default function PersonasHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      <Grow in={true} timeout={2000}>
      <Grid container spacing={2}>
       <Grid item xs={12}>
          <Typography variant="h1" component="h1" className={classes.headertext}>Padel Personas</Typography>
        </Grid>
      </Grid>
      </Grow>
      </Container>
    </div>
  );
}