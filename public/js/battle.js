let hp = document.currentScript.getAttribute('hp');
let level = document.currentScript.getAttribute('level');
let riddleIndex = document.currentScript.getAttribute('riddleIndex');

const $monsterImage = document.getElementById('monster-image');
const $monsterName = document.getElementById('monster-name');
const $monsterDescription = document.getElementById('monster-description');
const $monsterRiddle = document.getElementById('monster-riddle');

let riddleAnswer;

// Test ON INPUT BTN
const $answerInput = document.getElementById('answerInput');
const $answerInputBtn = document.getElementById('answerInputBtn');


//-------TESTING PURPOSES ONLY-------------
// const $lowerHealth = document.getElementById('decrement-health-test');
const $levelUp = document.getElementById('increase-level-test');
// const $riddleUp = document.getElementById('increase-riddle-index');


console.log(hp);
console.log(level);
//------------------------------------------

//------DISPLAY MONSTER ON PAGE-------------
async function displayMonster() {
  const res = await fetch(`/api/monsters/${level}`);
  const monster = await res.json();

  if (typeof monster.riddles[riddleIndex] == 'undefined') {
    levelUp();
    return;
  }
  $monsterImage.src = `/images/${monster.image}`;
  $monsterName.textContent = monster.name;
  $monsterDescription.textContent = monster.description;
  $monsterRiddle.textContent = monster.riddles[riddleIndex].question;

  riddleAnswer = monster.riddles[riddleIndex].answers;
  monsterStrength = monster.strength;
}

//------------------------------------------



// TEST OF ANSWER INPUT/BTN

const submitAnswer = async function(event) {
  event.preventDefault();
  let answerValue = $answerInput.value.toLowerCase();
  if (answerValue.trim().length == 0) {
    alert('Answer must be provided');
    return;
  }
  

  try {

    if (answerValue === riddleAnswer) {
      alert('Answer Correct!');
      nextRiddle();    

    } else {
      alert('Boo! Answer Incorrect')
      updateHP();
    }
    
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
    const hpValue = (-monsterStrength);
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

//---------RUNS WHEN PAGE LOADED---------
displayMonster();
$levelUp.addEventListener('click', levelUp);
// $lowerHealth.addEventListener('click', updateHP);
// $riddleUp.addEventListener('click', nextRiddle);
$answerInputBtn.addEventListener('click', submitAnswer);


