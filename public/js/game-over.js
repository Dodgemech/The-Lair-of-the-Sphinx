const $homeBtn = document.getElementById('return-home');

$homeBtn.addEventListener('click',async (event) => {
    event.preventDefault();
    try {
        const res = await fetch('/api/users/logout', {
            method: 'POST',
          });
          
          if (res.ok) {
            console.log('logged out');
            document.location.replace('/');
          }
    } catch (error) {
       console.log(error); 
    }
});