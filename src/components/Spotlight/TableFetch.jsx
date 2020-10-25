import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SportsBaseballRoundedIcon from '@material-ui/icons/SportsBaseballRounded';

const useStyles = makeStyles((theme) => ({
   root: {
     display: 'flex',
     flexWrap: 'wrap',
     },
   listitem: {
      listStyle: 'none',
   },
 }));

export default function TableFetch() {
   const classes = useStyles();
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);
 
   // Note: the empty deps array [] means
   // this useEffect will run once
   // similar to componentDidMount()
   useEffect(() => {
     fetch("https://spreadsheets.google.com/feeds/list/1e1l80scBl-Qk9nOZEWSAxkh8lLGfxt5Z5z9MOgkX5U0/1/public/values?alt=json")
       .then(res => res.json())
       .then(
         (result) => {
           setIsLoaded(true);
           setItems(result.feed.entry);
         },
         // Note: it's important to handle errors here
         // instead of a catch() block so that we don't swallow
         // exceptions from actual bugs in components.
         (error) => {
           setIsLoaded(true);
           setError(error);
         }
       )
   }, [])
 
   if (error) {
     return <div>Error: {error.message}</div>;
   } else if (!isLoaded) {
     return <div>Loading...</div>;
   } else {
     return (
       <div>
          <ul>
          {items.map(item => (
             <li className={classes.listitem}>
               <div className={classes.root}>
                  <SportsBaseballRoundedIcon/>
                  <h2>{item.gsx$_cokwr.$t}</h2> 
                  <h5>{item.gsx$_cpzh4.$t}</h5>
               </div>
             </li>
         ))}
         </ul>
       </div>
     );
   }
 }