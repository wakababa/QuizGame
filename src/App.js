import React, { useState } from 'react';



// COMPONENTS
import Username from './components/Username/Username';
import Category from './components/Category/Category';
import GameScreen from './components/GameScreen/GameScreen';
import GameOver from './components/GameOver/GameOver';



function App() {

  // USERNAME ENTER
  const [userName, setuserName] = useState('')
  const [userError, setuserError] = useState('')
  const [userIsName, setuserIsName] = useState(false)
  const [score, setscore] = useState(0)
  const handleChangeUsername = (e) => {
    setuserName(e.target.value)
  }

  const submitUsername = (e) => {

    if (userName === '') {
      setuserError('Please Write A Name');
    } else {
      e.preventDefault();
      setuserIsName(true)
    }
  };

  // CATEGORY
  const [categoryName, setcategoryName] = useState('')
  const [categoryError, setcategoryError] = useState('')
  const [isSelectedCategory, setisSelectedCategory] = useState(false)
  const chooseCategory = (e) => {
    setcategoryName(e.target.value)
  };
  const submitCategory = (e) => {
    if (categoryName === '') {
      setcategoryError('Please Choose One Category')
    } else {
      setisSelectedCategory(true)
    }
  }



  // GAME SCREEN

  //  `https://opentdb.com/api.php?amount=10&category=${categoryName}&difficulty=medium&type=multiple&encode=base64`

  const [questions, setquestions] = useState([])
  const [isopen, setisopen] = useState(true)
  const startGame = () => {
    // fetch(`https://opentdb.com/api.php?amount=10&category=${categoryName}&difficulty=medium&type=multiple&encode=base64`)
    fetch(`https://opentdb.com/api.php?amount=10&category=${categoryName}&difficulty=medium&type=multiple&encode=base64`)
      .then(doc => doc.json())
      .then(data => {
        setquestions(data.results)
        setisopen(false)
      })
      .catch(err => console.log(err.message))
  }


  // GAME OVER SCREEN

  const [gameOver, setgameOver] = useState(false)


  // GAVE OVER GO TO CATEGORY

  const newGame =()=>{
    setcategoryName('')
    setisSelectedCategory(false)
    setgameOver(false)
    setisopen(true)
  }

  return (
    <div className="App">
      {userIsName && isSelectedCategory && !gameOver ? <GameScreen score={score} setscore={setscore} setgameOver={setgameOver} isopen={isopen} startGame={startGame} questions={questions} /> :
     gameOver ? <GameOver score={score} newGame={newGame} gameOver={gameOver} userName={userName}/>:
      userIsName ?
      <Category submitCategory={submitCategory} categoryName={categoryName} chooseCategory={chooseCategory} />  :
      <Username userError={userError} handleChangeUsername={handleChangeUsername} submitUsername={submitUsername} /> 
      
      }

    </div>
  );
}

export default App;
