const button= document.getElementById('button');
const share= document.getElementById('share');

button.addEventListener('click', ()=>{
    share.classList.toggle('show');
});