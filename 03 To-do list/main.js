let input = document.getElementById('input');
let btn = document.querySelector('.btn');
let toDo = document.querySelector('.to-do');

 function taskToDo(e) {
        e.preventDefault();
    } 


btn.addEventListener('click', function() {
    let ispisi = document.createElement('ul');
    ispisi.innerHTML = input.value;
    toDo.appendChild(ispisi);
    input.value = '';

    ispisi.addEventListener('click', function() {
        toDo.removeChild(ispisi);
    });

});
        
      

    



