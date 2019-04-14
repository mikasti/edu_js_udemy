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
    function addZero(timeValue) {
        if (timeValue >= 0 && timeValue < 10) {
            timeValue = "0" + timeValue;
            return timeValue;
        }
    }

    let deadLine = "2019-04-16";

    function getTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date());
        if (t > 0) {
        let seconds = Math.floor((t/ 1000) % 60),
            minutes = Math.floor((t/ (1000 * 60)) % 60),
            hours = Math.floor((t/ (1000 * 60 * 60)) % 24);
            return { 
                'total': t,
                'seconds': seconds,
                'minutes': minutes,
                'hours': hours
            };
        } else {
            return {
            'total': 0,
            'seconds': 0,
            'minutes': 0,
            'hours': 0
            };
        }
           
    }

    function setTimerValue(id, endTime) {
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock(), 1000);
        function updateClock (){
            let t = getTimeRemaining(endTime);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
        }
        }
    setTimerValue('timer', deadLine);
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