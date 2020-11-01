import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import BoardHeader from './BoardHeader';
import Scoring from './Scoring';

const background = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/padelracketbg.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "10rem",
    paddingTop: "4rem",
    marginBottom: "0rem",
    [theme.breakpoints.only('xs')]: {
      paddingTop: "2.5rem",
      },
    },
    card: {
      background: "#5d7af8",
      color: "#fff",
      padding: theme.spacing(2),
      borderRadius: 10,
      marginTop: theme.spacing(2),
      },
}));

export default function GameBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
         <Grid container spacing={2} justify="center">
            <Grid item md={10} xs={12}>
                  <BoardHeader/>
               
                  <Scoring/>
               
            </Grid>
         </Grid>
      </Container>
    </div>
  );
}