/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/
/* js animation © 2023 All rights reserved. Grupo Cac. Trabajo en Grupo: EAugusto Roman,  Ignacio Perez, Smith Guo y Ariel Cuenca*/


// controla el tamano de banner
function bannerResize() {
    var banner = document.querySelector('.focus');
    var ul = banner.querySelector('ul');
    var arrow_l = document.querySelector(".arrow-l");
    var arrow_r = document.querySelector(".arrow-r");
    var lis = ul.children;
    ul.style.width = banner.offsetWidth * (lis.length) + "px";
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.width = banner.offsetWidth + "px";
        // console.log(banner.offsetWidth + "px");
        // console.log(banner.offsetLeft + "px");

    }

    arrow_l.style.left = banner.offsetLeft + 'px';
    arrow_r.style.left = banner.offsetWidth + banner.offsetLeft - arrow_r.offsetWidth / 2 + 'px';

    var current = document.querySelector(".current");
    if (current) {
        var index = current.getAttribute('index');
        // console.log(banner.offsetWidth +" *"+ index + "px");
        ul.style.left = -banner.offsetWidth * index + "px";
    }

    //m_footer resize
    var m_footer = document.querySelector('.m_footer');
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
    var arrow_l = document.querySelector(".arrow-l").querySelector('a');
    var arrow_r = document.querySelector(".arrow-r").querySelector('a');
    var banner = document.querySelector(".focus");
    var circle = document.querySelector(".circle");
    var ul = banner.querySelector('ul');

    //inicialización de banner
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement("li");
        li.setAttribute('index', i);
        circle.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            this.className = 'current';
            num = this.getAttribute('index');
            current = num;
            var target = -ul.children[0].offsetWidth * num;
            animation(ul, target);
        })

    }
    circle.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);


    var num = 0;
    var current = 0;
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

        var target = -ul.children[0].offsetWidth * num;

        for (var i = 0; i < circle.children.length; i++) {
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
        var target = -ul.children[0].offsetWidth * num;

        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[current].className = 'current';
        animation(ul, target);
    })

    timer = setInterval(() => {
        arrow_r.click();
    }, 3000);



    // subnav control

    var as = document.querySelector('.subnav').querySelectorAll('a');
    var map = ['#celulares', '#tables', '#laptops'];
    for (var i = 0; i < as.length; i++) {
        as[i].goto = map[i];
        as[i].onclick = function () {
            var obj = document.querySelector(this.goto);
            scrollAnimation(window, obj.offsetTop);
        }
    }

    // footer control
    as = document.querySelector('#mod_service').querySelectorAll('a');
    for (var i = 0; i < as.length; i++) {
        as[i].goto = map[i];
        as[i].onclick = function () {
            var obj = document.querySelector(this.goto);
            scrollAnimation(window, obj.offsetTop);
        }
    }


    //second banner

    var s_banner = document.querySelector(".electronics_models");
    var s_ul = s_banner.querySelector('ul');
    var s_circle = document.querySelector(".focus_circle");
    var s_num = 0;
    var s_current = 0;

    for (var i = 0; i < s_ul.children.length; i++) {
        var li = document.createElement("li");
        li.setAttribute('index', i);
        s_circle.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < s_circle.children.length; i++) {
                s_circle.children[i].className = '';
            }
            this.className = 'current';
            s_num = this.getAttribute('index');
            s_current = s_num;
            var target = -(s_ul.children[0].offsetWidth + 10) * s_num;
            animation(s_ul, target);
        })

    }

    s_circle.children[0].className = 'current';

    for (var i = 0; i < s_circle.children.length; i++) {
        var li = s_ul.children[i].cloneNode(true);
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

        var target = -(s_ul.children[0].offsetWidth + 10) * s_num;

        for (var i = 0; i < s_circle.children.length; i++) {
            s_circle.children[i].className = '';
        }
        s_circle.children[s_current].className = 'current';
        animation(s_ul, target);
    }, 4000);



    

    //login
    userLogin();




    // ajusta la resolucion de la pagina
    bannerResize();


});