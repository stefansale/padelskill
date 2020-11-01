import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  root: {
     paddingBottom: theme.spacing(2),
    },
    ball: {
      marginLeft: theme.spacing(2),
      fontSize: "3rem",
      color: "#57dfce",
      textAlign: "center",
      [theme.breakpoints.down('sm')]: {
         fontSize: "2.5rem",
         marginLeft: theme.spacing(2),
         marginTop: theme.spacing(2),
       },
     },
   headertext: {
      fontWeight: 600,
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "4rem",
      color: "#282e4c",
      textAlign: "center",
      [theme.breakpoints.down('sm')]: {
         fontSize: "3rem",
         textAlign: "center",
       },
   },
   headertext2: {
      fontWeight: 600,
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "2rem",
      color: "#282e4c",
      textAlign: "center",
      [theme.breakpoints.down('sm')]: {
         fontSize: "1.5rem",
         textAlign: "center",
       },
   } 
}));

export default function HomeHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grow in={true} timeout={2000}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h2" className={classes.headertext2}>Välkommen till</Typography>
              <Typography variant="h1" component="h1" className={classes.headertext}>Padel Things</Typography>
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </div>
  );
}