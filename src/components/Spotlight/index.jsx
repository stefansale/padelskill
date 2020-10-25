import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Container } from '@material-ui/core';
import LevelTable from './Leveltable';
import SkillHeader from './SkillHeader';

const background = "https://betasy-qa.s3-eu-west-1.amazonaws.com/assets/padelbg3.svg";

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
    marginBottom: "10rem",
    },
    card: {
      background: "linear-gradient(0deg, rgba(111,111,251,1) 0%, rgba(99,100,255,1) 100%)",
      color: "#fff",
      padding: theme.spacing(2),
      borderRadius: 10,
      marginTop: theme.spacing(2),
      },
}));

export default function MainForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
         <Grid container spacing={2} justify="center">
            <Grid item md={10} xs={12}>
                  <SkillHeader/>
               <Paper elevation={6} className={classes.card}>
                  <LevelTable/>
               </Paper>
            </Grid>
         </Grid>
      </Container>
    </div>
  );
}