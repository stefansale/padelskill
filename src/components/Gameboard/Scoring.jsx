import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography, Divider } from '@material-ui/core';
import { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const mixedImg = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/mixedTeams.svg";

const useStyles = makeStyles((theme) => ({
    '* >': {
      fontFamily: "'Orbitron', sans-serif !important",
     },
   listitem: {
     display: "flex",
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
   button_group: {
      BackgroundColor: theme.palette.common.white,
    },
   level: {
     marginRight: theme.spacing(2),
   },
   accordionBase: {
      borderRadius: 10,
      background: "transparent",
      boxShadow: "none",
      fontFamily: "'Orbitron', sans-serif !important",
    },
    homeaway: {
      color: "#fff",
      fontFamily: "'Orbitron', sans-serif !important",
    },
    homeaway2: {
      color: "#282e4c",
      fontFamily: "'Orbitron', sans-serif !important",
    },
   middlefix: {
      textAlign: "center",
      fontFamily: "'Orbitron', sans-serif",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      [theme.breakpoints.only('xs')]: {
         display: "flex",
         flex: "flex-wrap",
       },
    },
   leveldesc: {
      fontSize: "4rem",
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 600,
      lineHeight: 1.5,
      textAlign: "center",
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      [theme.breakpoints.only('xs')]: {
         fontSize: "3rem",
         marginTop: theme.spacing(4),
         marginBottom: theme.spacing(4),
       },
   },
   leveldescSet: {
      fontSize: "2.4rem",
      color: "#57dfce",
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 600,
      lineHeight: 1.5,
      textAlign: "center",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.only('xs')]: {
         fontSize: "1.8rem",
         marginTop: theme.spacing(1),
         marginBottom: theme.spacing(1),
       },
   },
   leveldesc2: {
      fontSize: "2rem",
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 600,
      lineHeight: 1.5,
      textAlign: "center",
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      [theme.breakpoints.only('xs')]: {
         fontSize: "1rem",
         marginTop: theme.spacing(1),
         marginBottom: theme.spacing(1),
       },
   },
   leveldesc3: {
      fontSize: "1.5rem",
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 600,
      textAlign: "center",
      padding: theme.spacing(0),
      [theme.breakpoints.only('xs')]: {
         fontSize: "0.8rem",
       },
   },
   leveldesc4: {
      fontSize: "1.5rem",
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 600,
      textAlign: "center",
      paddingTop: theme.spacing(2),
      [theme.breakpoints.only('xs')]: {
         fontSize: "0.8rem",
         paddingTop: theme.spacing(1),
       },
   },
   playerfield: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
   },
   versus: {
      margin: "auto",
      },
   card: {
      margin: "auto",
      background: "#282e4c",
      color: "#fff",
      padding: theme.spacing(0),
      borderRadius: 10,
      marginTop: theme.spacing(2),
      },
   card2: {
      margin: "auto",
      background: "#5d7af8",
      color: "#fff",
      padding: theme.spacing(0),
      borderRadius: 10,
      marginTop: theme.spacing(2),
      },

   card3: {
      borderRadius: 10,
      marginTop: theme.spacing(2),
      },
   
   imagee: {
      minWidth: 220,
      maxHeight: 220,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.only('xs')]: {
         minWidth: 170,
         maxHeight: 170,
       },
      },
      
   dividercolor: {
      backgroundColor: "#fff",
      },
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      },
   hideInfo: {
      display: "none",
      },
 }));

export default function Scoring() {
  const classes = useStyles();

  const [FirstLeft, setFirstLeft] = useState(0);
  const [FirstRight, setFirstRight] = useState(0);
  const [SecondLeft, setSecondLeft] = useState(0);
  const [SecondRight, setSecondRight] = useState(0);
  const [ThirdLeft, setThirdLeft] = useState(0);
  const [ThirdRight, setThirdRight] = useState(0);

  const [FirstPlayer, setFirstPlayer] = useState("-");
  const [SecondPlayer, setSecondPlayer] = useState("-");
  const [ThirdPlayer, setThirdPlayer] = useState("-");
  const [FourthPlayer, setFourthPlayer] = useState("-");
  
  const handleChangeFirstLeft = (event) => {setFirstLeft(event.target.value);};
  const handleChangeFirstRight = (event) => {setFirstRight(event.target.value);};
  const handleChangeSecondLeft = (event) => {setSecondLeft(event.target.value);};
  const handleChangeSecondRight = (event) => {setSecondRight(event.target.value);};
  const handleChangeThirdLeft = (event) => {setThirdLeft(event.target.value);};
  const handleChangeThirdRight = (event) => {setThirdRight(event.target.value);};

  const handleChangeFirstPlayer = (event) => {setFirstPlayer(event.target.value);};
  const handleChangeSecondPlayer = (event) => {setSecondPlayer(event.target.value);};
  const handleChangeThirdPlayer = (event) => {setThirdPlayer(event.target.value);};
  const handleChangeFourthPlayer = (event) => {setFourthPlayer(event.target.value);};
  
  const [check, setCheck] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(true);
  const [checkPic, setCheckPic] = useState(false);

  const handleChangeCheckButton = (event) => {setCheck(event.target.checked);};
  const handleChangeCheckButtonTwo = (event) => {setCheckTwo(event.target.checked);};
  const handleChangeCheckButtonThree = (event) => {setCheckThree(event.target.checked);};
  const handleChangeCheckButtonPic = (event) => {setCheckPic(event.target.checked);};

     return (
         <div className={classes.root}>
         <Accordion className={classes.accordionBase}>
            <AccordionSummary
               expandIcon={<EditIcon className={classes.homeaway2}/>}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
            
            </AccordionSummary>
              <AccordionDetails>
               <Grid container spacing={2} className={classes.middlefix}>
                     <Grid item xs={12}>
                        <Typography className={classes.homeaway2} align="left">Spelare</Typography><br></br>
                        <form noValidate autoComplete="off">
                           <TextField onChange={handleChangeFirstPlayer} className={classes.playerfield} size="small" fullWidth id="outlined-basic" label="Spelare 1" variant="outlined" />
                           <TextField onChange={handleChangeSecondPlayer} className={classes.playerfield} size="small" fullWidth id="outlined-basic" label="Spelare 2" variant="outlined" />
                           <TextField onChange={handleChangeThirdPlayer} className={classes.playerfield} size="small" fullWidth id="outlined-basic" label="Spelare 3" variant="outlined" />
                           <TextField onChange={handleChangeFourthPlayer} className={classes.playerfield} size="small" fullWidth id="outlined-basic" label="Spelare 4" variant="outlined" />
                        </form>
                     </Grid>
                     <Grid item md={4} sm={6} xs={12}>
                        <Typography className={classes.homeaway2}>Set 1</Typography><br></br>
                        <FormControl className={classes.formControl}>
                           <Select
                              value={FirstLeft}
                              onChange={handleChangeFirstLeft}
                              className={classes.homeaway2}
                           >
                              <MenuItem value={0}>0</MenuItem>
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={6}>6</MenuItem>
                              <MenuItem value={7}>7</MenuItem>
                           </Select>
                         </FormControl>
                         <FormControl className={classes.formControl}>
                           <Select
                              value={FirstRight}
                              onChange={handleChangeFirstRight}
                              className={classes.homeaway2}
                             
                           >
                              <MenuItem value={0}>0</MenuItem>
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={6}>6</MenuItem>
                           </Select>
                         </FormControl> 
                     </Grid>
                     <Grid item md={4} sm={6} xs={12}>
                     <Typography className={classes.homeaway2}>Set 2</Typography><br></br>
                        <FormControl className={classes.formControl}>
                           <Select
                              value={SecondLeft}
                              onChange={handleChangeSecondLeft}
                              className={classes.homeaway2}
                           >
                              <MenuItem value={0}>0</MenuItem>
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={6}>6</MenuItem>
                              <MenuItem value={7}>7</MenuItem>
                           </Select>
                         </FormControl>
                         <FormControl className={classes.formControl}>
                           <Select
                              value={SecondRight}
                              onChange={handleChangeSecondRight}
                              className={classes.homeaway2}
                             
                           >
                              <MenuItem value={0}>0</MenuItem>
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={6}>6</MenuItem>
                              <MenuItem value={7}>7</MenuItem>
                           </Select>
                         </FormControl> 
                     </Grid>
                     <Grid item md={4} sm={12} xs={12}>
                     <Typography className={classes.homeaway2}>Set 3</Typography><br></br>
                        <FormControl className={classes.formControl}>
                           <Select
                              value={ThirdLeft}
                              onChange={handleChangeThirdLeft}
                              className={classes.homeaway2}
                           >
                              <MenuItem value={0}>0</MenuItem>
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={6}>6</MenuItem>
                              <MenuItem value={7}>7</MenuItem>
                           </Select>
                         </FormControl>
                         <FormControl className={classes.formControl}>
                           <Select
                              value={ThirdRight}
                              onChange={handleChangeThirdRight}
                              className={classes.homeaway2}
                             
                           >
                              <MenuItem value={0}>0</MenuItem>
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={6}>6</MenuItem>
                              <MenuItem value={7}>7</MenuItem>
                           </Select>
                         </FormControl> 
                     </Grid>
                     <Grid item xs={12}><Divider /></Grid>
                     <Grid item sm={6} xs={12}><Typography className={classes.homeaway2}>Visa Matchbild</Typography></Grid>
                     <Grid item sm={6} xs={12}>
                     <Switch
                     checked={checkPic}
                     onChange={handleChangeCheckButtonPic}
                     color="primary"
                     name="checkedC"
                     inputProps={{ 'aria-label': 'primary checkbox' }}
                     />
                     </Grid>
                     <Grid item xs={12}><Divider /></Grid>
                     <Grid item sm={6} xs={12}><Typography className={classes.homeaway2}>Visa Matchinfo</Typography></Grid>
                     <Grid item sm={6} xs={12}>
                     <Switch
                     checked={checkThree}
                     onChange={handleChangeCheckButtonThree}
                     color="primary"
                     name="checkedC"
                     inputProps={{ 'aria-label': 'primary checkbox' }}
                     />
                     </Grid>
                     <Grid item xs={12}><Divider /></Grid>
                     <Grid item sm={6} xs={12}><Typography className={classes.homeaway2}>Super Tiebreak?</Typography></Grid>
                     <Grid item sm={6} xs={12}>
                     <Switch
                     checked={check}
                     onChange={handleChangeCheckButton}
                     disabled={checkThree ? false : true}
                     color="primary"
                     name="checkedA"
                     inputProps={{ 'aria-label': 'primary checkbox' }}
                     />
                     </Grid>
                     <Grid item xs={12}><Divider /></Grid>
                     <Grid item sm={6} xs={12}><Typography className={classes.homeaway2}>Tävlingsmatch?</Typography></Grid>
                     <Grid item sm={6} xs={12}>
                     <Switch
                     checked={checkTwo}
                     onChange={handleChangeCheckButtonTwo}
                     color="primary"
                     disabled={checkThree ? false : true}
                     name="checkedB"
                     inputProps={{ 'aria-label': 'primary checkbox' }}
                     />
                     </Grid>
                  </Grid>
                </AccordionDetails>
         </Accordion>

         
            <Paper elevation={6} className={classes.card2}>
               <Grid container spacing={2} className={classes.middlefix}>
               <Grid item xs={12} className={classes.versus}>
                  <h5 className={classes.leveldesc4}>Matchup</h5>
               </Grid>
               <Grid item xs={5}>
                  <h5 className={classes.leveldesc2}>{FirstPlayer}</h5>
                  <h5 className={classes.leveldesc2}>{SecondPlayer}</h5>
               </Grid>
               <Grid item xs={2} className={classes.versus}>
                  <h5 className={classes.leveldesc3}>vs</h5>
               </Grid>
               <Grid item xs={5}>
                  <h5 className={classes.leveldesc2}>{ThirdPlayer}</h5>
                  <h5 className={classes.leveldesc2}>{FourthPlayer}</h5>
               </Grid>
               </Grid>
            </Paper>
         

               <Paper elevation={6} className={classes.card}>
               <Grid container spacing={2} className={classes.middlefix}>
               <Grid item xs={12} className={classes.versus}>
                  <h5 className={classes.leveldesc4}>Set</h5>
               </Grid>
               <Grid item xs={4}>
               <h5 className={classes.leveldescSet}>{FirstLeft}-{FirstRight}</h5>
               </Grid>
               <Grid item xs={4}>
                  <h5 className={classes.leveldescSet}>{SecondLeft}-{SecondRight}</h5>
               </Grid>
               <Grid item xs={4}>
                  <h5 className={classes.leveldescSet}>{ThirdLeft}-{ThirdRight}</h5>
               </Grid>
               </Grid>
               </Paper>
            {(checkPic && <div>
               <Paper elevation={6} className={classes.card3}>
                 <img src={mixedImg} alt="matchup" className={classes.imagee}/>
               </Paper></div>) || <div></div>}
            {(checkThree && <div>
               <Paper elevation={6} className={classes.card}>
               <Grid container spacing={2} className={classes.middlefix}>
               <Grid item xs={12} className={classes.versus}>
                  <h5 className={classes.leveldesc4}>Matchinfo</h5>
               </Grid>
               <Grid item xs={6}>
                  <h5 className={classes.leveldesc4}>Super Tiebreak</h5>
                  <h5 className={classes.leveldescSet}>{(check && `Ja`) || `Nej`}</h5>
               </Grid>
               <Grid item xs={6}>
               <h5 className={classes.leveldesc4}>Tävlingsmatch</h5>
                  <h5 className={classes.leveldescSet}>{(checkTwo && `Ja`) || `Nej`}</h5>
               </Grid>
               </Grid>
               </Paper>
            </div>) || <div></div>}
            
         </div>
     );
   }