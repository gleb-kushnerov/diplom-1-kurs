(function () {
    'use strict';
    let membersBoard = document.getElementById('team-members-board'),
        innerHtml = '<div id="x-mark-container"><span id="x-mark"></span></div>';

    membersBoard.addEventListener('click', event => {
        let img = event.target.closest('img');

        if (img) {
            let url = img.src.replace('/small/', '/large/');
            displayLargeImage(url);
        }
    });

    function displayLargeImage(url) {
        let img = new Image(),
            teamEl = document.getElementById('preview-container'),
            xMark = document.getElementById('x-mark-container');
        img.classList.add('preview');
        teamEl.classList.add('visible');

        if (teamEl.innerHTML === innerHtml) {
            img.onload = () => {
                teamEl.append(img);
                xMark.addEventListener('click', function listener () {
                    document.removeEventListener('click', listener);
                    img.remove();
                    teamEl.classList.remove('visible');
                });
            };
            img.src = url;
        }
    }
}());