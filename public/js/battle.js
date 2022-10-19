
let hp = document.currentScript.getAttribute('hp');
let level = document.currentScript.getAttribute('level');

//-------TESTING PURPOSES ONLY-------------
const $lowerHealth = document.getElementById('decrement-health-test');
const $levelUp = document.getElementById('increase-level-test');

console.log(hp);
console.log(level);
//------------------------------------------

const levelUp = async function () {
  try {
      const res = await fetch('/api/users/level-up', {
        method: 'POST',
      });
      
      if (res.ok) {
        console.log('level up');
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
      } else {
        alert('error');
      }
    } catch (error) {
      console.log(error);
    };
}

$levelUp.addEventListener('click', levelUp);
$lowerHealth.addEventListener('click', updateHP);

