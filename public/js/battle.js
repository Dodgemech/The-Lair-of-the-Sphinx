let hp = document.currentScript.getAttribute('hp');
let level = document.currentScript.getAttribute('level');
let riddleIndex = document.currentScript.getAttribute('riddleIndex');

const $monsterImage = document.getElementById('monster-image');
const $monsterName = document.getElementById('monster-name');
const $monsterDescription = document.getElementById('monster-description');
const $monsterRiddle = document.getElementById('monster-riddle');

// Test ON INPUT BTN
const $answerInput = document.getElementById('answerInput');
const $answerInputBtn = document.getElementById('answerInputBtn');
// const $answerData = document.getElementById('answers');

// const correctAns = 0;

// const correctAnswer = 'test';
//-------TESTING PURPOSES ONLY-------------
const $lowerHealth = document.getElementById('decrement-health-test');
const $levelUp = document.getElementById('increase-level-test');
const $riddleUp = document.getElementById('increase-riddle-index');


console.log(hp);
console.log(level);
//------------------------------------------

//------DISPLAY MONSTER ON PAGE-------------
async function displayMonster() {
// const displayMonster = async function() {
  const res = await fetch(`/api/monsters/${level}`);
  const monster = await res.json();
  console.log(monster); 

  if (typeof monster.riddles[riddleIndex] == 'undefined') {
    levelUp();
    return;
  }
  $monsterImage.src = `/images/${monster.image}`;
  $monsterName.textContent = monster.name;
  $monsterDescription.textContent = monster.description;
  $monsterRiddle.textContent = monster.riddles[riddleIndex].question;
}

//------------------------------------------



// TEST OF ANSWER INPUT/BTN

const submitAnswer = async function() {
  asyncfunction.preventDefault();
  console.log();
  try {
    const answerValue = $answerInput.value;

    const res = await fetch('/api/users/current/now', {
      method: 'POST',
    })
    if (answerValue.text() === $answerInputBtn.text()) {
      return;
    };  
  
    if (res.ok) {
      const user = await res.json();
      console.log(user)
    return response.json();
    

    // location.reload();
    } else {
      alert('error');
    }
    
    if (answerValue.trim().length == 'undefined') {
      alert('Answer must be provided');
      return;
    }
    console.log(answerValue);
  
  } catch (error) {
    console.log(error);
  };
}


  
const levelUp = async function () {
  try {
    const res = await fetch('/api/users/level-up', {
      method: 'POST',
    });

    if (res.ok) {
      console.log('level up');
      location.reload();
    } else {
      alert('error');
    }
  } catch (error) {
    console.log(error);
  };
}

const updateHP = async function () {
  try {
    const hpValue = (-5);
    const res = await fetch('/api/users/update-hp', {
      method: 'POST',
      body: JSON.stringify({
        hpChange: hpValue
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (res.ok) {
      console.log('update HP');
      location.reload();
    } else {
      alert('error');
    }
  } catch (error) {
    console.log(error);
  };
}
const nextRiddle = async function () {
  try {
    const res = await fetch('/api/users/next-riddle', {
      method: 'POST',
    });

    if (res.ok) {
      console.log('riddle up');
      location.reload();
    } else {
      alert('error');
    }
  } catch (error) {
    console.log(error);
  };
}

// // TEST OF ANSWER INPUT/BTN

// // $answerBtnInput.addEventListener( 'click', async (event) => {
// const submitAnswer = async function () {
//   asyncfunction.preventDefault();

//   const answerValue = $answerInput.value;
//   console.log(submitAnswer);
//   // const questionInput = $answerData.value;

//   if (answerValue.trim().length == 0) {
//     alert('Answer must be provided');
//     return;
//   }
//   console.log(answerValue);
//   // if (questionInput.trim().length === 0) {
//   //   alert('');
//   //   return;
//   // }

//   try {
//     const res = await fetch('/api/users/current/now', {
//       method: 'GET',
//       body: JSON.stringify({
//         answer: answerValue
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       } 
//     })
//     if (res.ok) {
//       const user = await res.json();
//       console.log(user)
//       location.reload();
//   } else {
//     alert('error');
//   }
//   } catch (error) {
//     console.log(error);
//   }
// }
// // submitAnswer();
  
  
  // try {
  //   // const checkAnswer = async function () {
  //     // let out = $('.output').value;
  //   if (question.$(answerValue) === 0); {
          
  //   } else {
  //     alert('error');
  //   }


  
// displayMonster()
// const fightMonster = async function () {
//   try {
//     const res = await fetch('/api/users/current/now', {
//       method: 'GET',
//     });
    

//     if (res.ok) {
//     const user = await res.json();
//     console.log(user)
//     } else {
//       alert('error');
//     }
    
//   } catch (error) {
//     console.log(error);
//   };
// }
// fightMonster();

    // };
    // } catch (error) {
    //   console.log(answerValue);
    //   }


// const nextRiddle = async function () {
//   console.log(nextRiddle);
//   try {
//     const res = await fetch('/api/users/next-riddle', {
//       method: 'POST',
//     });

//     if (res.ok) {
//       console.log('riddle up');
//       location.reload();

//     } else {
//       alert('error');
//     }
//   } catch (error) {
//     console.log(error);
//   };
// };



    // if (currentQuestion >= questions.length) {
    //     showSummary();
    // } else {
    //     showQuestion();
    // }

    // function () {
    //     $('.output').val('');
    // };
  


  // try {
  //   const res = await fetch('/api/users/riddle', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       userAnswer: answerValue
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   });
    
  //   const checkAnswer = $answerInput;
  
  //     if (checkAnswer[riddleIndex].answers === checkAnswer[riddleIndex].answerValue) {
  //         // correct answer, move to next riddle
  //         correctAns++;
  //         // console.log(correctAns);
  //         answerCheck.textContent = "Bravo!";
  //     } else {
  //         // wrong answer, deduct 5 second from HP
  //         updateHP = -5;
  //         updateHP.textContent = hpValue;
  //         answerCheck.textContent = "Womp womp! The correct answer is: " + questions[riddleIndex].answers;
  //     };
  
  //     riddleIndex++;
    
  //     console.log(checkAnswer);
  //     console.log(answers);
    
  

//   } catch (error) {
//     console.log(error);
//   };
// })


  
  // //  
  // if (res.ok) {
  //   console.log('all signed up!');
  //   document.location.replace('/');
  // } else {
  //   alert('Unable to sign up!');
  // }












//---------RUNS WHEN PAGE LOADED---------
// displayMonster();
displayMonster();
$levelUp.addEventListener('click', levelUp);
$lowerHealth.addEventListener('click', updateHP);
$riddleUp.addEventListener('click', nextRiddle);
$answerInputBtn.addEventListener('click', submitAnswer);


