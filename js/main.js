const modeBtn = document.querySelector('.mode-switch');
const lightSun = document.querySelector('.sun.light');
const darkMoon = document.querySelector('.moon.dark');

const body = document.body;

let mode = 'light';

if (!localStorage.getItem('mode')) {
    localStorage.setItem('mode', mode);
} else {
    mode = localStorage.getItem('mode');
}

if (mode === 'dark') {
    changeMode(mode);
}

if (modeBtn && lightSun && darkMoon) {

    modeBtn.addEventListener('click', function () {

        let isLightMoonHidden = lightSun.classList.contains('hidden');

        if (isLightMoonHidden) {
            lightSun.classList.remove('hidden');
            darkMoon.classList.add('hidden');
            changeMode('dark');
        } else {
            lightSun.classList.add('hidden');
            darkMoon.classList.remove('hidden');
            changeMode('light');
        }
        localStorage.setItem('mode', mode);
    });

} else {
    console.error("One or more elements of dark-mode not found!");
}

function changeMode(newMode) {
    if (newMode === 'dark') {
        body.setAttribute('dark-mode', '');
        lightSun.classList.remove('hidden');
        darkMoon.classList.add('hidden');
        mode = 'dark';
    }
    else {
        body.removeAttribute('dark-mode');
        mode = 'light';
    }
}












