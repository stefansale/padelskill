import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SportsBaseballRoundedIcon from '@material-ui/icons/SportsBaseballRounded';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {
     },
     dividercolor: {
      backgroundColor: theme.palette.common.white,
      opacity: 0.3,
    },
   listitem: {
     display: 'flex',
     lineHeight: 1,
     margin: "auto",
     },

     listitemlast: {
      display: 'flex',
      lineHeight: 1,
      marginBottom: theme.spacing(2),
      },

   levelicon: {
     marginRight: theme.spacing(2),
   },
   level: {
     marginRight: theme.spacing(2),
   },
   middlefix: {
      margin: "auto",
    },
   leveldesc: {
      margin: "auto 0",
      lineHeight: 1.5,
      textAlign: "left",
      [theme.breakpoints.up('md')]: {
         marginLeft: theme.spacing(2),
       },
   },

 }));

export default function LevelTable() {
   const classes = useStyles();

     return (
         <div className={classes.root}>
            <Grid container spacing={2} className={classes.middlefix}>

            <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
            <h5 className={classes.leveldesc}>Nivå:</h5>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Beskrivning:</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>1</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Aldrig hållit ett racket.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>2</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Nybörjare. Håller på att lära dig grunderna i padel.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>3</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Nybörjare avancerad. Känner till grunderna men smashar bollen för agressivt likt legenden Alex Laurén.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>4</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Fritidsspelare. Spelat ett tag och känner grunderna väl men har problem att hålla kvalitén uppe likt Martin Schönberg en sen söndagskväll.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>5</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Genomsnitt. Har spelat ett par år och, även om det inte någon supertalang, får du bollen över nätet för det mesta och med rimlig kraft. Serva / släpp och liknande kan fortfarande vara inkonsekvent.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>6</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Genomsnittligt avancerat. Som nivå 5 men med bättre smash och specialskott. Också mer konsekvent och mer kontroll.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>7</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Erfaren. Kan försvara och vända spelet mot motståndaren. Kan upprätthålla trycket på motståndaren med tunga volleys och bygga upp och slå vinnare. Förutom matcher har du antagligen börjat med specifika padelövningar.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>8</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Skicklig. Du behärskar alla de tekniska och taktiska delarna av spelet. Kan läsa spelet och använda olika taktiska element beroende på motstånd. Du är förmodligen bland de bästa spelarna i din klubb och utövar padel regelbundet, troligtvis med tränare.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>9</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Expert. Tillhör det absolut bästa och behärskar spelet på högsta nivå och kan spela nationella tävlingar med bra resultat.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>10</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Som Fernando Belasteguín, Paquito Navarro, Daniel Windahl eller någon liknande i sin storhetstid men bättre.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>11</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitem}>
                  <h5 className={classes.leveldesc}>Förknippar sig själv som Zlatan. Padelbanan hedras av din närvaro.</h5>
               </Grid>
               <Grid item xs={12}>
               <Divider light="false" variant="middle" className={classes.dividercolor}/>
               </Grid>

               <Grid item md={1} sm={2} xs={3} className={classes.listitem}>
                  <SportsBaseballRoundedIcon fontSize="medium" className={classes.levelicon}/>
                  <h2 className={classes.level}>12</h2>
               </Grid>
               <Grid item md={11} sm={10} xs={9} className={classes.listitemlast}>
                  <h5 className={classes.leveldesc}>Du är gud. Slår inga felslag och vinner alla matcher med 2-0 i set utan att förlora ett poäng. Magnifik!</h5>
               </Grid>
               

               
            </Grid>
         </div>
     );
   }