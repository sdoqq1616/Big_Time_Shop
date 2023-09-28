/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/




function registerUser(){
    
    let username = document.getElementById('username');
    let surname = document.getElementById('surname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let warning_msg = document.querySelector('.warning_msg');
    let conf_password = document.getElementById('conf_password');
    let title = document.querySelector('#bg_title');
    

    if(username.value ==''){
        bg.style.display ='block';
        warning_msg.innerHTML = '¡El campo de Nombre es obligatorio! Por favor complete el formulario.'
        return false;
    }else if(surname.value==''){
        bg.style.display ='block';
        warning_msg.innerHTML = '¡El campo de Apellido es obligatorio! Por favor complete el formulario.'
        return false;
    }else if(email.value==''||!checkEmail(email.value)){
        bg.style.display ='block';
        warning_msg.innerHTML = '¡El campo de Correo electrónico esta vacio o el formato de correo electronico no es valido.'
        return false;
    }else if(password.value==''){
        bg.style.display ='block';
        warning_msg.innerHTML = '¡El campo de Contraseña es obligatorio! Por favor complete el formulario.'
        return false;
    }else if(conf_password.value==''){
        bg.style.display ='block';
        warning_msg.innerHTML = '¡Por favor Ingrese nuevamente la contraseña!'
        return false;
    }else if(conf_password.value != password.value){
        bg.style.display ='block';
        warning_msg.innerHTML = '¡Las dos veces de ingreso de contraseña no coinciden! Por favor, verifica nuevamente la contraseña que has ingresado.'
        return false;
    }else if(password.value.length < 6 || password.value.length > 15){
        bg.style.display ='block';
        warning_msg.innerHTML = '¡La contraseña debe tener una longitud de 6 a 15 caracteres!';
        return false;
    }else{
        let data = getData();
        if(data){
            for(let i=0;i<data.length;i++){
                if(data[i].email == email.value){
                    bg.style.display ='block';
                    warning_msg.innerHTML = '¡El correo electrónico ingresado ha sido registrado!';
                    return false;
                }
            }
        }

        let user = {
            username:username.value,
            surname:surname.value,
            email:email.value,
            pwd:password.value
        }
        
        username.value ='';
        surname.value ='';
        email.value ='';
        password.value ='';
        conf_password.value='';

        bg.style.display ='block';
        title.innerHTML='Felicitacion!!!!!!!';
        bg.style.animation='none';
        warning_msg.innerHTML = '¡Tu registro fue exitoso! En 5 segundos serás redirigido/a a la página de inicio de sesión.';

        return user;
    }
}



window.addEventListener('DOMContentLoaded',function(){
    

    let register_btn = document.getElementById('register_btn');
    let warning_btn = document.querySelector('#warning_btn');
    let bg = document.querySelector('#bg');
    

    register_btn.addEventListener('click',function(){
        
        let user = registerUser();
        if(user){
            let data = getData();
            data.push(user);
            saveData(data);
            setTimeout(function() {
                location.href = './login.html'; 
            }, 5000);
        }
    })

    warning_btn.onclick = function(){
        bg.style.display ='none';
    }

    let form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
      
    });

    
    
    
    
    
    // to see password
    let eye = document.querySelector('#eye');
        let pwd = document.getElementById('password');
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


    
})