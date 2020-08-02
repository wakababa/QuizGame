import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button ,FormControl, InputLabel,Select } from '@material-ui/core';
import categorylist from '../../category.list.json'
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        justifyContent:'center',
        backgroundColor: '#48bfe3'
    },
    text: {
        justifyContent:'center',
        marginBottom:theme.spacing(5)
    },
    formControl:{
        minWidth: 200,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        height:theme.spacing(3),
    },
    root3:{
      width: 300,
      margin: "auto",
      marginBottom: 5,
      marginTop: '20%',
    },
    button: {
        width: '90%',
        maxWidth:280,
        margınTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex'
    },
}))
export default function Category({chooseCategory,categoryName,submitCategory}) {

    const classes = useStyles();
    return (
        <Grid container className={classes.root}>

           <Grid className={classes.root2} item xs={12}>
<form className={classes.root3}>
<InputLabel htmlFor="age-native-simple">Choose One Category</InputLabel>
<Select
  native
  value={categoryName}
  onChange={chooseCategory}

>
  <option aria-label="None" value="" />
  {categorylist.map((cat,key)=>(
      <option key={key} value={cat.number}>{cat.name}</option>
    ))}
</Select>
</form>
<Button variant="contained" className={classes.button} type='button' onClick={submitCategory} >Submit</Button>

           </Grid>
        </Grid>
    )
}
