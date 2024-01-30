const modeBtn = document.querySelector('.mode-switch');
const lightSun = document.querySelector('.sun.light');
const darkMoon = document.querySelector('.moon.dark');


modeBtn.onclick = function () {

    let isLightMoonHidden = lightSun.classList.contains('hidden');

    if (isLightMoonHidden) {
        lightSun.classList.remove('hidden');
        darkMoon.classList.add('hidden');
        document.body.setAttribute('dark', '');
    } else {
        lightSun.classList.add('hidden');
        darkMoon.classList.remove('hidden');
        document.body.removeAttribute('dark');
    }
}









