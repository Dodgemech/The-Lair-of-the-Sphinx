const $userNameInput = document.getElementById('userNameInput');
const $passwordInput = document.getElementById('passwordInput');
const $charNameInput = document.getElementById('characterNameInput');
const $genderInput = document.getElementById('gender');
const $signUpBtn = document.getElementById('signUpBtn');


$signUpBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const userInput = $userNameInput.value;
  const passwordInput = $passwordInput.value;
  const charNameInput = $charNameInput.value;
  const genderInput = $genderInput.value;

  if (userInput.trim().length === 0) {
    alert('Username must be provided');
    return;
  }

  if (passwordInput.trim().length === 0) {
    alert('Password must be provided');
    return;
  }

  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username: userInput,
        password: passwordInput,
        character_name: charNameInput,
        character_gender: genderInput,
        character_health: 100,
        character_level: 1
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    
  if (res.ok) {
    console.log('all signed up!');
    document.location.replace('/login');
  } else {
    alert('Unable to sign up!');
  }
  } catch (error) {
    console.log(error);
  }
});
