import React from 'react'
import { Modal, Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        backgroundColor: '#48bfe3',
    },
    paper: {
        display: 'flex',
        position: 'absolute',
        height: 300,
        width: 300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        left: '50%',
        transform: 'translate(-50%, 50%)',
        right: '50%',
        bottom: '50%',
        // padding: theme.spacing(2, 4, 3),
    },
    button: {
        margin: 'auto',
        paddingTop: 10,
        width: '100%'
    },
    text: {
        textAlign: 'center',
        marginBottom: theme.spacing(1)
    },
}));
export default function GameOver({ userName, gameOver, newGame, score }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Modal
                open={gameOver}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <Grid container>
                        <Grid item xs={12}> <Typography className={classes.text} variant="h6">Quiz Game</Typography></Grid>
                        <Grid item xs={12}> <Typography className={classes.text} variant="h6">Game Over</Typography></Grid>
                        <Grid item xs={12}> <Typography className={classes.text} variant="subtitle2">Username :{userName}</Typography></Grid>
                        <Grid item xs={12}> <Typography className={classes.text} variant="subtitle2">Score : {score}/10</Typography></Grid>
                        <Grid item xs={12}><Button onClick={newGame} className={classes.button}>New Game</Button>
                        </Grid>
                    </Grid>
                </div>
            </Modal>

        </div>
    )
}
