var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ing. en Sistemas Computacionales | Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .deleteChars(7)
    .start();