
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/




window.addEventListener('DOMContentLoaded', function () {

    var form = document.querySelector('form');
    var email = document.querySelector('#email');
    var eye = document.querySelector('#eye');
    var pwd = document.getElementById('password');
    var login_btn =document.querySelector('#login_btn');
    var warning_btn = document.querySelector('#warning_btn');



    login_btn.onclick=function(){
        var data = getData();
        var userError = true;
        for(var i=0;i<data.length;i++){
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
            var warning_msg = document.querySelector('.warning_msg');
            var bg = document.querySelector('#bg');
            var title = document.querySelector('#bg_title');
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
    var flag = 0;
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