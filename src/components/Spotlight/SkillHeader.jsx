import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import SportsBaseballRoundedIcon from '@material-ui/icons/SportsBaseballRounded';


const useStyles = makeStyles((theme) => ({
  root: {
     paddingBottom: theme.spacing(4),
    },
    ball: {
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
      color: "#6364ff",
      textAlign: "center",
      [theme.breakpoints.down('sm')]: {
         fontSize: "3rem",
       },
   } 
}));

export default function SkillHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      <Grid container spacing={2}>
       <Grid item xs={12}>
          <Typography variant="h1" component="h1" className={classes.headertext}>Padel Nivå<SportsBaseballRoundedIcon className={classes.ball}/></Typography>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}