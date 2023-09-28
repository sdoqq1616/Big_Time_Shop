
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/

window.onload = ()=>{
    //login
    userLogin();

    // search
    let userInput = document.querySelector('#user-input');
    let searchResult = document.querySelector('.search-result');
    let searchContent = [];
    userInput.addEventListener('keypress', function (e) {
        if (e.which === 13 && userInput.value != '') {
            let message = userInput.value;
            userInput.value = '';
            chatAjax({
                data: message,
                success: function (result) {
                    let response = JSON.parse(result);
                    let reply = response.choices[0].message.content;
                    searchContent.unshift('<div><strong>Usted:</strong> ' + message + '</div>' + '<div><strong>BigTimeShop:</strong> ' + reply + '</div>');

                    searchResult.innerHTML = searchContent.join('');

                },
                error: function (xhr, status, error) {
                    console.log(xhr + " : " + status + " : " + error);
                }
            })
        }
    })

    userInput.addEventListener('focus', function () {
        searchResult.style.display = 'block';

    })

    userInput.addEventListener('blur', function () {
        searchResult.style.display = 'none';

    })
}

