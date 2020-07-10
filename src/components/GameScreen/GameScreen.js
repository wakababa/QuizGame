import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Modal, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        backgroundColor: '#48bfe3'
    },
    paper: {
        display: 'flex',
        position:'absolute',
        height:50,
        width: 300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        left: '50%',
        transform: 'translate(-50%, 50%)',
        right: '50%',
        top: '50%',
        bottom: '50%',
        // padding: theme.spacing(2, 4, 3),
    },
    button: {
        margin: 'auto',
        paddingTop: 10,
        width: '90%'
    },
    buttonAnswer: {
        margin: 'auto',
        paddingTop: 10,
        marginTop:5,
        border:'0.5px solid black',
        width: '90%',
        marginLeft:10
    },
    cardroot: {
        marginTop: '50%',
        width: 325
    },
    text:{
        textAlign:'center',
        marginBottom:theme.spacing(1)
    },
    text2: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft:'auto',
        width: 275,
        height:50
    },
}));


export default function GameScreen({ startGame, questions, isopen , setgameOver, setscore , score }) {

    const classes = useStyles();

    const [questionNumber, setquestionNumber] = useState(0);

    const verifyAnswer = (x, y) => {
        if (x === y) {
            setquestionNumber(questionNumber + 1)
            setscore(score +1)
        } else {
            setquestionNumber(0)
            setgameOver(true)
        }
    }
    return (
        <Grid container className={classes.root}>
    
            <Modal
                open={isopen}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <Button
                        className={classes.button}
                        onClick={startGame}>
                        Start Game
                    </Button>
                </div>
            </Modal>

            {!isopen ? 
            
           
            <div >
                 <Grid item xs={12}>
                    <Typography className={classes.text} variant="h3">Quiz Game</Typography>
                </Grid>
                <Grid className={classes.cardroot} item xs={12}>
                    <Typography className={classes.text} variant="h6">{atob(questions[questionNumber].question)}</Typography >
                    {
                        [questions[questionNumber].correct_answer].concat(questions[questionNumber].incorrect_answers).sort().map((que, key) => (
                            <Button className={classes.buttonAnswer} key={key} onClick={() => verifyAnswer(atob(que), atob(questions[questionNumber].correct_answer))}>{atob(que)}</Button>
                        ))
                    }
                </Grid>

            </div>
                : null}

            <Grid />
        </Grid>
    )
}
