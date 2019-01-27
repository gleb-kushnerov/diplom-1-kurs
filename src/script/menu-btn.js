(function () {
    'use strict';

    let btn = document.getElementById('menu-checkbox-container'),
        hamburger = document.getElementById('hamburger');

    btn.addEventListener('click', event => {
        hamburger.classList.toggle('active');
    })

}());