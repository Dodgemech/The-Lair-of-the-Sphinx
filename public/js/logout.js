
const $logOutBtn = document.getElementById('logOutBtn');


$logOutBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    const res = await fetch('/api/users/logout', {
      method: 'POST',
    });
    
    if (res.ok) {
      console.log('logged out');
      document.location.replace('/');
    } else {
      alert('Error Logging Out!');
    }
  } catch (error) {
    console.log(error);
  }
});