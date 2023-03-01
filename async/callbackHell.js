function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre + " Yo si estoy siendo asyncrono");
    miCallback(nombre);
  }, 3000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios " + nombre + " Yo tambien fui asyncrono");
    otroCallback(nombre);
  }, 3000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla..");
    callbackHablar();
  }, 3000);
}

// -->

console.log("Iniciando proceso...");
hola("Mao", function (nombre) {
  hablar(function () {
    hablar(function () {
      hablar(function () {
        adios(nombre, function () {
          console.log("Terminando proceso...");
        });
      });
    });
  });
});
