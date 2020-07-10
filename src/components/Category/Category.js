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
        marginBottom:'auto',
        height:theme.spacing(3),
    },
    root2:{
        display:'flex'
    },
    button: {
        float:'left',
        width:'100%',
        height:50,
        marginRight:'auto',
        marginLeft:theme.spacing(1)
    },
}))
export default function Category({chooseCategory,categoryName,submitCategory}) {
   
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>

           <Grid className={classes.root2} item xs={12}>

           <FormControl className={classes.formControl}>
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

</FormControl>
<Button variant="contained" className={classes.button} type='button' onClick={submitCategory} >Choose</Button>

           </Grid>
        </Grid>
    )
}
