/* user-block popup variables */
var link = document.querySelector('.login');
var popup = document.querySelector('.modal-content');
var close = popup.querySelector('.modal-content-close');

var form = popup.querySelector('form');
var login = popup.querySelector('[name="login"]');
var password = popup.querySelector('[name="password"]');
var storage = localStorage.getItem('login');

/* user-block popup functions */

link.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('modal-content-show');
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

form.addEventListener('submit', function (e) {
    if (!login.value || !password.value) {
        e.preventDefault();
        popup.classList.add('modal-error');
    } else {
        localStorage.setItem('login', login.value);
    }
});

close.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.remove('modal-content-show');
    popup.classList.remove('modal-error');
});

window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
        if (popup.classList.contains('modal-content-show')) {
            popup.classList.remove('modal-content-show');
            popup.classList.remove('modal-error');
        }
    }
});

/* map-block popup variables */
var mapOpen = document.querySelector('.js-open-map');
var mapPopup = document.querySelector('.modal-content-map');
var mapClose = mapPopup.querySelector('.modal-content-close');

/* map-block popup functions */

mapOpen.addEventListener('click', function (e) {
    e.preventDefault();
    mapPopup.classList.add('modal-content-show');
});

mapClose.addEventListener('click', function (e) {
    e.preventDefault();
    mapPopup.classList.remove('modal-content-show');
});

window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
        if (mapPopup.classList.contains('modal-content-show')) {
            mapPopup.classList.remove('modal-content-show');
        }
    }
});