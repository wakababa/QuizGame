import React from 'react'
import {makeStyles} from '@material-ui/core/styles';

import {TextField, Button, Typography, Grid, FormControl} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#48bfe3'
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(2)
  },
  button: {
    float: 'left',
    width: '100%',
    height: 50,
    marginRight: 'auto',
    marginLeft: theme.spacing(1)
  },
  text2: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    width: 275,
    height: 50
  },
  form: {
    display: 'flex'
  },
  formcontrol: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))
export default function Username({userError, handleChangeUsername, submitUsername}) {
  const classes = useStyles();
  return (<Grid container="container" className={classes.root}>

    <Grid item="item" xs={12}>
      <Typography className={classes.text} variant="h3">Quiz Game</Typography>
    </Grid>
    <Grid className={classes.form} item="item" xs={12}>
      <FormControl className={classes.formcontrol}>
        {
          userError === ''
            ? <TextField onChange={handleChangeUsername} className={classes.text2} id="standard-basic" label="Write A Name"/>
            : <TextField onChange={handleChangeUsername} style={{
                  color: 'red'
                }} className={classes.text2} id="standard-basic" label="Please You Need Write Name"/>
        }
        <Button color="primary" className={classes.button} onClick={submitUsername}>
          Submit
        </Button>
      </FormControl>
    </Grid>
  </Grid>)
}
