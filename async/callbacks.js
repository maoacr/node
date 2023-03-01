function soyAsincrona() {
  console.log("Soy una funcion asyncrona");
}

console.log("Iniciando proceso...");
soyAsincrona();
console.log("Terminando proceso...");

//Hasta aqui no parece existir asincronia pero vamos a hacer el mismo ejercicio agregandole asyncronia

function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre + " Yo si estoy siendo asyncrono");
    miCallback(nombre);
  }, 5000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios " + nombre + " Yo tambien fui asyncrono");
    otroCallback(nombre);
  }, 5000);
}

console.log("Iniciando segundo proceso...");
hola("Mao", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando segundo proceso...");
  });
});
