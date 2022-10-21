
let hp = document.currentScript.getAttribute('hp');
let level = document.currentScript.getAttribute('level');
let riddleIndex = document.currentScript.getAttribute('riddleIndex');

const $monsterImage = document.getElementById('monster-image');
const $monsterName = document.getElementById('monster-name');
const $monsterDescription = document.getElementById('monster-description');
const $monsterRiddle = document.getElementById('monster-riddle');

const correctAnswer = 'test';
//-------TESTING PURPOSES ONLY-------------
const $lowerHealth = document.getElementById('decrement-health-test');
const $levelUp = document.getElementById('increase-level-test');
const $riddleUp = document.getElementById('increase-riddle-index');

console.log(hp);
console.log(level);
//------------------------------------------

//------DISPLAY MONSTER ON PAGE-------------
async function displayMonster() {
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

// user has monster Id already stored to them, once that monster is defeated UPDATE user to next monster's id
// make sure the reference number never goes passed the amount of monsters, query for how many rows there are in table 
const fightMonster = async function () {
  try {
    const res = await fetch('/api/users/current/now')
    

    if (res.ok) {
    const user = await res.json();
    console.log(user)
    }
  } catch (error) {
    console.log(err)
  }
}
fightMonster();

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
//---------RUNS WHEN PAGE LOADED---------
displayMonster();

$levelUp.addEventListener('click', levelUp);
$lowerHealth.addEventListener('click', updateHP);
$riddleUp.addEventListener('click', nextRiddle);


