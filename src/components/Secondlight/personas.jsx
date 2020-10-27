import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardPersonas from './CardPersonas';


const personasOne = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/tanken.svg";
const personasTwo = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/riddaren.svg";
const personasThree = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/angel.svg";
const personasFour = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/doden.svg";
const personasFive = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/zombie.svg";


const useStyles = makeStyles((theme) => ({
   root: {
      marginTop: theme.spacing(4),
     },
     
   listitem: {
     display: 'flex',
     lineHeight: 1,
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
   leveldesc: {
      margin: "auto 0",
      lineHeight: 1.5,
      textAlign: "left",
      [theme.breakpoints.up('md')]: {
         marginLeft: theme.spacing(2),
       },
   },

 }));

export default function Personas() {
   const classes = useStyles();

     return (
         <div className={classes.root}>
            <Grid container spacing={2} justify="center">

            <Grid item>
               <CardPersonas
               imageurl={personasOne}
               headline="Tanken"
               description="En tank rör sig sparsamt över banan. Har sin styrka vid baslinjen och har ofta tunga forehandslag och god precision i lobbarna. Tanken smashar inte så ofta, men när den väl gör det sker det med kraft."/>
            </Grid>
            <Grid item>
               <CardPersonas
               imageurl={personasTwo}
               headline="Riddaren"
               description="En riddare har god fysik, snabba fötter och en outtröttlig spelstil. Riddaren gillar att fäktas framme vid nät och försöker ofta avgöra bollen tidigt. Tålamod och teknik är riddarens svaghet, men det kompenseras alltid av gnet och extrem vilja."/>
            </Grid>
            <Grid item>
               <CardPersonas
               imageurl={personasThree}
               headline="Ängeln"
               description="Ängeln är spelaren alla vill känna... utanför planen. Ängeln är en medioker padelspelare, men bidrar med sin varma närvaro. Ängeln spelar inte alltid för att vinna, utan för att ha kul. Banbokning, färdkost, klappar på axeln - Ängeln är en personen du vill ha i ditt padelliv."/>
            </Grid>
            <Grid item>
               <CardPersonas
               imageurl={personasFour}
               headline="Körkarlen"
               description="Körkarlen är en spelare som långa stunder håller låg profil, för att sedan dyka upp och chockera med sina dödande slag. Tekniken och rörligheten är en enorm svaghet, men när en motståndare blottar sin svaghet är Körkarlen där och utnyttjar situationen."/>
            </Grid>
            <Grid item>
               <CardPersonas
               imageurl={personasFive}
               headline="Zombie"
               description="Körkarlen är en spelare som långa stunder håller låg profil, för att sedan dyka upp och chockera med sina dödande slag. Tekniken och rörligheten är en enorm svaghet, men när en motståndare blottar sin svaghet är Körkarlen där och utnyttjar situationen."/>
            </Grid>
               
            </Grid>
         </div>
     );
   }