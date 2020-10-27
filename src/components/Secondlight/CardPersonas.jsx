import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 300,
    boxShadow: "3px 3px 13px 13px rgb(0 0 0 0.2)",
    border: "3px solid #5d7af8",
  },
  media: {
    height: 200,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundSize: "contain",
    '> img': {
     height: 130,  
    },
  },
  backu: {
   backgroundColor: "#5d7af8",
   height: "240px",
   [theme.breakpoints.down('sm')]: {
      height: "180px",
    },
 },
  headertext: {
   fontWeight: 600,
   fontFamily: "'Orbitron', sans-serif",
   fontSize: "1.8rem",
   color: "#fff",
   textAlign: "center",
   [theme.breakpoints.down('sm')]: {
      fontSize: "1.5rem",
    },
},
descriptiontext: {
   fontWeight: 600,
   fontSize: "1rem",
   color: "#fff",
   textAlign: "left",
   [theme.breakpoints.down('sm')]: {
      fontSize: "0.8rem",
    },
} 
}));

export default function CardPersonas(props) {
  const {imageurl, headline, description} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageurl}
          title={headline}
        />
        <CardContent className={classes.backu}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.headertext}>
           {headline}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p" className={classes.descriptiontext}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}