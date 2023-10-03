
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
    
    userInput.addEventListener('keypress', function (e) {
        if (e.which === 13 && userInput.value != '') {
            let searchTerm = userInput.value;
            userInput.value = '';
            searchAjax({
                url: 'https://api.bing.com/qsonhs.aspx',
                data: {
                    type: 'cb',
                    hl: 'es',
                    q: searchTerm,
                },
                jsonp:"cb",
                jsonpCallback:"bing",

                success: function (data) {
                    let searchContent = [];
                    console.log(data);
                    data.AS.Results[0].Suggests.forEach(function(text,index){
                        searchContent.push('<div><strong>Resultado '+index+':</strong> <a href="https://www.google.com/search?q='+ text.Txt +'">'+ text.Txt+'</a></div>');
                    })
                    

                    searchResult.innerHTML = searchContent.join('');

                },
            })
        }
    })


    userInput.addEventListener('focus', function () {
        searchResult.style.display = 'block';

    })

    userInput.addEventListener('blur', function () {
        searchResult.addEventListener('mouseleave',function(){
            this.style.display = 'none';
        })
    })
}

