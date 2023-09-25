/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/

function getData(){
    var data = localStorage.getItem('users');
    if(data!==null){
        return JSON.parse(data);
    }else{
        return [];
    }
}


function saveData(data){
    localStorage.setItem('users',JSON.stringify(data));
}


function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function userLogin() {
    var user = sessionStorage.getItem('user');

    if (user) {
        user = JSON.parse(user);
        var user_icon = document.querySelector('#user_icon');
        var user_out = document.querySelector('#user_out');
        user_out.style.display = 'block';
        user_icon.href = 'javascript:;';
        user_icon.innerHTML = user.username;
        user_out.href = 'javascript:;';
        user_out.innerHTML = 'Cerrar sesión';
        user_out.addEventListener('click', function () {
            sessionStorage.clear();
            user_out.style.display = 'none'
            location.reload();

        })
    }
}