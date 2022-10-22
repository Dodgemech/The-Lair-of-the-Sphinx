
let hp = document.currentScript.getAttribute('hp');
let level = document.currentScript.getAttribute('level');


//-------TESTING PURPOSES ONLY-------------
const $lowerHealth = document.getElementById('decrement-health-test');
const $levelUp = document.getElementById('increase-level-test');
const $answerInput = document.getElementById('answer-input').value.trim();


console.log(hp);
console.log(level);
//------------------------------------------

// user has monster Id already stored to them, once that monster is defeated UPDATE user to next monster's id
// make sure the reference number never goes passed the amount of monsters, query for how many rows there are in table 
const fightMonster = async function () {
  try {
    const res = await fetch('/api/users/current/now')

    if (res.ok) {
      const user = await res.json();
      console.log(user)
    }

    if($answerInput === questions.answer) {
      updateScore();
    } else {
      updateHP();
    }
  } catch (error) {
    console.log(err)
  }
}

//Update User score
const updateScore = async function () {
  try {
    const scoreValue = (-1);
    const res = await fetch('/api/users/update-score', {
      method: 'POST',
      body: JSON.stringify({
        scoreChange: scoreValue
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (res.ok) {
      console.log('update Score');
      //remove this and replace by calling 
      updateRiddle();
    } else {
      alert('error');
    }
  } catch (error) {
    console.log(error);
  };
}

//function to update riddle
    // need to make sure to put something in that checks to see that were not asking for another when out
      // also calls these 
//Update to next riddle
//const updateRiddle = async function () {
 // if(if no more riddles ){
  //  updateMonster()
  //} else {
    //riddle_id += 1
 // }
//}

//function to update the monster_id in the user
    // need to make sure to put something in that checks to see that were not asking for another when out
//Update to next monster
//const updateMonster = async function () {
  // location.reload();
//}

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

$levelUp.addEventListener('click', levelUp);
$lowerHealth.addEventListener('click', updateHP);

