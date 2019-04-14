window.addEventListener('DOMContentLoaded', function () {
    console.log("Прогрузилась");
    'use strict';
    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(tabC) {
        for (let i = tabC; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(tabC) {
        if (tabContent[tabC].classList.contains('hide')) {
            tabContent[tabC].classList.remove('hide');
            tabContent[tabC].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        console.log(target);
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    console.log(i);
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
   
});
/*
//Вне урока
let nav = document.querySelector('nav'),
ul = document.querySelectorAll('ul > li');
console.log(ul);
nav.addEventListener('click', function (event){
let ulTarget = event.target;
for (let i = 0; i < ul.length; i++) {
    if (ulTarget == ul[i]) {
        console.log(i);
    }
}
});
*/
