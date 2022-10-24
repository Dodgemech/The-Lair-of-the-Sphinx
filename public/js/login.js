const $userNameInput = document.getElementById('userNameInput');
const $passwordInput = document.getElementById('passwordInput');
const $logInBtn = document.getElementById('logInBtn');




$logInBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const username = $userNameInput.value;
  const password = $passwordInput.value;

  if (username.trim().length === 0) {
    alert('Username must be provided');
    return;
  }

  if (password.trim().length === 0) {
    alert('Password must be provided');
    return;
  }

  try {
    const res = await fetch('/api/users/login', {
      method: 'POST',
  
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    
    if (res.ok) {
      console.log('logged in');
      document.location.replace('/');
    } else {
      alert('Incorrect User Name or Password! Please try again!');
      $passwordInput.value = '';
      $userNameInput.value = '';
    }
  } catch (error) {
    console.log(error);
  }
});