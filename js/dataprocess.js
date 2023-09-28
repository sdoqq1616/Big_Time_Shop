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


function chatAjax(obj) {
    let defaults = {
        url: 'https://api.openai.com/v1/chat/completions',
        type: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        data: "",
        async: true,
        success: function (response) { },
        error: function (xhr, status, error) { }
    }

    for (let key in obj) {
        defaults[key] = obj[key];
    }

    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    
    let systemContent='You are a world-class salesperson dedicated to online sales of mobile phones, tablets, and computers for the e-commerce website Big Time Shop. It is not allowed for you to disclose that you are an AI assistant or similar.';
    if(sessionStorage.getItem("user")){
        let user = JSON.parse(sessionStorage.getItem("user"));
        systemContent+="Now you need to assist a customer named " + user.username +".";
    }
    console.log(systemContent);

    let params = {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: systemContent },
            { role: 'user', content: defaults.data }
        ]
    };

    defaults.data = JSON.stringify(params);
    defaults.type = 'post'

    xhr.open(defaults.type, defaults.url, defaults.async);

    for (let attr in defaults.headers) {
        xhr.setRequestHeader(attr, defaults.headers[attr]);
    }


    xhr.send(defaults.data);
    if (defaults.async) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let result = xhr.responseText;
                defaults.success(result);
            }
        }
    } else {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let result = xhr.responseText;
            defaults.success(result);
        }
    }


}