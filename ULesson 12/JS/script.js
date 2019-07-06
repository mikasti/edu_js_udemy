window.addEventListener('DOMContentLoaded', function () {
    console.log("Прогрузилась");
    'use strict';
    let info = document.querySelector('.info'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(tabNum) {
        for (let i = tabNum; i < tabContent.length; i++) {
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
        } else if (target && target.classList.contains('description-btn')) {
            openMoreInfo(target);
        }

    });


    let deadLine = "2019-07-17";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60) % 24));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setTimerValue(id, endTime) {

        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            function addZero(timeValue) {
                if (timeValue >= 0 && timeValue < 10) {
                    timeValue = "0" + timeValue;
                    return timeValue;
                } else {
                    return timeValue;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

        }
    }
    setTimerValue('timer', deadLine);

    //Open Modal Window
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function openMoreInfo(param) {
        //console.log('openMoreInfo');
        //console.log(param);
        overlay.style.display = 'block';
        param.classList.add('more-splash');
        document.body.style.overflow = '';
        close.addEventListener('click', function () {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
        });


    }
    more.addEventListener('click', function () {
        openMoreInfo(more);
    });


    class Options {
        constructor(height, weight, bg, fonstSize, textAlign) {
            this.height = height;
            this.weight = weight;
            this.background = bg;
            this.fonstSize = fonstSize;
            this.textAlign = textAlign;
        }
        createDivElem() {
            console.log('Create Div Elemnt');
            let div = document.createElement('div');
            div.className = ".addNewTxtBtn ";
            //div.TEXT_NODE = "Напишите свой текст";
            let pasteDivElem = document.querySelector('.newDivBtn');
            pasteDivElem.appendChild(div);
        }
    }
    let newOpt = new Options("120", "120", "red", "11", "none");
    console.log(newOpt);
    //newOpt.createDivElem();

    //Form
    let message = {
        loading: 'Загрузка/.../',
        success: 'Спасибо! Мы с вами обязательно свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let mainForm = document.querySelector('.main-form'),
        contactForm = document.getElementById('form'),
        formStatusMessage = document.createElement('div'),
        allPageFormInput = document.getElementsByTagName('input');

    formStatusMessage.classList.add('status');
    mainForm.addEventListener('submit', function (event) {
        event.preventDefault();
        mainForm.appendChild(formStatusMessage);
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let mainFormData = new FormData(mainForm); // Take data from form
        for (let i = 0; i < mainFormData.length; i++){
            console.log(mainFormData[i]);
        }
        let mainFormDataToObj = {}; //Create obj for form data
        mainFormData.forEach(function (value, key) {
            mainFormDataToObj[key] = value;
        }); // Add data from form to obj
        console.log(mainFormDataToObj);
        let jsonMainFormData = JSON.stringify(mainFormDataToObj);
        request.send(jsonMainFormData);
        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                formStatusMessage.textContent = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                formStatusMessage.textContent = message.success;
            } else {
                formStatusMessage.textContent = message.failure;
            }
            for (let i = 0; i < allPageFormInput.length; i++) {
                allPageFormInput[i].value = '';
            }
        });
    });
    contactForm.addEventListener('submit', function (evnt) {
        evnt.preventDefault();
        contactForm.appendChild(formStatusMessage);
        let contactRequest = new XMLHttpRequest();
        contactRequest.open('POST', 'server.php');
        contactRequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        let contactFormData = new FormData(contactForm); // Take data from form
        for (let i = 0; i < contactFormData.length; i++){
            console.log(contactFormData[i]);
        }

        let contactFormDataToObj = {}; //Create obj for form data
        contactFormData.forEach(function (value, key) {
            contactFormDataToObj[key] = value;
        }); // Add data from form to obj
        console.log(contactFormDataToObj);

        let jsonContactFormData = JSON.stringify(contactFormDataToObj);

        contactRequest.send(jsonContactFormData);
       
        contactRequest.addEventListener('readystatechange', function () {
            if (contactRequest.readyState < 4) {
                formStatusMessage.textContent = message.loading;
            } else if (contactRequest.readyState === 4 && contactRequest.status == 200) {
                formStatusMessage.textContent = message.success;
            } else {
                formStatusMessage.textContent = message.failure;
            }
            for (let i = 0; i < allPageFormInput.length; i++) {
                allPageFormInput[i].value = '';
            }
        });
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