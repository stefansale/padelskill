import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Link, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
     paddingTop: theme.spacing(3),
     paddingBottom: theme.spacing(3),
     backgroundColor: "#282e4c",
     [theme.breakpoints.only('xs')]: {
      display: "none",
    },
    },
     navspacing: {
      display: "flex",
      justifyContent: "space-evenly",
     },
     dividercolor: {
      backgroundColor: "#fff",
     },
   headertext: {
      fontWeight: 600,
      justifyContent: "space-between",
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "1.3rem",
      color: "#fff",
      textAlign: "center",
      transition: "all .3s ease-in-out",
      '&:hover': {
        color: "#9cffd4",
      },
      [theme.breakpoints.down('xs')]: {
         fontSize: "0.8rem",
       },
   }
}));

export default function TopHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      <Grid container spacing={2}>
       <Grid item xs={12} className={classes.navspacing}>
       
          <div>
          <Link href="/nivaer" color="inherit" className={classes.headertext} underline="none">
            {'Nivåer'}
          </Link></div><Divider orientation="vertical" className={classes.dividercolor}/>
          <div><Link href="/personas" color="inherit" className={classes.headertext} underline="none">
            {'Personligheter'}
          </Link></div><Divider orientation="vertical" className={classes.dividercolor}/>
          <div><Link href="/poangtavlan" color="inherit" className={classes.headertext} underline="none">
            {'Poängtavlan'}
          </Link></div> 
       
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}