/*
Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"*/
let newMenuTab = document.querySelector('.menu'),
newtab = document.createElement('li'),
newBackWallpaper = document.querySelector('body'),
newTitle = document.getElementById('title'),
findNoiseAdvert = document.querySelector('.adv')
findBlockPrompt = document.getElementById('prompt');
newtab.className = 'menu-item';
newtab.innerText = 'Пятый пункт';
console.log(findNoiseAdvert);
newMenuTab.appendChild(newtab);
newBackWallpaper.style.backgroundImage = "url('./img/apple_true.jpg')";
newTitle.textContent = 'Мы продаем только подлинную технику Apple';
document.getElementsByClassName('column')[1].removeChild(findNoiseAdvert);
findBlockPrompt.textContent = prompt("Как вы относитесь к технике Apple", '');