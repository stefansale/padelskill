import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      {new Date().getFullYear()}
      {''}
    </Typography>
  );
}

const logo = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/pt-logo-white.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    fontSize: "1.8rem",
    fontWeight: 600,
    fontFamily: "'Orbitron', sans-serif",
    padding: theme.spacing(3, 2),
    backgroundColor: "#5d7af8",
    marginTop: 'auto',
    textAlign: "center",
    color: "#fff",
  },
  headertext: {
   fontSize: "1.2rem",
   fontWeight: 600,
   fontFamily: "'Orbitron', sans-serif",
   padding: theme.spacing(3, 2),
   backgroundColor: "#5d7af8",
   marginTop: 'auto',
   textAlign: "center",
   color: "#fff",
 },
 logo: {
   marginLeft: theme.spacing(2),
   height: "35px",
   padding: "10px",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
          <div><img src={logo} alt="ball" className={classes.logo}/></div>
          
        </Container>
      </footer>
    </div>
  );
}