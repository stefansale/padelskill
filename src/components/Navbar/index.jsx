import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, IconButton, Divider } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const logo = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/pt-logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
     paddingBottom: theme.spacing(3),
     paddingTop: theme.spacing(3),
    },
    logo: {
      height: "35px",
      padding: "10px",
      [theme.breakpoints.only('xs')]: {
         height: "30px",
       },
     },
    burger: {
      color: "#5d7af8",
     },
     burger_visual: {
      [theme.breakpoints.up('sm')]: {
         display: "none",
       },
     },
     dividercolor: {
      backgroundColor: "#5d7af8",
      opacity: 1,
      height: "2px",
      [theme.breakpoints.up('sm')]: {
         display: "none",
       },
    },
     menu_block: {
      marginTop: theme.spacing(4),
      marginRight: theme.spacing(2),
     },
     navspacing: {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.up('sm')]: {
         justifyContent: "center",
       },
     },
   headertext: {
      fontWeight: 600,
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "4rem",
      color: "#5d7af8",
      textAlign: "center",
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
         fontSize: "3rem",
       },
   } 
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
   setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
   setAnchorEl(null);
 };

  return (
    <div className={classes.root}>
      <Container>
         <Grid container spacing={2}>
            <Grid item xs={12} className={classes.navspacing}>
               <div><img src={logo} alt="ball" className={classes.logo}/></div>
               <div className={classes.burger_visual}><IconButton
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleMenu}
               color="inherit"
               ><FastfoodIcon className={classes.burger}/></IconButton>
               <Menu
                id="menu-appbar"
                className={classes.menu_block}
                elevation={1}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
               
                <MenuItem onClick={handleClose}>Nivåer</MenuItem>
                <MenuItem onClick={handleClose}>Personas</MenuItem>
               <MenuItem onClick={handleClose}>Poängtavlan</MenuItem>
                <MenuItem onClick={handleClose}>Personas</MenuItem>
                
              </Menu>
               </div>
            </Grid>
         </Grid>
         <Divider variant="middle" className={classes.dividercolor}/>
      </Container>
    </div>
  );
}