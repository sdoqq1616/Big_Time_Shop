
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/




window.addEventListener('DOMContentLoaded', function () {

    let form = document.querySelector('form');
    let email = document.querySelector('#email');
    let eye = document.querySelector('#eye');
    let pwd = document.getElementById('password');
    let login_btn =document.querySelector('#login_btn');
    let warning_btn = document.querySelector('#warning_btn');



    login_btn.onclick=function(){
        let data = getData();
        let userError = true;
        for(let i=0;i<data.length;i++){
            if(data[i].email==email.value&&data[i].pwd==pwd.value){
                userError = false;
                sessionStorage.clear();
                sessionStorage.setItem('user',JSON.stringify(data[i]));
                email.value='';
                pwd='';
                location.href='index.html';
                break;
            }
        }
        if(userError){
            let warning_msg = document.querySelector('.warning_msg');
            let bg = document.querySelector('#bg');
            let title = document.querySelector('#bg_title');
            bg.style.display='block';
            title.innerHTML='Ufffs, Algo mal sucedio!!!';
            warning_msg.innerHTML='Lo siento, el usuario no existe o la contraseña de la cuenta que ingresaste no es correcta.';
        }

    }
    

    warning_btn.onclick = function(){
        bg.style.display ='none';
    }


    //form
    form.addEventListener('submit', function (e) {
        e.preventDefault();

    });



    //to  see password
    let flag = 0;
    eye.onclick = function () {
        if (flag == 0) {
            flag = 1;
            pwd.type = "text";
            this.src = "./images/open.png";
        } else {
            flag--;
            pwd.type = "password";
            this.src = "./images/close.png";
        }
    }

});