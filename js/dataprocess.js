/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/

function getData() {
    let data = localStorage.getItem('users');
    if (data !== null) {
        return JSON.parse(data);
    } else {
        return [];
    }
}


function saveData(data) {
    localStorage.setItem('users', JSON.stringify(data));
}


function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function userLogin() {
    let user = sessionStorage.getItem('user');

    if (user) {
        user = JSON.parse(user);
        let user_icon = document.querySelector('#user_icon');
        let user_out = document.querySelector('#user_out');
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




function searchAjax(obj){

    var defaults ={
        url:"#",
        type:"get",
        async:true,
        data:{},
        success:function(data){},
        jsonpCallback: "callback",
        jsonp: "callback",
    }


    for(let key in obj){
        defaults[key]=obj[key];
    }

    let params = "";
    for(let attr in defaults.data){
        params+=attr+"="+defaults.data[attr]+"&";
    }

    if(params){
        defaults.url+="?"+params;
    }

    defaults.url+=defaults.jsonp+"="+defaults.jsonpCallback;

    let script = document.createElement("script");
    script.src = defaults.url;

    window[defaults.jsonpCallback] = function (data) {
        defaults.success(data);
    }

    let head = document.querySelector("head");
    head.appendChild(script);


}