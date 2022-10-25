const $homeBtn = document.getElementById('return-home');

$homeBtn.addEventListener('click',(event) => {
    event.preventDefault();
    try {
        document.location.replace('/');
    } catch (error) {
       console.log(error); 
    }
    
});