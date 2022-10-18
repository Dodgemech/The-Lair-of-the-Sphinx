const $userNameInput = document.getElementById('userNameInput');
const $passwordInput = document.getElementById('passwordInput');
const $signUpBtn = document.getElementById('signUpBtn');


$signUpBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const userInput = $userNameInput.value;
  const passwordInput = $passwordInput.value;

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
        character_name: 'JakeisCool',
        character_gender: 'Male',
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
