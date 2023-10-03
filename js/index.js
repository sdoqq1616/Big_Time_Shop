/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/


// controla el tamano de banner
function bannerResize() {
    let banner = document.querySelector('.focus');
    let ul = banner.querySelector('ul');
    let arrow_l = document.querySelector(".arrow-l");
    let arrow_r = document.querySelector(".arrow-r");
    let lis = ul.children;
    ul.style.width = banner.offsetWidth * (lis.length) + "px";
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.width = banner.offsetWidth + "px";
        // console.log(banner.offsetWidth + "px");
        // console.log(banner.offsetLeft + "px");

    }

    arrow_l.style.left = banner.offsetLeft + 'px';
    arrow_r.style.left = banner.offsetWidth + banner.offsetLeft - arrow_r.offsetWidth / 2 + 'px';

    let current = document.querySelector(".current");
    if (current) {
        let index = current.getAttribute('index');
        // console.log(banner.offsetWidth +" *"+ index + "px");
        ul.style.left = -banner.offsetWidth * index + "px";
    }

    //m_footer resize
    let m_footer = document.querySelector('.m_footer');
    if (m_footer) {
        m_footer.style.width = document.querySelector('.banner').offsetWidth + 'px';
    }

}


window.addEventListener('DOMContentLoaded', function () {

    // banner

    window.addEventListener('resize', function () {
        bannerResize();
    })



    //  first banner
    let arrow_l = document.querySelector(".arrow-l").querySelector('a');
    let arrow_r = document.querySelector(".arrow-r").querySelector('a');
    let banner = document.querySelector(".focus");
    let circle = document.querySelector(".circle");
    let ul = banner.querySelector('ul');

    //inicialización de banner
    for (let i = 0; i < ul.children.length; i++) {
        let li = document.createElement("li");
        li.setAttribute('index', i);
        circle.appendChild(li);
        li.addEventListener('click', function () {
            for (let i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            this.className = 'current';
            num = this.getAttribute('index');
            current = num;
            let target = -ul.children[0].offsetWidth * num;
            animation(ul, target);
        })

    }
    circle.children[0].className = 'current';
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);


    let num = 0;
    let current = 0;
    arrow_r.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            num = 0;
            ul.style.left = 0;
        }
        current++;
        num++;

        if (current > circle.children.length - 1) {
            current = 0;
        }

        let target = -ul.children[0].offsetWidth * num;

        for (let i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[current].className = 'current';
        animation(ul, target);
    })

    arrow_l.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = (ul.children.length - 1) * ul.children[0].offsetWidth + 'px';
        }
        num--;
        current--;
        if (current < 0) {
            current = circle.children.length - 1;
        }
        let target = -ul.children[0].offsetWidth * num;

        for (let i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[current].className = 'current';
        animation(ul, target);
    })

    timer = setInterval(() => {
        arrow_r.click();
    }, 3000);



    // subnav control

    let as = document.querySelector('.subnav').querySelectorAll('a');
    let map = ['#celulares', '#tables', '#laptops'];
    for (let i = 0; i < as.length; i++) {
        as[i].goto = map[i];
        as[i].onclick = function () {
            let obj = document.querySelector(this.goto);
            scrollAnimation(window, obj.offsetTop);
        }
    }

    // footer control
    as = document.querySelector('#mod_service').querySelectorAll('a');
    for (let i = 0; i < as.length; i++) {
        as[i].goto = map[i];
        as[i].onclick = function () {
            let obj = document.querySelector(this.goto);
            scrollAnimation(window, obj.offsetTop);
        }
    }


    //second banner

    let s_banner = document.querySelector(".electronics_models");
    let s_ul = s_banner.querySelector('ul');
    let s_circle = document.querySelector(".focus_circle");
    let s_num = 0;
    let s_current = 0;

    for (let i = 0; i < s_ul.children.length; i++) {
        let li = document.createElement("li");
        li.setAttribute('index', i);
        s_circle.appendChild(li);
        li.addEventListener('click', function () {
            for (let i = 0; i < s_circle.children.length; i++) {
                s_circle.children[i].className = '';
            }
            this.className = 'current';
            s_num = this.getAttribute('index');
            s_current = s_num;
            let target = -(s_ul.children[0].offsetWidth + 10) * s_num;
            animation(s_ul, target);
        })

    }

    s_circle.children[0].className = 'current';

    for (let i = 0; i < s_circle.children.length; i++) {
        let li = s_ul.children[i].cloneNode(true);
        s_ul.appendChild(li);
    }




    s_timer = setInterval(() => {
        if (s_num == s_circle.children.length) {
            s_num = 0;
            s_ul.style.left = 0;
        }
        s_current++;
        s_num++;

        if (s_current > s_circle.children.length - 1) {
            s_current = 0;
        }

        let target = -(s_ul.children[0].offsetWidth + 10) * s_num;

        for (let i = 0; i < s_circle.children.length; i++) {
            s_circle.children[i].className = '';
        }
        s_circle.children[s_current].className = 'current';
        animation(s_ul, target);
    }, 4000);





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


    // ajusta la resolucion de la pagina
    bannerResize();


});