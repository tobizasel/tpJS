const resultado = document.getElementById("resultado");
const parrafo =  document.getElementById("parrafo");
const boton1 = document.getElementById("boton-1")
const frutas = ["manzana", "plátano", "naranja", "uva", "fresa", "sandía", "kiwi", "piña", "mango", "pera"];
const boton2 = document.getElementById("boton-2")
const ciudad = {
    nombre: "Buenos Aires",
    fechaFundacion: 2011-06-26,
    poblacion: 696969,
    extension: 2
}
const boton3 = document.getElementById("boton-3");
const boton4 = document.getElementById("boton-4");
const boton5 = document.getElementById("boton-5");
const boton52 = document.getElementById("boton-5.2");


boton1.addEventListener('click', () => calculadoraEdad(document.getElementById("funcion-1").value))
boton2.addEventListener('click', () => tiroFruta(document.getElementById("funcion-2").value))
boton3.addEventListener('click', mostrarCiudad);
boton4.addEventListener('click', () => duplicarNumeros(document.getElementById("funcion-4").value))
boton5.addEventListener('click', piramide)
boton5.addEventListener('click', piramideCheta)