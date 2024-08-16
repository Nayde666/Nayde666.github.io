var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ing. en Sistemas Computacionales | Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();

//modo oscro
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
